import { parse } from 'node-html-parser'
import fetch from 'node-fetch'
import * as fs from 'fs'

const killTeams = [
  'https://wahapedia.ru/kill-team2/kill-teams/intercession-squad/',
  'https://wahapedia.ru/kill-team2/kill-teams/novitiate/',
  'https://wahapedia.ru/kill-team2/kill-teams/veteran-guardsman/',
  'https://wahapedia.ru/kill-team2/kill-teams/chaos-daemon/',
  'https://wahapedia.ru/kill-team2/kill-teams/warpcoven/',
  'https://wahapedia.ru/kill-team2/kill-teams/void-dancer-troupe/',
  'https://wahapedia.ru/kill-team2/kill-teams/kommando/',
  'https://wahapedia.ru/kill-team2/kill-teams/blooded/',
  'https://wahapedia.ru/kill-team2/kill-teams/hive-fleet/'
]

const getHtml = async (url) => {
  const response = await fetch(url)
  const body = await response.text()
  // console.log(body); // prints a chock full of HTML richness
  return body
}

killTeams.forEach(url =>
  getHtml(url).then(html => {
    const root = parse(html)
    const stratWrappers = getStratWrappers(root)
    const vdt = {
      equipment: linkNameToCards(root, 'Equipment'),
      rareEquipment: linkNameToCards(root, 'Rare-Equipment'),
      dataSlates: getDataSlates(root),
      strategicPloys: stratWrappers.filter(it => it.type === 'Strategic Ploy'),
      tacticalPloys: stratWrappers.filter(it => it.type === 'Tactical Ploy'),
      psychicPowers: getPsycicPowers(root),
      // requisitions: stratWrappers.filter(it => it.type === "Requisition"),
      battleHonors: root?.querySelectorAll('.customTable')[1]
        ?.querySelectorAll('tr')
        .map(tr => ({
          title: tr.text.substring(1, tr.text.length - 1).split(':')[0],
          body: tr.text.split(':')[1],
          type: 'Battle Honor'
        }))
        .filter(tr => tr.body !== undefined)
    }
    const urlParts = url.split('/')
    return fs.writeFileSync(`./data/${urlParts[urlParts.length - 2]}.json`, JSON.stringify(vdt), 'utf-8', () => {})
  })
)

const getPsycicPowers = (root) =>
  getSiblingsWithClass(root.querySelector('a[name=\'Psychic-Powers\']'), 'Columns2')[0]
    ?.querySelectorAll('.BreakInsideAvoid')
    .map(bia => {
      const list = bia?.querySelectorAll('li').map(li => li.text)
      let body = bia.querySelector('td').text.replace(bia.querySelector('.h_psychic').text, '')

      list.forEach(() => {
        body = body.replace(list, '')
      })

      return {
        title: bia.querySelector('.h_psychic').text,
        type: 'Psychic Power',
        body,
        list
      }
    }
    )

const getStratWrappers = (root) => root?.querySelectorAll('.stratWrapper').map(stratWrapper => {
  const stratName = stratWrapper.querySelector('.stratName')
  return {
    title: stratName.text.split(/([0-9][CR][P])/)[0],
    cost: stratName.text.split(/([0-9][CR][P])/)[1],
    body: stratName?.nextElementSibling?.nextElementSibling?.text,
    type: stratName?.nextElementSibling?.text
  }
})

const getDataSlates = (root) =>
  getSiblingsWithClass(root.querySelector('a[name=\'Dataslates\']'), 'pagebreak')
    .map(dataslate => processDataSlate(dataslate))

const processDataSlate = (root) => {
  const pcells = root?.querySelectorAll('.pCell2')

  return {
    name: root.querySelector('.pTable_h3').text,
    m: `${parseInt(pcells[0].text) * 2}`,
    apl: pcells[1].text,
    ga: pcells[2].text,
    df: pcells[3].text,
    sv: pcells[4].text,
    weaponProfiles: root?.querySelectorAll('.bkg').map(wp => processWeaponProfile(wp)),
    abilities: root.querySelector('.dsAbility_long')?.querySelectorAll('.BreakInsideAvoid').map(abl => abl.text)
  }
}

const processWeaponProfile = (root) => {
  const cts = root?.querySelectorAll('.ct')
  const specialRules = root.querySelector("td[align='center']")

  return {
    name: root.querySelector('.pad2626').text,
    a: cts[0].text,
    bs: cts[1].text,
    d: cts[2].text,
    specialRules: specialRules.text,
    adjacentRulesCards: []
  }
}

const linkNameToCards = (root, linkName) => processSiblingNodes(getSiblingWithClass(root.querySelector(`a[name='${linkName}']`), 'Columns2'), linkName)

const processSiblingNodes = (htmlElement, type) => htmlElement?.querySelectorAll('.h_relic').map(element => {
  const titleTextParts = element.text.replace(/[[\]]/, '').split(/([0-9/]+[CRE][P])/)
  return {
    title: titleTextParts[0],
    body: element.parentNode.rawText.replace(element.text, ''),
    type,
    cost: titleTextParts[1]
  }
})

const getSiblingsWithClass = (node, className) => {
  const results = []
  let sibling = getSiblingWithClass(node, className)

  while (sibling != null) {
    results.push(sibling)
    sibling = getSiblingWithClass(sibling, className)
  }

  return results
}

const getSiblingWithClass = (node, className) => {
  let sibling = node?.nextElementSibling
  while (sibling != null) {
    if (sibling.classList.contains(className)) { return sibling }

    sibling = sibling?.nextElementSibling
  }
}

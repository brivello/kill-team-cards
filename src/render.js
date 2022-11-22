/* eslint-disable react/jsx-key */

import React from 'react'
import ReactPDF, { Document, Font } from '@react-pdf/renderer'
import * as fs from 'fs'
import Equipment from './components/Equipment'
import DataSlate from './components/DataSlate'
import WeaponProfile from './components/WeaponProfile'

Font.register({ family: 'Regular', src: 'C:/kill-team-cards/assets/Roboto-Regular.ttf' })
Font.register({ family: 'Bold', src: 'C:/kill-team-cards/assets/Roboto-Bold.ttf' })
Font.register({ family: 'Light', src: 'C:/kill-team-cards/assets/Roboto-Light.ttf' })
Font.register({ family: 'Medium', src: 'C:/kill-team-cards/assets/Roboto-Medium.ttf' })
Font.register({ family: 'mcBold', src: 'C:/kill-team-cards/assets/Minion-Cyrillic-Bold.ttf' })

const killTeamJson = JSON.parse(fs.readFileSync(`C:/kill-team-cards/data/${'void-dancer-troupe'}.json`))

const KillTeam = () => (
  <Document>
      {killTeamJson.dataSlates.reduce(
        (weaponProfiles, dataSlate) => weaponProfiles.concat(dataSlate.weaponProfiles),
        []
      ).map(weaponProfile => <WeaponProfile weaponProfile={weaponProfile}/>)}
      {killTeamJson.dataSlates.map(dataSlate => <DataSlate dataSlate={dataSlate}/>)}
      {killTeamJson.equipment.map(equipment => <Equipment equipment={equipment}/>)}
      {killTeamJson.rareEquipment.map(equipment => <Equipment equipment={equipment}/>)}
  </Document>
)

ReactPDF.render(<KillTeam />, './output/killTeam.pdf', () => console.log('DONE'))

import { fetch } from 'node-fetch'

export const fetchVoidDancers = async () => {
  const response = await fetch('https://wahapedia.ru/kill-team2/kill-teams/void-dancer-troupe/')
  const body = await response.text()
  // console.log(body); // prints a chock full of HTML richness
  return body
}

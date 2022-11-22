import { atom } from 'recoil'
import { v4 as uuid } from 'uuid' // TODO: Remove
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const comment = () => ({
  id: uuid(),
  text: 'This post is way too generic.'
})
const comment2 = () => ({
  id: uuid(),
  text: "I think it's just fine!"
})

const posts = [
  {
    id: uuid(),
    comments: [],
    text: lorem,
  },
  {
    id: uuid(),
    comments: [comment()],
    text: lorem,
  },
  {
    id: uuid(),
    comments: [comment(), comment2()],
    text: lorem,
  }
]

export default atom({
  key: 'posts',
  default: posts // TODO: Use Real Data Later.
})

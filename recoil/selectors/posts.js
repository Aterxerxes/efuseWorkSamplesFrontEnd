import { selector } from 'recoil'
import { v4 as uuid } from 'uuid'

import Posts from '../atoms/posts'

export const post = selector({
  key: 'post',
  get: ({get}) => {
    const postList = get(Posts)

    // TODO: Figure out how to find just one
    const post = postList.find(item => item.id === '123')
    return post
  },
  set: ({get, set}, newValue) => {
    const postList = get(Posts)
    if (newValue.id) {
      // This is an update, do the update.
      // NOTE: I was asked not to do updates, but would have done them here.
    } else {
      // This is a create, add a new one.
      const newList = [
        ...postList,
        {
          id: uuid(),
          comments: [],
          text: newValue
        }
      ]
      set(Posts, newList)
    }
  }
})

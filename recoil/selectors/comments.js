import { selector } from 'recoil'
import { v4 as uuid } from 'uuid'

import Posts from '../atoms/posts'

export const comment = selector({
  key: 'comment',
  get: ({get}) => {
    const postList = get(Posts)

    // TODO: Figure out how to find just one
    const post = postList.find(item => item.id === '123')
    return post
  },
  set: ({get, set}, newValue) => {
    const postList = get(Posts)
    
    const index = postList.findIndex(item => {
      return item.id == newValue.postId
    })

    const post = postList[index]

    const newPost = {
      ...post,
      comments: [
        {
          id: uuid(),
          text: newValue.text,
          timestamp: Date.now(),
          metadata: {
            hypeCount: 0
          }
        },
        ...post.comments
      ]
    }

    const newList = [
      ...postList
    ]
    newList.splice(index, 1, newPost)
    set(Posts, newList)
  }
})
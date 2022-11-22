import { selector } from 'recoil'

import Posts from '../atoms/posts'

export const like = selector({
  key: 'like',
  get: ({get}) => {
    const postList = get(Posts)

    // TODO: Figure out how to find just one
    const post = postList.find(item => item.id === '123')
    return post
  },
  set: ({get, set}, newValue) => {
    const postList = get(Posts)
    console.log('newValue likes', newValue)
    
    const postIndex = postList.findIndex(item => {
      return item.id == newValue.postId
    })

    const post = postList[postIndex]

    if (newValue.commentId) {
      const newPost = {
        ...post,
      }
      const commentIndex = newPost.comments.findIndex(item => item.id == newValue.commentId)
      const comment = newPost.comments[commentIndex]
      const hypeExists = comment.metadata?.hypeCount
      const newComment = {
        ...comment,
        metadata: {
          ...comment.metadata,
          hypeCount: hypeExists ? comment.metadata.hypeCount + 1 : 1
        }
      }
      newPost.comments.splice(commentIndex, 1, newComment)
      const newList = [
        ...postList
      ]
      newList.splice(postIndex, 1, newPost)
      set(Posts, newList)
    } else {
      const hypeExists = post.metadata?.hypeCount
      const newPost = {
        ...post,
        metadata: {
          ...post.metadata,
          hypeCount: hypeExists ? post.metadata.hypeCount + 1 : 1
        }
      }

      const newList = [
        ...postList
      ]
      newList.splice(postIndex, 1, newPost)
      set(Posts, newList)
    }
  }
})
import React from 'react'
import { useRecoilValue } from 'recoil'

import Post from './Post'
import Input from './Input'

import Posts from '../recoil/atoms/posts'

export default () => {
  const postList = useRecoilValue(Posts)
  return (
    <section className="post-list-container">
      <Input submitText={'Post'} />
      {
        postList.map(post => <Post key={post.id} {...post} />)
      }
    </section>
  )
}

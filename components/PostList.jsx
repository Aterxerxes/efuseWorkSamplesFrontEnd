import React from 'react'
import { useRecoilValue } from 'recoil'

import Post from './Post'

import Posts from '../recoil/atoms/posts'

import styles from './PostList.module.css'
import AddPost from './AddPost'

export default () => {
  const postList = useRecoilValue(Posts)
  return (
    <section className={styles.postListContainer}>
      <div className={styles.postListBody}>
        <AddPost />
        {
          postList.map(post => <Post imageSize={100} key={post.id} {...post} />)
        }
      </div>
    </section>
  )
}

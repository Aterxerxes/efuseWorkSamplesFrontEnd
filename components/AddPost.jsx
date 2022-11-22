import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faVideo } from '@fortawesome/free-solid-svg-icons'

import styles from './AddPost.module.css'
import { post } from '../recoil/selectors/posts'

export default () => {
  const [text, setText] = useState('')
  const setPost = useSetRecoilState(post)

  const postHandler = () => {
    setPost(text)
  }
  return (
  <div className={styles.addPostContainer}>
    <input
      type="text"
      className={styles.addPostInput}
      placeholder="What's on your mind?"
      onChange={(event) => {setText(event.target.value)}}
      value={text}
    />
    <div className={styles.footer}>
      <div className={styles.footerLeft}>
        <FontAwesomeIcon className={styles.footerLeftIcon} icon={faCamera} />
        <span className={styles.footerLeftText}>
          Add Media
        </span>
        <FontAwesomeIcon className={styles.footerLeftIcon} icon={faVideo} />
        <span className={styles.footerLeftText}>
          Go Live
        </span>
      </div>
      <div className={styles.footerRight}>
        <button
          onClick={postHandler}
          className={styles.postButton}
        >Post</button>
      </div>
    </div>
  </div>
)}

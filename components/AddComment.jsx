import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faMessage } from '@fortawesome/free-solid-svg-icons'

import styles from './AddComment.module.css'
import { comment } from '../recoil/selectors/comments'

export default ({id}) => {
  const [viewType, setViewType] = useState('add')
  const [text, setText] = useState('')
  const setComment = useSetRecoilState(comment)
  const handleViewChange = () => {
    if (viewType === 'add') { setViewType('edit') }
    else { setViewType('add') }
  }

  const handleAddComment = () => {
    console.log('adding comment (not really)')
    setComment({ postId: id, text })
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddComment()
    }
  }

  if (viewType === 'add') {
    return (
      <div onClick={handleViewChange} className={styles.addCommentContainer}>
        <FontAwesomeIcon icon={faMessage} />
        <input
          type="text"
          placeholder="Add comment"
          className={styles.commentInputClickable}
        />
        <FontAwesomeIcon  icon={faCirclePlus} />
      </div>
    )
  } else {
    return (
      <div className={styles.addCommentContainer}>
        <input
          autoFocus
          type="text"
          placeholder="Comment goes here"
          className={styles.commentInputEditable}
          onKeyPress={handleKeyPress}
          onChange={(event) => {setText(event.target.value)}}
          value={text}
        />
        <div
          onClick={handleAddComment}
          className={styles.postCommentButton}>
          Post
        </div>
      </div>
    )
  }
}

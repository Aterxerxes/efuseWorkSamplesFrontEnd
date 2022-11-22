import { useState } from 'react'
import styles from './AddComment.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faMessage } from '@fortawesome/free-solid-svg-icons'



export default () => {
  const [viewType, setViewType] = useState('add')
  const handleViewChange = () => {
    if (viewType === 'add') { setViewType('edit') }
    else { setViewType('add') }
  }
  const handleAddComment = () => {
    console.log('Done')
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

import styles from './Post.module.css'
import DynamicPost from './DynamicPost'

export default (post) => {
  return (
    <div className={styles.postContainer}>
      <p className={styles.ellipses}>...</p>
      <DynamicPost {...post} postId={post.id} />
    </div>
  )
}

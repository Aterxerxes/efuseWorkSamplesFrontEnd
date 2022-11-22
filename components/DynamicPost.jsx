import styles from './DynamicPost.module.css'

import Comment from './Comment'
import AddComment from './AddComment'
import Separator from './Separator'
import PostHeader from './PostHeader'

import MetaData from './MetaData'

export default (params) => {
  const { id, imageSize, text, comments, type, timestamp, metaData } = params
  return (
  <div className={styles.postBody}>
    <PostHeader
      size={imageSize}
      username={'marty'}
      timestamp={timestamp || Date.now() - 5000}
    />
    <p>{text}</p>
    <MetaData {...metaData} />
    {
      type !== 'comment' && <AddComment id={id}/>
    }
    {
      comments && comments.length > 0 && <Separator />
    }
    {
      comments && comments.map(comment => <Comment key={comment.id} {...comment} />)
    }
  </div>
)}


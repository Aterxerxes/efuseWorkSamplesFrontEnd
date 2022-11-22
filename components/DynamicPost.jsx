import styles from './DynamicPost.module.css'

import Comment from './Comment'
import AddComment from './AddComment'
import Separator from './Separator'
import PostHeader from './PostHeader'

import MetaData from './MetaData'

export default (params) => {
  const { id, imageSize, text, comments, type, timestamp, metadata } = params
  // TODO: Only allow one 'like" per user.
  const args =  {
    userId: 'abc123',
    commentId: params.commentId,
    postId: params.postId,
    commentText: params.commentText,
    commentCount: comments?.length ? comments.length : 0
  }

  return (
  <div className={styles.postBody}>
    <PostHeader
      size={imageSize}
      username={'marty'}
      timestamp={timestamp || Date.now() - 5000}
    />
    <p>{text}</p>
    <MetaData {...metadata} {...args} />
    {
      type !== 'comment' && <AddComment id={id}/>
    }
    {
      comments && comments.length > 0 && <Separator />
    }
    {
      comments && comments.map(comment => {
        return <Comment key={comment.id} {...comment} postId={params.postId} commentId={comment.id} />
      })
    }
  </div>
)}


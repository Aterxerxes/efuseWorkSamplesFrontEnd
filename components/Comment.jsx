import DynamicPost from './DynamicPost'

// TODO: Delete if not needed
import styles from './Comment.module.css'

// TODO: plug in data to module.
export default (params) => (
  <DynamicPost
    {...params}
    imageSize={40}
    username={'marty'}
    timestamp={Date.now()}
    type={'comment'}
    commentText={'Replies'}
  />
)
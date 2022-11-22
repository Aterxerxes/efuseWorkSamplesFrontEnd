import DynamicPost from './DynamicPost'

// TODO: Delete if needed
import styles from './Comment.module.css'

// TODO: plug in data to module.
export default ({text}) => (
  <DynamicPost
    imageSize={40}
    username={'marty'}
    timestamp={Date.now()}
    type={'comment'}
    text={text}
  />
)
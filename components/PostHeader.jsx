import styles from './PostHeader.module.css'
import Image from 'next/image'

// Person is going to always be the same for this example. Would have imported otherwise.
export default ({ size, username, timestamp }) => {
  const timeAgo = Date.now() - timestamp

  let timeDisplay = null
  const seconds = timeAgo/1000
  const minutes = seconds / 60
  const hours = minutes / 60
  const days = hours / 24
  if (seconds < 60) {
    timeDisplay = Math.floor(seconds) + ' seconds'
  } else if (minutes > 60) {
    timeDisplay = Math.floor(minutes) + ' minutes'
  } else if (hours > 60) {
    timeDisplay = Math.floor(hours) + ' hours'
  } else if (days > 24) {
    timeDisplay = Math.floor(days) + ' days'
  }

  return (
  <div className={styles.profileImageContainer}>
    <Image
      className={styles.headerImage}
      alt={'Mario on his flagpole.'}
      src={`https://source.unsplash.com/UdCNVHNgHdI/${size}x${size}`}
      width={size}
      height={size}
    />
    <div className={styles.headerTextContainer}>
      <div className={styles.headerText}>
        {username || 'unknown user'}
      </div>
      <div>
        {timeDisplay + ' ago' || 'unknown time'}
      </div>
    </div>
  </div>
)}

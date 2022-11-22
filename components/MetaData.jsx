import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameSimple, faMessage, faShareAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './MetaData.module.css'

export default (params) => (
  <div className={styles.metaDataContainer}>
    <span className={styles.dataItem}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faFireFlameSimple} />
      <span className={styles.dataNumber}>
        {params.hypeCount || 100}
      </span>
      Hypes
    </span>
    <span className={styles.dataItem}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faMessage} />
      <span className={styles.dataNumber}>
        {params.commentCount || 25}
      </span>
      { params.commentText || 'Comment'}
    </span>
    <span className={styles.dataItem}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faShareAlt} />
      <span className={styles.dataNumber}>
        {params.shareCount || 12}
      </span>
      Shares
    </span>
    {
      params.viewCount && (
        <span className={styles.dataItem}>
          <span className={styles.dataNumber}>
            {params.viewCount}
          </span>
          Views
        </span>
      )
    }
    
  </div>
)

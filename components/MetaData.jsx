import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameSimple, faMessage, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { useSetRecoilState } from 'recoil'

import styles from './MetaData.module.css'
import { like } from '../recoil/selectors/likes'

export default (params) => {
  const setLike = useSetRecoilState(like)

  const handleAddLike = () => {
    setLike({ ...params })
  }

  return (
  <div className={styles.metaDataContainer}>
    <span onClick={handleAddLike} className={styles.dataItemClickable}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faFireFlameSimple} />
      <span className={styles.dataNumber}>
        {params.hypeCount || 0}
      </span>
      Hypes
    </span>
    <span className={styles.dataItem}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faMessage} />
      <span className={styles.dataNumber}>
        {params.commentCount || 0}
      </span>
      { params.commentText || (params.commentCount === 1 ? 'Comment' : 'Comments')}
    </span>
    <span className={styles.dataItem}>
      <FontAwesomeIcon className={styles.dataIcon} icon={faShareAlt} />
      <span className={styles.dataNumber}>
        {params.shareCount || 0}
      </span>
      Shares
    </span>
    {
      params.viewCount !== undefined && (
        <span className={styles.dataItem}>
          <span className={styles.dataNumber}>
            {params.viewCount}
          </span>
          Views
        </span>
      )
    }
  </div>
)}

import { useState } from 'react'
import { useSetRecoilState } from 'recoil'

import { post } from '../recoil/selectors/posts'

export default (params) => {
  const [text, setText] = useState('')
  const setPost = useSetRecoilState(post)

  const handleSubmit = () => {
    setPost(text)
  }

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={(event) => {setText(event.target.value)}}
        placeholder={params.placeholder || "What's on your mind?"}
      />
      <button onClick={handleSubmit}>{params.submitText}</button>
    </div>
  )
}

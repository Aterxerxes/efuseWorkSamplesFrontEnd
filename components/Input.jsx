import { useState } from 'react'

export default (params) => {
  const [text, setText] = useState('')

  return (
    <div className="input-container">
      <input
        type="text"
        value={text}
        onChange={(event) => {setText(event.target.value)}}
        placeholder={params.placeholder || "What's on your mind?"}
      />
      <button>{params.isPost ? 'Post' : 'Comment'}</button>
    </div>
  )
}

import React from 'react'
import Post from './Post'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const comment = {
  id: 11,
  text: 'This post is way too generic.'
}

const posts = [
  {
    id: 1,
    comments: [],
    text: lorem,
  },
  {
    id: 2,
    comments: [comment],
    text: lorem,
  },
  {
    id: 3,
    comments: [comment, comment],
    text: lorem,
  }
]

export default () => (
  <section className="post-list-container">
    {
      posts.map(post => <Post {...post} />)
    }
  </section>
)

import Comment from "./Comment"

export default (post) => (
  <aside>
    {post.text}
    {
      post.comments.map(comment => <Comment {...comment} />)
    }
  </aside>
)

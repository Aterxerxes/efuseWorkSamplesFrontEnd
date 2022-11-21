import Comment from "./Comment"

export default (post) => (
  <aside>
    {post.id}
    {post.text}
    {
      post.comments.map(comment => <Comment key={comment.id} {...comment} />)
    }
  </aside>
)

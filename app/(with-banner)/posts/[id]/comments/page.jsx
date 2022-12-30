const fetchComments = async (id) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })

  // Force to show error.jsx for comments
  // throw new Error('Error loading comments')

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60 // will keep the data in cache each 60 seconds
    }
  }).then((res) => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComments(id)

  return (
    <p>
      <ul style={{ fontSize: '10px', background: '#aaa' }}>
        {comments.map((comment) => (
          <article key={comment.id}>
            <li key={comment.id}>
              <h2 style={{ color: '#352' }}>{comment.name}</h2>
              <p>{comment.body}</p>
            </li>
          </article>
        ))}
      </ul>
    </p>
  )
}

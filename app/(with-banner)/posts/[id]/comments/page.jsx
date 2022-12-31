import Image from 'next/image'

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
              <Image alt={comment.name} src={`https://avatars.dicebear.com/api/pixel-art/${comment.email}.svg`} width='50' height='50' />
              <h2 style={{ color: '#352' }}>{comment.name}</h2>
              <p>{comment.body}</p>
            </li>
          </article>
        ))}
      </ul>
    </p>
  )
}

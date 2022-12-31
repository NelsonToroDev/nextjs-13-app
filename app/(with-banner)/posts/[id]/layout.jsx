import Link from 'next/link'

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60 // will keep the data in cache each 60 seconds
    }
  }).then((res) => res.json())
}

export default async function Post ({ children, params }) {
  const { id } = params
  const post = await fetchSinglePost(id)

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.title}</p>
      <Link href={`posts/${id}/comments`} style={{ color: '#09f' }}>Comments</Link>
      {children}
    </article>
  )
}

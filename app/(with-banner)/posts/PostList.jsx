import { LikeButton } from './LikeButton'
import Link from 'next/link'

// Adding the fetching into a function will make it to be executed in the server side
const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60 // will keep the data in cache each 60 seconds
    }
  }).then((res) => res.json())
}

export default async function PostList () {
  // Since this this is a Server Component the we cannot use the fetching in the same way as we do with Client Component
  //
  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data)
  //     })
  // })

  const posts = await fetchPosts()

  // Return will send to client only 5 element not all elements
  // Rendered into Server side
  return (
    <section>
      {posts.slice(0, 5).map((post) => (
        <article key={post.id}>
          <Link href='/posts/[id]' as={`/posts/${post.id}`}>
            <h2 style={{ color: '#09f' }}>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </section>
  )
}

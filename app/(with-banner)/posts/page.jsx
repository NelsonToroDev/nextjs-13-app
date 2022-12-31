import { Suspense } from 'react'
import PostList from './PostList'

export default async function PostsPage() {
  // Rendered into Server side
  return (
    <section>
      <Suspense fallback={<p>Loading posts</p>}>
        <PostList />
      </Suspense>
    </section>
  )
}

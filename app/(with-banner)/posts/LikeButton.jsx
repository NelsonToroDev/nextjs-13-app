'use client'
// this will be a Client Component then included in the bundle
// Basically this component will be rendered in server but in a static way,
// this means that the hydration of that static html will occour in the client: adding css, adding behaviors with JS and so on
import { useState } from 'react'

export function LikeButton (params) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '❤️' : '🤍'}
    </button>
  )
}

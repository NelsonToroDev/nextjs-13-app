import { Counter } from './posts/Counter'

export default function PostsLayout ({ children }) {
  return (
    <div>
      <Counter />
      <marquee style={{ background: '#776', color: 'purple', fontSize: '20px' }}>Shared Layout</marquee>
      {children}
    </div>
  )
}

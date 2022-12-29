import { Counter } from './Counter'

export default function PostLayout({ children }) {
  return (
    <div>
      <h2>this is a Post Layout which keeps a state</h2>
      <Counter />
      {children}
    </div>
  )
}

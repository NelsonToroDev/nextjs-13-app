export default function Post ({ params }) {
  const { id } = params
  return <h1>Esto un post {id}</h1>
}

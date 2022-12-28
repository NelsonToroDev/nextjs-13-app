import Link from 'next/link'
const links = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'About',
    route: '/about'
  }
]

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>My first app using Next Js 13</title>
      </head>
      <body>
        <header>
          <nav>
            <ul>
              {links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}

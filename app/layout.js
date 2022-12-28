import '../styles/globals.css'
import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first app using Next Js 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

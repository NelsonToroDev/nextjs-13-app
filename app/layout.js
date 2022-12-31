import '../styles/globals.css'
import { Navigation } from '../components/Navigation'
import { spaceGrotesk, sevillana } from './fonts'

export default function RootLayout ({ children }) {
  return (
    <html className={sevillana.variable}>
      <head>
        <title>My first app using Next Js 13</title>
      </head>
      <body className={spaceGrotesk.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

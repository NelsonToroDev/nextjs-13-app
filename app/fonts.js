import { Space_Grotesk as spaceGroteskFont, Sevillana } from '@next/font/google'

export const spaceGrotesk = spaceGroteskFont({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--my-font-gretest'
})

export const sevillana = Sevillana({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--my-font-sevillana'
})

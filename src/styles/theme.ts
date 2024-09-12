// theme.ts
import { ColorName } from '@/types/type'
import { extendTheme } from '@chakra-ui/react'
import { JetBrains_Mono, Source_Sans_3 } from 'next/font/google'
import { githubDarkTheme } from './themes'
const defaultFont = JetBrains_Mono({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})
const sourceSans = Source_Sans_3({
  weight: ['400', '900'],
  subsets: ['latin'],
})
const theme = {
  fonts: {
    heading: defaultFont.style.fontFamily,
    body: defaultFont.style.fontFamily,
    sans: sourceSans.style.fontFamily,
  },
  styles: {
    global: () => ({
      '::-webkit-scrollbar': {
        width: '10px',
        height: '10px',
      },
      /* Track */
      '::-webkit-scrollbar-track': {
        background: 'var(--scrollbar-track-bg)',
      },
      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: 'var(--scrollbar-thumb-bg)',
      },
    }),
  },
  config: {
    initialColorMode: 'system', // see https://chakra-ui.com/docs/styled-system/color-mode
    useSystemColorMode: true,
  },
  colors: githubDarkTheme.colors,
  components: {
    Button: {
      variants: {
        'accent-filled': {
          borderRadius: 'md',
          border: '2px solid',
          borderColor: 'var(--accent-color)',
          bgColor: 'var(--accent-color)',
          color: 'var(--text-color)',
          px: [6, 8],
          py: [2, 4],
          fontSize: ['md', 'lg'],
          _hover: {
            textDecoration: 'none',
          },
        },
        'accent-outlined': {
          borderRadius: 'md',
          border: '2px solid',
          borderColor: 'var(--accent-color)',
          color: 'var(--accent-color)',
          px: [6, 8],
          py: [2, 4],
          fontSize: ['md', 'lg'],
          _hover: {
            textDecoration: 'none',
          },
        },
      },
    },
  },
}

export default extendTheme(theme)

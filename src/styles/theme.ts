// theme.ts
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { githubDarkTheme } from './themes'
import { ColorName } from '@/types/global'
import { Source_Sans_3, JetBrains_Mono } from 'next/font/google'
const defaultFont = JetBrains_Mono({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})
const sourceSans = Source_Sans_3({
  weight: ['400', '800'],
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
        background: 'primary.scrollbarTrackBg',
      },
      /* Handle */
      '::-webkit-scrollbar-thumb': {
        background: 'primary.scrollbarThumbBg',
      },
    }),
  },
  config: {
    initialColorMode: 'system', // see https://chakra-ui.com/docs/styled-system/color-mode
    useSystemColorMode: true,
  },
  colors: githubDarkTheme.colors,
  // We define a semanticTokens.colors object where we name our tokens and point our colors
  semanticTokens: {
    colors: {
      mainBg: 'primary.mainBg',
      bgText: 'primary.bgText',
      textColor: 'primary.textColor',
      accentColor: 'primary.accentColor',
      titleBarBg: 'primary.titleBarBg',
      sideBarBg: 'primary.sideBarBg',
      sideBarHoverBg: 'primary.sideBarHoverBg',
      explorerBg: 'primary.explorerBg',
      explorerHoverBg: 'primary.explorerHoverBg',
      explorerBorder: 'primary.explorerBorder',
      tabsBg: 'primary.tabsBg',
      tabBg: 'primary.tabBg',
      tabActiveBg: 'primary.tabActiveBg',
      tabBorder: 'primary.tabBorder',
      bottomBarBg: 'primary.bottomBarBg',
      bottomBarBorder: 'primary.bottomBarBorder',
      buttonBg: 'primary.buttonBg',
      buttonText: 'primary.buttonText',
      bottomBarHoverBg: 'primary.bottomBarHoverBg',
      scrollbarTrackBg: 'primary.scrollbarTrackBg',
      scrollbarThumbBg: 'primary.scrollbarThumbBg',
      articleBg: 'primary.articleBg',
    } as Record<ColorName, string>,
  },
}

export default extendTheme(theme)

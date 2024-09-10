'use client'
import { Box, Flex } from '@chakra-ui/react'
import { Providers } from './providers'
import TitleBar from '@/components/layout/TitleBar'
import BottomBar from '@/components/layout/BottomBar'
import SideBar from '@/components/layout/SideBar'
import Explorer from '@/components/layout/Explorer'
import MainContainer from '@/components/layout/MainContainer'
import '@/styles/scss/theme.scss'
import { useEffect } from 'react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Set the theme from local storage
  useEffect(() => {
    if (localStorage.getItem('theme')) {
      document.documentElement.setAttribute(
        'data-theme',
        localStorage.getItem('theme') ?? 'github-dark',
      )
    }
  }, [])
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            color={'var(--text-color)'}
            bgColor={'var(--main-bg)'}
            height={'100vh'}
            overflowY={'hidden'}
          >
            <TitleBar />
            <Flex
              id={'main-container'}
              width={'100%'}
              height={'calc(100% - 60px)'}
              overflowY={'hidden'}
            >
              <SideBar />
              <Explorer />
              <MainContainer>{children}</MainContainer>
            </Flex>
            <BottomBar />
          </Box>
        </Providers>
      </body>
    </html>
  )
}

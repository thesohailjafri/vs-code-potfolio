// app/layout.tsx
import { Box, Flex } from '@chakra-ui/react'
import { Providers } from './providers'
import TitleBar from '@/components/layout/TitleBar'
import BottomBar from '@/components/layout/BottomBar'
import Sidebar from '@/components/layout/Sidebar'
import Explorer from '@/components/layout/Explorer'
import MainContainer from '@/components/layout/MainContainer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box color={'white'} height={'100vh'} overflowY={'hidden'}>
            <TitleBar />
            <Flex
              id={'main-container'}
              width={'100%'}
              height={'calc(100% - 68px)'}
              overflowY={'hidden'}
            >
              <Sidebar />
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

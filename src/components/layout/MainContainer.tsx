import { Box, BoxProps } from '@chakra-ui/react'
import TabsBar from './TabsBar'
import BreadcrumbBar from './BreadcrumbBar'

interface Props extends BoxProps {
  children: React.ReactNode
}

export default function MainContainer({ children, ...props }: Props) {
  return (
    <Box flex={1} {...props}>
      <TabsBar />
      <BreadcrumbBar />
      <Box
        bgColor={'primary.mainBg'}
        height={'full'}
        overflowY={'auto'}
        pt={4}
        px={4}
        pb={20}
      >
        {children}
      </Box>
    </Box>
  )
}

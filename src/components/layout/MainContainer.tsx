import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  children: React.ReactNode
}

export default function MainContainer({ children, ...props }: Props) {
  return (
    <Box
      flex={1}
      bgColor={'red.300'}
      height={'full'}
      overflowY={'auto'}
      {...props}
    >
      {children}
    </Box>
  )
}

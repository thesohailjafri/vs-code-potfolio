import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function Explorer({ ...props }: Props) {
  return (
    <Box maxW={300} width={'20%'} bgColor={'red.400'} {...props}>
      Explorer
    </Box>
  )
}

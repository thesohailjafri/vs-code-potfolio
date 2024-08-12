import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function Sidebar({ ...props }: Props) {
  return (
    <Box maxW={14} width={'10%'} bgColor={'red.500'} {...props}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, et!
    </Box>
  )
}

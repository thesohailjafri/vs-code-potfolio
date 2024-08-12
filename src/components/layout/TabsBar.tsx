import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function TabsBar({ ...props }: Props) {
  return <Box {...props}>Bottombar</Box>
}

import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function GithubProjectCard({ ...props }: Props) {
  return <Box {...props}>Bottombar</Box>
}

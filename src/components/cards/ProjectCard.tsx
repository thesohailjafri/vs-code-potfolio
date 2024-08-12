import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function ProjectCard({ ...props }: Props) {
  return <Box {...props}>Bottombar</Box>
}

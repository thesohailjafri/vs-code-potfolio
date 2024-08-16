import { Box, BoxProps, Icon, Stack } from '@chakra-ui/react'
import { title } from 'process'
import {
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscEdit,
  VscMail,
} from 'react-icons/vsc'

interface Props extends BoxProps {}

export default function Sidebar({ ...props }: Props) {
  return (
    <Box maxW={14} width={'10%'} bgColor={'primary.sideBarBg'} {...props}>
      <Stack>
        {links.map((link, index) => (
          <Box key={index} px={3} py={2} _hover={{ bgColor: 'gray.700' }}>
            {/* <Icon as={VscFiles} /> */}
            <link.icon
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

const links = [
  {
    icon: VscFiles,
    title: 'Files',
  },
  {
    icon: VscGithubAlt,
    title: 'Github',
  },
  {
    icon: VscCode,
    title: 'Code',
  },
  {
    icon: VscEdit,
    title: 'Edit',
  },
  {
    icon: VscMail,
    title: 'Mail',
  },
]

import { getPath } from '@/utils/default'
import { Box, BoxProps, Icon, Link, Stack } from '@chakra-ui/react'
import { title } from 'process'
import {
  VscFiles,
  VscGithubAlt,
  VscCode,
  VscEdit,
  VscMail,
} from 'react-icons/vsc'

interface Props extends BoxProps {}

export default function SideBar({ ...props }: Props) {
  return (
    <Box width={12} bgColor={'var(--sidebar-bg)'} {...props}>
      <Stack>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            px={3}
            py={2}
            _hover={{ bgColor: 'gray.700' }}
          >
            <link.icon
              style={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

const links = [
  {
    icon: VscFiles,
    title: 'Files',
    href: getPath.home,
  },
  {
    icon: VscGithubAlt,
    title: 'Github',
    href: getPath.github,
  },
  {
    icon: VscCode,
    title: 'Code',
    href: getPath.projects,
  },
  {
    icon: VscEdit,
    title: 'Edit',
    href: getPath.about,
  },
  {
    icon: VscMail,
    title: 'Mail',
    href: getPath.contact,
  },
]

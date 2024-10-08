'use client'
import { pageLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Text, Link } from '@chakra-ui/react'
import usePage from '@/hooks/usePage'
interface Props extends BoxProps {}

export default function TabsBar({ ...props }: Props) {
  const { pageSlug } = usePage()
  return (
    <Box position={'relative'} fontFamily={'sans'}>
      <Box
        position={'absolute'}
        width={'full'}
        overflowX={'auto'}
        bgColor={'var(--tabs-bg)'}
        height={'40px'}
        display={'flex'}
        alignItems={'center'}
        {...props}
      >
        <HStack
          flexShrink={0}
          spacing={0}
          alignItems={'center'}
          height={'full'}
        >
          {pageLinks.map((link, index) => (
            <HStack
              key={index}
              as={Link}
              href={link.href}
              px={3}
              py={1}
              flexShrink={0}
              _hover={{
                textDecoration: 'none',
              }}
              borderTop={'2px solid'}
              borderColor={
                pageSlug === link.slug ? 'var(--accent-color)' : 'transparent'
              }
              bgColor={
                pageSlug === link.slug ? 'var(--tab-active-bg)' : 'transparent'
              }
              height={'full'}
            >
              <link.icon color={link.color} size={16} />
              <Text>{link.title}</Text>
            </HStack>
          ))}
        </HStack>
      </Box>
      <Box height={'40px'} />
    </Box>
  )
}

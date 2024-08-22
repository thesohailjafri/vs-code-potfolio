'use client'
import { pageLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Text, Link } from '@chakra-ui/react'
import usePage from '@/hooks/usePage'
interface Props extends BoxProps {}

export default function TabsBar({ ...props }: Props) {
  const { pageSlug } = usePage()
  return (
    <Box position={'relative'}>
      <Box
        position={'absolute'}
        width={'full'}
        overflowX={'auto'}
        bgColor={'primary.tabsBg'}
        height={'35px'}
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
              flexShrink={0}
              _hover={{
                textDecoration: 'none',
              }}
              borderTop={'2px solid'}
              borderColor={
                pageSlug === link.slug ? 'primary.accentColor' : 'transparent'
              }
              bgColor={
                pageSlug === link.slug ? 'primary.tabActiveBg' : 'transparent'
              }
              height={'full'}
            >
              <link.icon
                color={link.color}
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
              <Text>{link.title}</Text>
            </HStack>
          ))}
        </HStack>
      </Box>
      <Box height={'35px'} />
    </Box>
  )
}

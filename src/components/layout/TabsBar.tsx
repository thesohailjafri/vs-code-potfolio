import { openFileLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Text, Link } from '@chakra-ui/react'
interface Props extends BoxProps {}

export default function TabsBar({ ...props }: Props) {
  return (
    <Box position={'relative'}>
      <Box position={'absolute'} width={'full'} overflowX={'auto'} {...props}>
        <HStack height={10} flexShrink={0} spacing={0}>
          {openFileLinks.map((link, index) => (
            <HStack
              key={index}
              as={Link}
              href={link.href}
              px={3}
              py={2}
              flexShrink={0}
              bgColor={'primary.tabsBg'}
              _hover={{
                bgColor: 'primary.tabActiveBg',
                textDecoration: 'none',
              }}
            >
              <link.icon
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
      <Box height={10} />
    </Box>
  )
}

import { openFileLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Link, List, Text } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function Explorer({ ...props }: Props) {
  return (
    <Box
      maxW={250}
      width={'20%'}
      bgColor={'primary.explorerBg'}
      hideBelow={'md'}
      {...props}
    >
      <Text>EXPLORER</Text>
      <List>
        {openFileLinks.map((link, index) => (
          <HStack
            key={index}
            as={Link}
            href={link.href}
            px={3}
            py={2}
            _hover={{
              bgColor: 'primary.explorerHoverBg',
              textDecoration: 'none',
            }}
          >
            <link.icon width={'1'} />
            <Text>{link.title}</Text>
          </HStack>
        ))}
      </List>
    </Box>
  )
}

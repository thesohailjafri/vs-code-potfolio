import { pageLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Link, List, Text } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function Explorer({ ...props }: Props) {
  return (
    <Box
      maxW={250}
      width={'20%'}
      bgColor={'var(--explorer-bg)'}
      hideBelow={'md'}
      fontFamily={'sans'}
      {...props}
    >
      <Text fontSize={'sm'} px={3} py={2}>
        EXPLORER
      </Text>
      <List>
        {pageLinks.map((link, index) => (
          <HStack
            key={index}
            as={Link}
            href={link.href}
            px={3}
            py={1}
            _hover={{
              bgColor: 'var(--primary-explorer-bg)',
              textDecoration: 'none',
            }}
          >
            <link.icon size={16} color={link.color} />
            <Text>{link.title}</Text>
          </HStack>
        ))}
      </List>
    </Box>
  )
}

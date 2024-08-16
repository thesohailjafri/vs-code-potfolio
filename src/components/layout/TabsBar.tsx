import { openFileLinks } from '@/utils/default'
import { Box, BoxProps, HStack, Text } from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function TabsBar({ ...props }: Props) {
  return (
    <>
      <Box
        position={'fixed'}
        width={'full'}
        height={10}
        bgColor={'primary.tabsBarBg'}
        {...props}
      >
        <HStack>
          {openFileLinks.map((link, index) => (
            <HStack key={index} px={3} py={2} _hover={{ bgColor: 'gray.700' }}>
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
    </>
  )
}

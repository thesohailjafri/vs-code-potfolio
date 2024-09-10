import { Link, Text } from '@chakra-ui/react'
import { Box, BoxProps, HStack } from '@chakra-ui/react'
import { FaRegTimesCircle } from 'react-icons/fa'
import { IoGitBranchOutline } from 'react-icons/io5'
import { LuAlertTriangle } from 'react-icons/lu'
import { RiCheckDoubleLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'

interface Props extends BoxProps {}

export default function BottomBar({ ...props }: Props) {
  return (
    <>
      <Box
        position={'fixed'}
        bottom={0}
        left={0}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={'var(--bottombar-bg)'}
        borderTop={'1px solid'}
        borderColor={'var(--bottombar-border)'}
        height={'30px'}
        px={4}
        fontSize={'xs'}
        {...props}
      >
        <HStack
          height={'full'}
          width={'full'}
          spacing={4}
          justifyContent={'space-between'}
        >
          <HStack height={'full'} spacing={1}>
            <HStack
              as={Link}
              px={1}
              height={'full'}
              href={'#'}
              _hover={{ bgColor: 'var(--bottombar-hover-bg)' }}
            >
              <IoGitBranchOutline />
              <Text>Main</Text>
            </HStack>
            <HStack
              px={1}
              height={'full'}
              _hover={{ bgColor: 'var(--bottombar-hover-bg)' }}
            >
              {leftItems.map((item, index) => (
                <HStack key={index}>
                  <item.icon />
                  <Text>{item.value}</Text>
                </HStack>
              ))}
            </HStack>
          </HStack>
          <HStack height={'full'} spacing={1}>
            {rightItems.map((item, index) => (
              <HStack
                key={index}
                px={1}
                height={'full'}
                _hover={{ bgColor: 'var(--bottombar-hover-bg)' }}
              >
                <item.icon />
                <Text>{item.value}</Text>
              </HStack>
            ))}
          </HStack>
        </HStack>
      </Box>
      <Box height={`30px`} />
    </>
  )
}

const leftItems = [
  {
    icon: FaRegTimesCircle,
    value: 0,
  },
  {
    icon: LuAlertTriangle,
    value: 0,
  },
]

const rightItems = [
  {
    icon: TbBrandNextjs,
    value: 'Powered by Next.js',
  },
  {
    icon: RiCheckDoubleLine,
    value: 'Prettier',
  },
]

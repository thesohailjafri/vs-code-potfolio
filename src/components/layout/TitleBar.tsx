import { Box, BoxProps, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'

interface Props extends BoxProps {}
export default function TitleBar({ ...props }: Props) {
  return (
    <>
      <Box
        position={'fixed'}
        top={0}
        left={0}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={'primary.titleBarBg'}
        height={'35px'}
        px={4}
        zIndex={10}
        {...props}
      >
        <HStack spacing={4}>
          <Image
            src="/images/vs-code.png"
            alt="vscode"
            height={15}
            width={15}
          />
          {leftText.map((text) => (
            <Text key={text} color={'white'} fontSize={'sm'}>
              {text}
            </Text>
          ))}
        </HStack>
        <Box></Box>
        <HStack>
          {rightIcons.map((icon) => (
            <Box
              key={icon.title}
              width={3}
              aspectRatio={1 / 1}
              bgColor={icon.color}
              borderRadius={'50%'}
            />
          ))}
        </HStack>
      </Box>
      <Box height={`33px`} />
    </>
  )
}

const leftText = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help']

const rightIcons = [
  {
    title: 'minimize',
    color: 'yellow.300',
  },
  {
    title: 'minimize',
    color: 'green.300',
  },
  {
    title: 'minimize',
    color: 'red.300',
  },
]

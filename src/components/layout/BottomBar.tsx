import { Box, BoxProps } from '@chakra-ui/react'

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
        bgColor={'primary.bottomBarBg'}
        _hover={{ bgColor: 'primary.bottomBarHoverBg' }}
        height={'30px'}
        px={4}
        {...props}
      >
        Bottombar
      </Box>
      <Box height={`30px`} />
    </>
  )
}

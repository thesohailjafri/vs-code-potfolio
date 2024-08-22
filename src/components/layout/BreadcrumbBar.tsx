import {
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { FaChevronRight } from 'react-icons/fa6'
interface Props extends BoxProps {}

export default function BreadcrumbBar({ ...props }: Props) {
  return (
    <Box position={'relative'}>
      <Box
        position={'absolute'}
        width={'full'}
        overflowX={'auto'}
        height={'30px'}
        display={'flex'}
        alignItems={'center'}
        fontSize={'sm'}
        bgColor={'primary.breadCrumbBg'}
        {...props}
      >
        <Breadcrumb separator={<FaChevronRight opacity={0.5} />} px={3}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box height={'30px'} />
    </Box>
  )
}

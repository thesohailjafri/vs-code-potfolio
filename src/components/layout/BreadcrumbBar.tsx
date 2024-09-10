'use client'
import {
  Box,
  BoxProps,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { FaChevronRight } from 'react-icons/fa6'
interface Props extends BoxProps {}

export default function BreadcrumbBar({ ...props }: Props) {
  const pathname = usePathname()

  // regex to make uppercase first letter of each word and remove special characters by replacing them with empty string
  // example: what-is-4-37-as-a-decimal = What Is 4/37 As A Decimal
  const regExp = /[-_+]/g
  let href = ''
  const paths =
    pathname
      ?.split('/')
      .filter((x) => x)
      .map((x) => {
        href = href + '/' + x
        let label = x
          .replace(regExp, ' ')
          .replace(/\b\w/g, (l) => l.toUpperCase())
          .trim()
        return {
          label,
          href,
        }
      }) || []

  if (pathname === '/') return null

  return (
    <Box position={'relative'} fontFamily={'sans'}>
      <Box
        position={'absolute'}
        width={'full'}
        overflowX={'auto'}
        height={'30px'}
        display={'flex'}
        alignItems={'center'}
        fontSize={'sm'}
        bgColor={'var(--breadcrumb-bg)'}
        {...props}
      >
        <Breadcrumb separator={<FaChevronRight opacity={0.5} />} px={3}>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          {paths &&
            paths.map((x, i) => (
              <BreadcrumbItem key={i}>
                <BreadcrumbLink whiteSpace={'nowrap'} href={x.href}>
                  {x.label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
        </Breadcrumb>
      </Box>
      <Box height={'30px'} />
    </Box>
  )
}

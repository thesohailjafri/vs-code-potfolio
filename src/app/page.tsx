// app/page.tsx
'use client'
import {
  Button,
  chakra,
  Heading,
  HTMLChakraProps,
  Text,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'
import { SVGProps } from 'react'

export default function Page() {
  return (
    <Box position={'relative'} height={'full'} width={'full'}>
      <Box
        id="background"
        fontSize={{ base: '5rem' }}
        lineHeight={'1.1'}
        color={'primary.bgText'}
        position={'absolute'}
        fontWeight={'bold'}
        zIndex={1}
        height={'full'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Text>I BUILD</Text>
        <Text>WEBSITES</Text>
      </Box>

      <Box
        id="foreground"
        position={'absolute'}
        zIndex={3}
        height={'full'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Heading as="h1">Sohail Jafri</Heading>
        <Heading as="h6">Full Stack Web Developer</Heading>
        <Button as={Link} href="/projects">
          View Work
        </Button>
        <Button as={Link} href="/contact">
          Contact Me
        </Button>
      </Box>
      <HeroIllustration />
    </Box>
  )
}

const HeroIllustration = () => {
  return (
    <chakra.svg
      width={{
        base: '75vw',
        md: '420px',
        lg: '600px',
        xl: '650px',
      }}
      height={{
        base: '50vh',
        md: '550px',
        lg: '700px',
        xl: '800px',
      }}
      position={{
        base: 'absolute',
      }}
      bottom={{
        base: '0',
      }}
      right={{
        base: '0',
      }}
      viewBox="0 0 486 534"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      zIndex={2}
    >
      <circle cx={167} cy={60} r={60} fill="#D7F484" />
      <circle cx={37.5} cy={215.5} r={37.5} fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
        fill="currentColor"
      />
    </chakra.svg>
  )
}

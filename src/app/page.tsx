// app/page.tsx
'use client'
import {
  Button,
  ButtonGroup,
  chakra,
  Heading,
  HTMLChakraProps,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import { Box } from '@chakra-ui/react'
import { SVGProps, useEffect, useMemo, useState } from 'react'

export default function Page() {
  // single word course names
  const typeWriterValues = useMemo(
    () => [
      'Full Stack Web Developer',
      'Content Creator',
      'Bike Enthusiast',
      'Gym Rat',
    ],
    [],
  )
  const [typeWriterText, setTypeWriterText] = useState<string>('')

  useEffect(() => {
    let speed = 130
    let placeholderTextIndex = 0
    let textIndex = 0
    let isBackward = false
    // if(textIndex===0 || textIndex===text.length){
    const interval = setInterval(() => {
      let text = `  ${typeWriterValues[placeholderTextIndex]}  `

      if (textIndex === text.length) {
        isBackward = true
      } else if (textIndex === 0) {
        isBackward = false
      }
      if (isBackward) {
        textIndex--
        if (textIndex === 0) {
          placeholderTextIndex++
          if (placeholderTextIndex === typeWriterValues.length) {
            placeholderTextIndex = 0
          }
        }
      } else {
        textIndex++
      }

      setTypeWriterText(text.slice(0, textIndex).trim())
    }, speed)
    return () => {
      clearInterval(interval)
    }
  }, [typeWriterValues])
  return (
    <Box position={'relative'} height={'full'} width={'full'}>
      <Box
        id="background"
        lineHeight={'1'}
        color={'var(--bg-text)'}
        position={'absolute'}
        fontWeight={'bold'}
        zIndex={1}
        height={'full'}
        display={'flex'}
        justifyContent={'center'}
        flexDirection={'column'}
      >
        <Text
          fontSize={{ base: '5rem', md: '10rem', lg: '15rem', xl: '20rem' }}
          fontFamily={'sans'}
        >
          I WEAR
          <br />
          MANY HATS
        </Text>
      </Box>

      <Box
        id="foreground"
        position={'absolute'}
        zIndex={3}
        height={'full'}
        display={'flex'}
        justifyContent={{
          base: 'start',
          xl: 'center',
        }}
        gap={10}
        pb={30}
        px={30}
        flexDirection={'column'}
      >
        <Stack spacing={1}>
          <Heading
            as="h1"
            fontSize={{
              base: '3xl',
              md: '4xl',
              lg: '5xl',
              xl: '8xl',
            }}
          >
            Sohail Jafri
          </Heading>
          <Heading as="h6" fontWeight={'normal'} height={8}>
            {typeWriterText}
          </Heading>
        </Stack>
        <ButtonGroup gap={2}>
          <Button as={Link} href="/projects" variant={'accent-filled'}>
            View Work
          </Button>
          <Button as={Link} href="/contact" variant={'accent-outlined'}>
            Contact Me
          </Button>
        </ButtonGroup>
      </Box>
      <HeroIllustration />
    </Box>
  )
}

const HeroIllustration = () => {
  return (
    <Box
      position="absolute"
      bottom="0"
      right="0"
      transform={{
        base: 'scale(0.5)',
        md: 'scale(0.75)',
        lg: 'scale(1)',
        xl: 'scale(1.25)',
      }}
      transformOrigin="bottom right"
      zIndex={2}
    >
      <chakra.svg
        width={'486px'}
        height={'534px'}
        viewBox="0 0 486 534"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
    </Box>
  )
}

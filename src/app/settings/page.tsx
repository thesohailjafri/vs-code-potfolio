// app/page.tsx
'use client'
import theme from '@/styles/theme'
import { githubDarkTheme } from '@/styles/themes'
import { Image, Link } from '@chakra-ui/next-js'
import {
  Box,
  Button,
  extendTheme,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function Page() {
  const [activeColorTheme, activateColorTheme] = useState(githubDarkTheme)
  // Merge the active color theme's colors into our base theme:
  const mergedTheme = extendTheme(theme, { colors: activeColorTheme.colors })
  const themes = [
    {
      name: 'GitHub Dark',
      icon: '/images/theme/github-dark.png',
      publisher: 'GitHub',
      theme: 'github-dark',
      description: 'GitHub theme for VS Code',
    },
    {
      name: 'Dracula',
      icon: '/images/theme/dracula.png',
      publisher: 'Dracula Theme',
      theme: 'dracula',
      description:
        'Official Dracula Theme. A dark theme for many editors, shells, and more.',
    },
    {
      name: 'Ayu Dark',
      icon: '/images/theme/ayu.png',
      publisher: 'teabyii',
      theme: 'ayu-dark',
      description: 'A simple theme with bright colors.',
    },
    {
      name: 'Ayu Mirage',
      icon: '/images/theme/ayu.png',
      publisher: 'teabyii',
      theme: 'ayu-mirage',
      description: 'A simple theme with bright colors.',
    },
    {
      name: 'Nord',
      icon: '/images/theme/nord.png',
      publisher: 'arcticicestudio',
      theme: 'nord',
      description:
        'An arctic, north-bluish clean and elegant Visual Studio Code theme.',
    },
    {
      name: 'Night Owl',
      icon: '/images/theme/night-owl.png',
      publisher: 'sarah.drasner',
      theme: 'night-owl',
      description: 'A VS Code theme for the night owls out there.',
    },
  ]
  return (
    <Box>
      <Heading>Themes</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4, '2xl': 5 }} gap={8}>
        {themes.map((theme) => (
          <ThemeInfo key={theme.name} {...theme} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
type ThemeInfoProps = {
  name: string
  icon: string
  publisher: string
  theme: string
  description: string
}
const ThemeInfo = ({
  name,
  icon,
  publisher,
  theme,
  description,
}: ThemeInfoProps) => {
  // Save the theme to local storage
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }
  return (
    <Stack alignItems={'center'} textAlign={'center'}>
      <Image
        src={icon}
        alt={name}
        height={100}
        width={100}
        borderRadius={'md'}
      />
      <Box>
        <Heading as="h3" fontSize={'xl'}>
          {name}
        </Heading>
        <Text opacity={0.7}>{publisher}</Text>
      </Box>
      <Box>
        <Box>
          <Button
            variant={'accent-outlined'}
            size={'sm'}
            onClick={() => setTheme(theme)}
          >
            Apply Theme
          </Button>
        </Box>
      </Box>
    </Stack>
  )
}

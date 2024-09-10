// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Text } from '@chakra-ui/react'
/* 
{

    "name": "Sohail Jafri",

    "age": 22,

    "location": "Mumbai, India",

    "education": "B.E in Information Technology",

    "degree-college": "Datta Meghe College of Engineering",

    "diploma-college": "Vidyalankar Polytechnic",

    "hobbies":["Coding", "Biking", "Lifting", "Reading", "Anime"]

}


*/

const aboutItems = [
  {
    social: 'name',
    link: '"Sohail Jafri"',
    href: 'https://sohailjafri.com',
  },
  {
    social: 'age',
    link: new Date().getFullYear() - 2002,
    href: 'https://sohailjafri.com',
  },
  {
    social: 'location',
    link: '"Mumbai, India"',
    href: 'https://sohailjafri.com',
  },
  {
    social: 'education',
    link: '"B.E in Information Technology"',
    href: 'https://sohailjafri.com',
  },
  {
    social: 'hobbies',
    link: `["Coding", "Biking", "Lifting", "Reading", "Anime"]`,
    href: 'https://sohailjafri.com',
  },
]

export default function Page() {
  return (
    <Box>
      <Text color="var(--accent-color)">&#123;</Text>
      {aboutItems.slice(0, 8).map((item, index) => (
        <Text key={index}>
          <Text as="span" color="var(--accent-color)">
            &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          </Text>
          <Text as="span">{item.link}</Text>;
        </Text>
      ))}
      <Text color="var(--accent-color)">&#125;</Text>
    </Box>
  )
}

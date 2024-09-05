'use client'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Field, Formik } from 'formik'

const contactItems = [
  {
    social: 'website',
    link: 'thesohailjafri.com',
    href: 'https://thesohailjafri.com',
  },
  {
    social: 'email',
    link: 'thesohailjafri@gmail.com',
    href: 'mailto:thesohailjafri@gmail.com',
  },
  {
    social: 'github',
    link: 'thesohailjafri',
    href: 'https://github.com/thesohailjafri',
  },
  {
    social: 'linkedin',
    link: 'thesohailjafri',
    href: 'https://www.linkedin.com/in/thesohailjafri/',
  },
  {
    social: 'twitter',
    link: 'thesohailjafri',
    href: 'https://www.twitter.com/thesohailjafri',
  },
  {
    social: 'instagram',
    link: 'thesohailjafri',
    href: 'https://www.instagram.com/thesohailjafri',
  },
]
export default function Page() {
  return (
    <Box>
      <SimpleGrid
        columns={{
          base: 1,
          lg: 2,
        }}
      >
        <GridItem>
          <Text>
            <Text as="span" color="primary.accentColor">
              .socials
            </Text>{' '}
            &#123;
          </Text>
          {contactItems.slice(0, 8).map((item, index) => (
            <Text key={index}>
              &nbsp;&nbsp;&nbsp;{item.social}:{' '}
              <Link
                href={item.href}
                target="_blank"
                rel="noopener"
                color={'primary.accentColor'}
              >
                {item.link}
              </Link>
              ;
            </Text>
          ))}
          <Text>&#125;</Text>
        </GridItem>
        <GridItem>{/* TODO: Add telly form */}</GridItem>
      </SimpleGrid>
    </Box>
  )
}

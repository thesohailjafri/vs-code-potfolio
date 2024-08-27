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
    link: 'nitinranganath.me',
    href: 'https://nitinranganath.me',
  },
  {
    social: 'email',
    link: 'nitinranganath@gmail.com',
    href: 'mailto:nitinranganath@gmail.com',
  },
  {
    social: 'github',
    link: 'itsnitinr',
    href: 'https://github.com/itsnitinr',
  },
  {
    social: 'linkedin',
    link: 'nitinranganath',
    href: 'https://www.linkedin.com/in/nitinranganath/',
  },
  {
    social: 'twitter',
    link: 'iamnitinr',
    href: 'https://www.twitter.com/iamnitinr',
  },
  {
    social: 'instagram',
    link: 'iamnitinr',
    href: 'https://www.instagram.com/iamnitinr',
  },
  {
    social: 'polywork',
    link: 'nitinranganath',
    href: 'https://www.polywork.com/nitinranganath',
  },
  {
    social: 'telegram',
    link: 'iamnitinr',
    href: 'https://t.me/iamnitinr',
  },
  {
    social: 'codepen',
    link: 'nitinranganath',
    href: 'https://codepen.io/itsnitinr',
  },
  {
    social: 'codesandbox',
    link: 'itsnitinr',
    href: 'https://codesandbox.io/u/itsnitinr',
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

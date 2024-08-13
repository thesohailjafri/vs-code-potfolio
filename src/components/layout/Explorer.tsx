import { openFileLinks } from '@/utils/default'
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  HStack,
  Text,
} from '@chakra-ui/react'

interface Props extends BoxProps {}

export default function Explorer({ ...props }: Props) {
  return (
    <Box maxW={300} width={'20%'} bgColor={'red.400'} {...props}>
      <Text>EXPLORER</Text>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Section 1 title
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {openFileLinks.map((link, index) => (
              <HStack
                key={index}
                px={3}
                py={2}
                _hover={{ bgColor: 'gray.700' }}
              >
                <link.icon
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
                <Text>{link.title}</Text>
              </HStack>
            ))}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}

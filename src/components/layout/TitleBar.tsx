'use client'
import { pageLinks } from '@/utils/default'
import { Link } from '@chakra-ui/next-js'
import {
  Box,
  BoxProps,
  Button,
  ButtonGroup,
  Collapse,
  Fade,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FaHamburger, FaSearch } from 'react-icons/fa'
import { FaArrowLeft, FaArrowRight, FaHammer } from 'react-icons/fa6'
import { GiHamburger } from 'react-icons/gi'
import { VscMenu } from 'react-icons/vsc'
interface Props extends BoxProps {}
export default function TitleBar({ ...props }: Props) {
  const {
    isOpen: isOpenSearch,
    onOpen: onOpenSearch,
    onClose: onCloseSearch,
  } = useDisclosure()
  return (
    <>
      <Box
        position={'fixed'}
        top={0}
        left={0}
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        bgColor={'primary.titleBarBg'}
        height={'40px'}
        px={4}
        zIndex={10}
        {...props}
      >
        {/* Toolbar */}
        <HStack spacing={4}>
          <Image
            src="/images/vs-code.png"
            alt="vscode"
            height={15}
            width={15}
          />
          {/* Menu Options */}
          <HStack hideBelow={'md'}>
            {leftText.map((text) => (
              <Text key={text} color={'white'} fontSize={'sm'}>
                {text}
              </Text>
            ))}
          </HStack>
          <Box hideFrom={'md'}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<VscMenu />}
                variant={'unstyled'}
              ></MenuButton>
              <MenuList>
                {leftText.map((text) => (
                  <MenuItem key={text}>{text}</MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </HStack>
        {/* Search and nav */}
        <HStack>
          <ButtonGroup spacing={0} hideBelow={'md'}>
            <IconButton
              aria-label="History Prev"
              icon={<FaArrowLeft />}
              size={'sm'}
              variant={'unstyled'}
            />
            <IconButton
              aria-label="History Next"
              icon={<FaArrowRight />}
              size={'sm'}
              variant={'unstyled'}
            />
          </ButtonGroup>
          <Menu>
            <MenuButton
              as={Button}
              variant={'unstyled'}
              fontWeight={'normal'}
              fontSize={'sm'}
              gap={3}
              border={'1px solid'}
              bgColor={'primary.titleBarSearchBg'}
              borderColor={'primary.titleBarSearchBorder'}
              width={'50vw'}
              maxWidth={'lg'}
              height={'28px'}
            >
              <HStack width={'100%'} justifyContent={'center'}>
                <Icon as={FaSearch} boxSize={3} />
                <Text>{window.location.hostname}</Text>
              </HStack>
            </MenuButton>
            <MenuList width={'50vw'} maxWidth={'lg'}>
              {pageLinks.map((link, index) => (
                <MenuItem
                  key={index}
                  as={Link}
                  href={link.href}
                  _hover={{
                    textDecoration: 'none',
                  }}
                >
                  <HStack>
                    <link.icon width={'1'} />
                    <Text>{link.title}</Text>
                  </HStack>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        {/* Controls */}
        <HStack>
          {rightIcons.map((icon) => (
            <Box
              key={icon.title}
              width={3}
              aspectRatio={1 / 1}
              bgColor={icon.color}
              borderRadius={'50%'}
            />
          ))}
        </HStack>
      </Box>
      <Box height={`40px`} />
    </>
  )
}

const leftText = ['File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Help']

const rightIcons = [
  {
    title: 'minimize',
    color: 'yellow.300',
  },
  {
    title: 'minimize',
    color: 'green.300',
  },
  {
    title: 'minimize',
    color: 'red.300',
  },
]

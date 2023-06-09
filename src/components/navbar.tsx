import {
  useDisclosure,
  Box,
  BoxProps,
  Flex,
  FlexProps,
  CloseButton,
  IconButton,
  Image,
  Icon,
  Link,
  Drawer,
  DrawerContent,
  Text,
} from '@chakra-ui/react';

import {
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.png';

const LinkItems = [
  { name: 'Home',},
  { name: 'Trending',}
];

export const Navbar = ({ children }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mb='-8' bg={'transparent'}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ms={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }: BoxProps) => {
  return (
    <Box
      bg={'white'}
      borderRight="1px"
      borderRightColor={'gray.200'}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }: any) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }: FlexProps) => {
  return (
    <Flex
      ms={[0, 0, 60]}
      px={[4, 4, 24]}
      height='20'
      borderBottomWidth={1}
      borderBottomColor='gray.200'
      justifyContent='flex-start'
      alignItems='center'
      {...rest}>
      <IconButton
        onClick={onOpen}
        variant='outline'
        aria-label='Open Menu'
        icon={<FontAwesomeIcon icon={faBars} />}
      />
      <Flex
        ms='4'
        gap='2'
        color='gray.900'>
        <Image
          src={logo}
          boxSize='6'
          alt='Algorithm Logo'
        />
        <Text
          fontFamily='main'
          fontWeight='bold'>
          Find Specific
        </Text>
      </Flex>
    </Flex>
  );
}
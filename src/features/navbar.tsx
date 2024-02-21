import {
  type BoxProps,
  type FlexProps,
  useDisclosure,
  Box,
  Flex,
  CloseButton,
  IconButton,
  Image,
  Link,
  Drawer,
  DrawerContent,
  Text
} from '@chakra-ui/react';
import {
  type IconProp,
  type SizeProp
} from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faInfinity,
  faComment,
  faBlender
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { UIContext } from '@/app.tsx';
import logo from '@/assets/images/logo.webp';

const LINK_ITEMS = [
  {
    name: 'Inputs with Numeric Arguments',
    id: '#input-number',
    icon: faInfinity,
    size: '1x'
  },
  {
    name: 'Inputs with String Arguments',
    id: '#input-string',
    icon: faComment,
    size: 'lg'
  },
  {
    name: 'Inputs with Mixed Arguments',
    id: '#input-mixed',
    icon: faBlender,
    size: 'lg'
  }
];

const MobileNav = ({ onOpen, ...rest }: FlexProps): JSX.Element => {
  return (
    <Flex
      userSelect='none'
      ms={[0, 0, 0, 60]}
      px={[4, 4, 4, 24]}
      w='full'
      h='20'
      bg='white'
      borderBottomWidth={1}
      borderBottomColor='gray.200'
      justify='flex-start'
      align='center'
      {...rest}>
      <IconButton
        onClick={onOpen as () => void}
        variant='outline'
        aria-label='Open Menu'
        _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
        icon={<FontAwesomeIcon icon={faBars} />}
      />
      <Flex ms='4' gap='2' align='center'>
        <Image
          src={logo}
          align='center'
          fontSize='2xs'
          fontFamily='main'
          boxSize='6'
          alt='Logo'
        />
        <Text
          fontFamily='main'
          fontWeight='bold'
          cursor='default'
          color='gray.900'>
          Find Specific
        </Text>
      </Flex>
    </Flex>
  );
};

const Sidebar = ({ onClose, ...rest }: BoxProps): JSX.Element => {
  return (
    <Box
      bg='white'
      pos='fixed'
      userSelect='none'
      borderRightWidth={1}
      borderRightColor='gray.200'
      w={{ base: 'full', lg: '21em' }}
      h='full'
      {...rest}>
      <Flex mx='8' h='20' align='center' justify='space-between'>
        <Flex gap='4' align='center'>
          <Image
            src={logo}
            align='center'
            fontSize='sm'
            fontFamily='main'
            boxSize='8'
            alt='Logo'
          />
          <Text
            fontFamily='main'
            fontWeight='bold'
            cursor='default'
            color='gray.900'>
            Find Specific
          </Text>
        </Flex>
        <CloseButton
          onClick={onClose as () => void}
          display={{ base: 'flex', lg: 'none' }}
          _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
        />
      </Flex>
      {LINK_ITEMS.map((link, index) => (
        <NavItem
          onClose={onClose as () => void}
          index={index}
          key={link.name}
          icon={link.icon}
          size={link.size}
          id={link.id}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({
  onClose,
  index,
  id,
  icon,
  size,
  children,
  ...rest
}: FlexProps): JSX.Element => {
  const { inViewCategory, setInViewCategory } = useContext(UIContext);

  return (
    <Link
      onClick={(): void => {
        setInViewCategory(index as number);
        (onClose as () => void)();
      }}
      href={id as string}
      style={{ textDecoration: 'none' }}
      _focusVisible={{ boxShadow: 'none' }}>
      <Flex
        p='4'
        mx='4'
        mb='1'
        gap='2'
        align='center'
        borderRadius='6'
        role='group'
        cursor='pointer'
        fontFamily='main'
        fontWeight='bold'
        color='gray.900'
        bgColor={inViewCategory === index ? 'yellow.400' : 'transparent'}
        _hover={{
          bg: 'yellow.400',
          color: 'gray.900'
        }}
        {...rest}>
        <FontAwesomeIcon icon={icon as IconProp} size={size as SizeProp} />
        {children}
      </Flex>
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Close mobile drawer on resize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) onClose();
    });
  }, [onClose]);

  return (
    <Box as='nav'>
      <MobileNav onOpen={onOpen} display={{ base: 'flex', lg: 'none' }} />
      <Drawer
        isOpen={isOpen}
        returnFocusOnClose={false}
        onClose={onClose}
        onOverlayClick={onClose}
        placement='left'
        size='full'>
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Sidebar onClose={onClose} hideBelow='lg' />
    </Box>
  );
};

export { LINK_ITEMS, Navbar };

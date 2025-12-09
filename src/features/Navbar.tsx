import {
  type BoxProps,
  useDisclosure,
  Box,
  Drawer,
  DrawerContent,
  HStack,
  Button,
  Image,
  CloseButton,
  Flex,
  Link as ChakraLink
} from '@chakra-ui/react';
import { type IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type VNode } from 'preact';
import { useEffect } from 'preact/hooks';
import { Link as ReactRouterLink, useLocation } from 'react-router';

import logo from '#/images/logo.webp';
import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';

const MobileNav = ({ onOpen }: { onOpen: () => void }): VNode => (
  <HStack
    display={{ base: 'flex', lg: 'none' }}
    borderBottomColor='gray.200'
    borderBottomWidth={1}
    px={{ base: 4, md: 8 }}
    userSelect='none'
    fontFamily='main'
    fontWeight='bold'
    color='gray.900'
    gap='2.5'
    h='20'>
    <Button
      _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
      aria-label='Open Menu'
      variant='outline'
      onClick={onOpen}
      w='10'
      me='0.5'>
      <FontAwesomeIcon icon={faBars} />
    </Button>

    <Image
      src={logo}
      boxSize='6'
      alt='Programming icon by Eucalyp'
      onDragStart={(e: DragEvent) => {
        e.preventDefault();
      }}
    />
    <>JS Algorithms</>
  </HStack>
);

const Sidebar = ({
  onClose,
  ...rest
}: { onClose: () => void } & BoxProps): VNode => (
  <Box
    h='full'
    pos='fixed'
    userSelect='none'
    borderRightWidth={1}
    borderRightColor='gray.200'
    w={{ base: 'full', lg: '21em' }}
    {...rest}>
    <HStack ms='6' me='4' h='20' justify='space-between'>
      <Box fontFamily='main' color='gray.900' fontWeight='bold'>
        <Image
          me='2.5'
          src={logo}
          boxSize='8'
          display='inline-block'
          verticalAlign='middle'
          alt='Programming icon by Eucalyp'
          onDragStart={(e: DragEvent) => {
            e.preventDefault();
          }}
        />
        JS Algorithms
      </Box>

      <CloseButton
        onClick={onClose}
        display={{ base: 'flex', lg: 'none' }}
        _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
      />
    </HStack>

    {CATEGORIES.map(category => (
      <NavItem
        onClose={onClose}
        icon={category.icon}
        title={category.title}
        id={'/' + kebabize(category.title)}
        key={category.title}
      />
    ))}
  </Box>
);

interface NavItemProps {
  onClose: () => void;
  icon: IconDefinition;
  title: string;
  id: string;
}

const NavItem = ({ onClose, icon, title, id }: NavItemProps): VNode => {
  const { pathname } = useLocation();

  return (
    <ChakraLink
      as={ReactRouterLink}
      to={id}
      _hover={{ textDecoration: 'none' }}
      _focusVisible={{ boxShadow: 'none' }}
      onDragStart={(e: DragEvent) => {
        e.preventDefault();
      }}
      onClick={onClose}>
      <Flex
        p='4'
        mx='4'
        mb='1'
        gap='2.5'
        role='group'
        align='center'
        borderRadius='6'
        cursor='pointer'
        color='gray.900'
        fontFamily='main'
        fontWeight='bold'
        transition='background 200ms'
        bg={pathname === id ? 'yellow.400' : ''}
        _hover={{
          bg: 'yellow.400',
          color: 'gray.900'
        }}>
        <FontAwesomeIcon icon={icon} fixedWidth />
        {title}
      </Flex>
    </ChakraLink>
  );
};

export const Navbar = (): VNode => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Close mobile drawer on resize
  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 992) onClose();
    });
  }, [onClose]);

  return (
    <Box as='nav'>
      <MobileNav onOpen={onOpen} />

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

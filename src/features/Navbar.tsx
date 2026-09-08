import {
  Box,
  type BoxProps,
  Button,
  Link as ChakraLink,
  CloseButton,
  Drawer,
  DrawerContent,
  Flex,
  HStack,
  Highlight,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { type IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { VNode } from 'preact';
import { useEffect } from 'preact/hooks';
import { Link as ReactRouterLink, useLocation } from 'react-router';

import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';

const MobileNav = ({ onOpen }: { onOpen: () => void }): VNode => (
  <HStack
    borderBottomColor='gray.200'
    borderBottomWidth={1}
    color='gray.900'
    display={{ base: 'flex', lg: 'none' }}
    fontFamily='main'
    fontWeight='bold'
    gap='2.5'
    h='20'
    px={{ base: 4, md: 8 }}
    userSelect='none'>
    <Button
      _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
      aria-label='Open Menu'
      me='0.5'
      onClick={onOpen}
      variant='outline'
      w='10'>
      <FontAwesomeIcon icon={faBars} />
    </Button>

    <Text mt='2'>
      <Highlight
        query='JS'
        styles={{
          bg: 'yellow.300',
          borderRadius: '6',
          me: '1',
          pb: '0.5',
          pe: '0.5',
          ps: '3',
          pt: '2.5',
        }}>
        JS Algorithms
      </Highlight>
    </Text>
  </HStack>
);

const Sidebar = ({ onClose, ...rest }: { onClose: () => void } & BoxProps): VNode => (
  <Box
    borderRightColor='gray.200'
    borderRightWidth={1}
    h='full'
    pos='fixed'
    userSelect='none'
    w={{ base: 'full', lg: '21em' }}
    {...rest}>
    <HStack h='20' justify='space-between' me='4' ms='6'>
      <Text color='gray.900' fontFamily='main' fontWeight='bold' mt='2'>
        <Highlight
          query='JS'
          styles={{
            bg: 'yellow.300',
            borderRadius: '6',
            me: '1',
            pb: '0.5',
            pe: '0.5',
            ps: '3',
            pt: '2.5',
          }}>
          JS Algorithms
        </Highlight>
      </Text>

      <CloseButton
        _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
        display={{ base: 'flex', lg: 'none' }}
        onClick={onClose}
      />
    </HStack>

    {CATEGORIES.map((category) => (
      <NavItem
        icon={category.icon}
        id={'/' + kebabize(category.title)}
        key={category.title}
        onClose={onClose}
        title={category.title}
      />
    ))}
  </Box>
);

interface NavItemProps {
  icon: IconDefinition;
  id: string;
  onClose: () => void;
  title: string;
}

const NavItem = ({ onClose, icon, title, id }: NavItemProps): VNode => {
  const { pathname } = useLocation();

  return (
    <ChakraLink
      _focusVisible={{ boxShadow: 'none' }}
      _hover={{ textDecoration: 'none' }}
      as={ReactRouterLink}
      onClick={onClose}
      onDragStart={(e: DragEvent): void => {
        e.preventDefault();
      }}
      to={id}>
      <Flex
        _hover={{
          bg: 'yellow.400',
          color: 'gray.900',
        }}
        align='center'
        bg={pathname === id ? 'yellow.400' : ''}
        borderRadius='6'
        color='gray.900'
        cursor='pointer'
        fontFamily='main'
        fontWeight='bold'
        gap='2.5'
        mb='1'
        mx='4'
        p='4'
        role='group'
        transition='background 200ms'>
        <FontAwesomeIcon icon={icon} />
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
        onClose={onClose}
        onOverlayClick={onClose}
        placement='left'
        returnFocusOnClose={false}
        size='full'>
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Sidebar hideBelow='lg' onClose={onClose} />
    </Box>
  );
};

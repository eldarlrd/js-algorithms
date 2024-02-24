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
  Link
} from '@chakra-ui/react';
import { type IconDefinition, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type StateUpdater, useEffect, useContext } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CATEGORIES } from '@/algorithms/categories.ts';
import { kebabize, InViewCategory } from '@/app.tsx';
import logo from '@/assets/images/logo.webp';

const MobileNav = ({ onOpen }: { onOpen: () => void }): JSX.Element => (
  <HStack
    display={{ base: 'flex', lg: 'none' }}
    borderBottomColor='gray.200'
    borderBottomWidth={1}
    userSelect='none'
    fontFamily='main'
    fontWeight='bold'
    color='gray.900'
    gap='2.5'
    px='4'
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
    <>Categories</>
  </HStack>
);

const Sidebar = ({
  onClose,
  ...rest
}: { onClose: () => void } & BoxProps): JSX.Element => {
  const { inViewCategory, setInViewCategory } = useContext(InViewCategory);

  return (
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
          Categories
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
          inViewCategory={inViewCategory}
          setInViewCategory={setInViewCategory}
          icon={category.icon}
          title={category.title}
          id={kebabize(category.title)}
          key={category.title}
        />
      ))}
    </Box>
  );
};

interface NavItemProps {
  onClose: () => void;
  inViewCategory: string;
  setInViewCategory: StateUpdater<string>;
  icon: IconDefinition;
  title: string;
  id: string;
}

const NavItem = ({
  onClose,
  inViewCategory,
  setInViewCategory,
  icon,
  title,
  id
}: NavItemProps): JSX.Element => (
  <Link
    href={id}
    _hover={{ textDecoration: 'none' }}
    _focusVisible={{ boxShadow: 'none' }}
    onDragStart={(e: DragEvent) => {
      e.preventDefault();
    }}
    onClick={(): void => {
      setInViewCategory(id);
      onClose();
    }}>
    <Flex
      p='4'
      mx='4'
      mb='1'
      gap='2'
      role='group'
      align='center'
      borderRadius='6'
      cursor='pointer'
      fontFamily='main'
      fontWeight='bold'
      color='gray.900'
      bg={inViewCategory === id ? 'yellow.400' : ''}
      _hover={{
        bg: 'yellow.400',
        color: 'gray.900'
      }}>
      <FontAwesomeIcon icon={icon} fixedWidth />
      {title}
    </Flex>
  </Link>
);

export const Navbar = (): JSX.Element => {
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

import { Stack, Image, Text, Tooltip, Link } from '@chakra-ui/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type JSX } from 'preact/jsx-runtime';

import logo from '@/assets/images/logo.webp';

export const Footer = (): JSX.Element => (
  <Stack
    as='footer'
    userSelect='none'
    direction={['column', 'row']}
    align='center'
    bg='gray.900'
    maxW='full'
    px='4'
    py='6'
    mt='12'
    spacing='0'>
    <Image
      src={logo}
      mx='4'
      my='2'
      p='1'
      bg='white'
      boxSize='12'
      borderRadius='12'
      alt='Programming icon by Eucalyp'
    />
    <Text fontFamily='main' color='gray.100'>
      © 2022 - 2024{' '}
      <Tooltip fontFamily='main' borderRadius='6' label='Go to the Source'>
        <Link
          _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
          href='https://github.com/eldarlrd/js-algorithms'
          color='yellow.300'
          borderRadius='6'
          isExternal>
          eldarlrd <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Tooltip>
    </Text>
  </Stack>
);

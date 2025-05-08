import { Image, Link, Stack, Tooltip } from '@chakra-ui/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'preact/compat';

import logo from '@/assets/images/logo.webp';

export const Footer = (): ReactElement => (
  <Stack
    as='footer'
    userSelect='none'
    direction={['column', 'row']}
    fontFamily='main'
    color='gray.100'
    align='center'
    bg='gray.900'
    maxW='full'
    gap='1'
    py='6'
    mt='12'
    px={{ md: 4 }}
    spacing='0'>
    <Image
      src={logo}
      ms='4'
      me='2'
      my='2'
      p='1'
      bg='white'
      boxSize='12'
      borderRadius='12'
      alt='Programming icon by Eucalyp'
      onDragStart={(e: DragEvent) => {
        e.preventDefault();
      }}
    />
    <>
      © 2022 - 2025
      <Tooltip fontFamily='main' borderRadius='6' label='Source'>
        <Link
          _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
          href='https://github.com/eldarlrd/js-algorithms'
          color='yellow.300'
          borderRadius='6'
          isExternal
          onDragStart={(e: DragEvent) => {
            e.preventDefault();
          }}>
          eldarlrd <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Tooltip>
    </>
  </Stack>
);

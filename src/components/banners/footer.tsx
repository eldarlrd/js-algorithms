import { type JSX } from 'preact/jsx-runtime';
import {
  Box,
  Container,
  Stack,
  Flex,
  Text,
  Tooltip,
  Link,
  Image
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import logo from '@/assets/logo.png';

export const Footer = (): JSX.Element => {
  return (
    <Box as='footer'>
      <Container
        as={Stack}
        userSelect='none'
        direction={['column', 'row']}
        justify={['center', 'flex-start']}
        align={['center', 'center']}
        bg='gray.900'
        maxW='full'
        py='6'
        px='4'
        mt='12'
        spacing='0'>
        <Image
          src={logo}
          mx='4'
          my='2'
          p='1'
          bg='white'
          align='center'
          fontFamily='main'
          fontSize='2xs'
          boxSize='12'
          borderRadius='12'
          alt='Logo by Eucalyp'
        />
        <Flex
          fontFamily='main'
          direction={['column', 'row']}
          align='center'
          gap='1'>
          <Text color='gray.100'>© 2022 - 2023</Text>
          <Tooltip hasArrow borderRadius='6' label='Go to GitHub'>
            <Link
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              href='https://github.com/eldarlrd'
              color='yellow.300'
              isExternal>
              eldarlrd <FontAwesomeIcon icon={faGithub} />
            </Link>
          </Tooltip>
        </Flex>
      </Container>
    </Box>
  );
};

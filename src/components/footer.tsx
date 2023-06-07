import {
  Container,
  Stack,
  Flex,
  Text,
  Link,
  Image
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import logo from '../../public/favicon.png';

export const Footer = () => {
  return (
    <Container
      as={Stack}
      direction={['column', 'row' ]}
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
        borderWidth={1}
        borderRadius='6'
        borderStyle='solid'
        borderColor='gray.100'
        boxSize='12'
        alt='Algorithm Logo'
      />
      <Flex
        fontFamily='main'
        direction={['column', 'row']}
        align='center'
        gap='1'>
        <Text
          color='gray.100'>
          Developed by
        </Text>
        <Link
          href='https://github.com/eldarlrd'
          color='yellow.300'
          isExternal>
          eldarlrd <FontAwesomeIcon icon={faGithub} />
        </Link>
      </Flex>
    </Container>
  );
}
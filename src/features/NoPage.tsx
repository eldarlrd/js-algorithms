import { Stack, Heading, Link as ChakraLink, Text } from '@chakra-ui/react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ReactElement } from 'preact/compat';
import { Link as ReactRouterLink } from 'react-router';

export const NoPage = (): ReactElement => (
  <Stack
    as='section'
    gap='2'
    userSelect='none'
    textAlign='center'
    align='center'>
    <Heading as='h1' color='red.500' fontSize='5xl'>
      404
    </Heading>
    <Heading as='h2'>PAGE NOT FOUND</Heading>

    <ChakraLink
      as={ReactRouterLink}
      to='/'
      w='fit-content'
      _hover={{ textDecoration: 'none', color: 'gray.700' }}
      _focusVisible={{ boxShadow: 'none' }}
      onDragStart={(e: DragEvent) => {
        e.preventDefault();
      }}>
      <Text fontSize='2xl' mt='4' me='4'>
        <FontAwesomeIcon icon={faChevronLeft} size='xs' fixedWidth />
        Back
      </Text>
    </ChakraLink>
  </Stack>
);

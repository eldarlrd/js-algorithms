import { Box, Heading, Highlight } from '@chakra-ui/react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type JSX } from 'preact/jsx-runtime';

export const Header = (): JSX.Element => {
  return (
    <Box as='header' bg='yellow.100' px={[4, 4, 8]} py='8' mb='8'>
      <Heading
        userSelect='none'
        textAlign={['center', 'left']}
        fontFamily='main'
        as='h1'>
        <FontAwesomeIcon style={{ 'margin-right': 8 }} icon={faCode} />
        <Highlight
          query='JavaScript'
          styles={{
            px: 2,
            py: 1,
            rounded: 6,
            bg: 'yellow.300',
            color: 'gray.900'
          }}>
          Interactive JavaScript Algorithms
        </Highlight>
      </Heading>
    </Box>
  );
};

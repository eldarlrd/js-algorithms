import {
  Box,
  Heading,
  Highlight
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <Box
      bg='yellow.100'
      px={[4, 4, 8]}
      py='8' mb='8'>
      <Heading
        textAlign={['center', 'left']}
        fontFamily='main'
        as='h1'>
        <FontAwesomeIcon icon={faCode} />
        <Highlight
          query='JavaScript'
          styles={{
            px: 2,
            py: 1,
            rounded: 6,
            bg: 'yellow.300',
            color: 'gray.900'
          }}> Interactive JavaScript Algorithms
        </Highlight>
      </Heading>
    </Box>
  );
}
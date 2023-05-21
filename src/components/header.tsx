import {
  Box,
  Heading,
  Highlight
} from '@chakra-ui/react';

export const Header = () => {
  return (
    <Box bg='yellow.100' py='8' px='8' mb='8'>
      <Heading
        textAlign={['center', 'center', 'left']}
        fontFamily='main'
        as='h1'>
        <Highlight
          query='JavaScript'
          styles={{
            px: 2,
            py: 1,
            rounded: 6,
            bg: 'yellow.300'
          }}> Interactive JavaScript Algorithms
        </Highlight>
      </Heading>
    </Box>
  );
}
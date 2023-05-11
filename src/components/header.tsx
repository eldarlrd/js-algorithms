import {
  Box,
  Heading,
  Highlight
} from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bg='yellow.100' py='8' px='8'>
      <Heading as='h1' textAlign={['center', 'left']}>
        <Highlight
          query='JavaScript'
          styles={{
            px: 2,
            py: 1,
            rounded: 4,
            bg: 'yellow.300'
          }}> Interactive JavaScript Algorithms
        </Highlight>
      </Heading>
    </Box>
  );
}
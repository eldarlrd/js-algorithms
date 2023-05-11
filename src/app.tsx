import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/header';

export const App = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}
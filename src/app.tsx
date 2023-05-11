import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/header';
import './app.scss';

export const App = () => {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}
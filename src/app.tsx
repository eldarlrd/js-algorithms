import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu-mono/400.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/header';
import theme from './theme';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
}
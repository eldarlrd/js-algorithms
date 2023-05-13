import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu-mono/400.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import { Navbar } from './components/navbar';
import { Header } from './components/header';
import { InputNumber } from './components/inputNumber';
import { InputString } from './components/inputString';
import { InputMixed } from './components/inputMixed';
import { Footer } from './components/footer';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Header />
      <InputNumber />
      <InputString />
      <InputMixed />
      <Footer />
    </ChakraProvider>
  );
}
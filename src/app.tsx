import { type JSX } from 'preact/jsx-runtime';
import { ChakraProvider, Box } from '@chakra-ui/react';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu-mono/400.css';
import theme from '../chakra.config.mts';

import { Navbar } from '@/components/navbar.tsx';
import { ScrollToTop } from '@/components/scrollToTop.tsx';
import { Header } from '@/components/banners/header.tsx';
import { InputNumber } from '@/components/inputs/inputNumber.tsx';
import { InputString } from '@/components/inputs/inputString.tsx';
import { InputMixed } from '@/components/inputs/inputMixed.tsx';
import { Footer } from '@/components/banners/footer';

export const App = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <ScrollToTop />
      <Box as='main' ms={[0, 0, 0, '21em']}>
        <Header />
        <InputNumber />
        <InputString />
        <InputMixed />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');
// Source Link
console.log('Source https://github.com/eldarlrd/js-algorithms');
import { ChakraProvider, Box } from '@chakra-ui/react';
import { type JSX } from 'preact/jsx-runtime';

import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu-mono/400.css';
import theme from '../chakra.config.mts';

import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { InputMixed } from '@/components/categories/inputMixed.tsx';
import { InputNumber } from '@/components/categories/inputNumber.tsx';
import { InputString } from '@/components/categories/inputString.tsx';
import { Navbar } from '@/components/navbar.tsx';
import { ScrollToTop } from '@/components/scrollToTop.tsx';

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

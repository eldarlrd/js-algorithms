import { Box, useMediaQuery, ChakraProvider } from '@chakra-ui/react';
import { createContext } from 'preact';
import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu-mono/400.css';
import theme from '../chakra.config.mts';

import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { ScrollToTop } from '@/components/buttons/scrollToTop.tsx';
import { InputMixed } from '@/features/categories/inputMixed.tsx';
import { InputNumber } from '@/features/categories/inputNumber.tsx';
import { InputString } from '@/features/categories/inputString.tsx';
import { Navbar } from '@/features/navbar.tsx';

const UiContext = createContext({
  inViewCategory: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInViewCategory: (() => {}) as StateUpdater<number>,
  isMousePointer: false
});

const AppContent = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Box as='main' ms={{ lg: '21em' }}>
        <Header />
        <InputNumber />
        <InputString />
        <InputMixed />
        <Footer />
      </Box>
    </>
  );
};

const App = (): JSX.Element => {
  const [inViewCategory, setInViewCategory] = useState(0);
  const [isMousePointer] = useMediaQuery('(pointer: fine)');

  const contextValue = {
    inViewCategory,
    setInViewCategory,
    isMousePointer
  };

  return (
    <UiContext.Provider value={contextValue}>
      <ChakraProvider theme={theme}>
        <AppContent />
      </ChakraProvider>
    </UiContext.Provider>
  );
};

export { UiContext, App };

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

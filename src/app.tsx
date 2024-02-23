import { Box, ChakraProvider } from '@chakra-ui/react';
import { createContext } from 'preact';
import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu-mono';
import theme from '../chakra.config.mts';

import background from '@/assets/images/background.webp';
import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { ScrollToTop } from '@/components/buttons/scrollToTop.tsx';
import { InputMixed } from '@/features/categories/inputMixed.tsx';
import { InputNumber } from '@/features/categories/inputNumber.tsx';
import { InputString } from '@/features/categories/inputString.tsx';
import { Navbar } from '@/features/navbar.tsx';

const InViewCategory = createContext({
  inViewCategory: 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInViewCategory: (() => {}) as StateUpdater<number>
});

const AppContent = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Box
        as='aside'
        bgRepeat='repeat'
        bgImage={background}
        ms={{ lg: '21em' }}>
        <Header />
        <InputNumber />
        <InputString />
        <InputMixed />
        <ScrollToTop />
        <Footer />
      </Box>
    </>
  );
};

const App = (): JSX.Element => {
  const [inViewCategory, setInViewCategory] = useState(0);

  const contextValue = {
    inViewCategory,
    setInViewCategory
  };

  return (
    <InViewCategory.Provider value={contextValue}>
      <ChakraProvider theme={theme}>
        <AppContent />
      </ChakraProvider>
    </InViewCategory.Provider>
  );
};

export { InViewCategory, App };

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

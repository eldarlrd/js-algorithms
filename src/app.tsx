import { ChakraProvider, Box } from '@chakra-ui/react';
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

interface ViewCategoryOrder {
  inViewCategory?: number;
  setInViewCategory?: StateUpdater<number>;
}

const App = (): JSX.Element => {
  const [inViewCategory, setInViewCategory] = useState(0);
  // const [isMouse] = useMediaQuery('(pointer: fine)');

  return (
    <ChakraProvider theme={theme}>
      <Navbar
        inViewCategory={inViewCategory}
        setInViewCategory={setInViewCategory}
      />
      <ScrollToTop setInViewCategory={setInViewCategory} />
      <Box as='main' ms={[0, 0, 0, '21em']}>
        <Header />
        <InputNumber setInViewCategory={setInViewCategory} />
        <InputString setInViewCategory={setInViewCategory} />
        <InputMixed setInViewCategory={setInViewCategory} />
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export { type ViewCategoryOrder, App };

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

import { Box, ChakraProvider } from '@chakra-ui/react';
import { createContext } from 'preact';
import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import '@fontsource/ubuntu';
import '@fontsource/ubuntu-mono';
import theme from '../chakra.config.mts';

import { categories } from '@/algorithms/categories.ts';
import background from '@/assets/images/background.webp';
import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { ScrollToTop } from '@/components/buttons/scrollToTop.tsx';
import { CategoryList } from '@/features/categoryList.tsx';
import { Navbar } from '@/features/navbar.tsx';

const kebabize = (title: string): string =>
  `#${title.toLowerCase().replaceAll(' ', '-')}`;

const initKebabCaseName = kebabize(categories[0].title);

const InViewCategory = createContext({
  inViewCategory: initKebabCaseName,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInViewCategory: (() => {}) as StateUpdater<string>
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
        <CategoryList categories={categories} />
        <ScrollToTop />
        <Footer />
      </Box>
    </>
  );
};

const App = (): JSX.Element => {
  const [inViewCategory, setInViewCategory] = useState(initKebabCaseName);

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

export { kebabize, InViewCategory, App };

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

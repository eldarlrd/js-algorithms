import { ChakraProvider, Flex } from '@chakra-ui/react';
import { createContext } from 'preact';
import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import '@fontsource/ubuntu/latin-400.css';
import '@fontsource/ubuntu-mono/latin-400.css';
import theme from '../chakra.config.mts';

import { CATEGORIES } from '@/algorithms/categories.ts';
import background from '@/assets/images/background.webp';
import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { ScrollToTop } from '@/components/buttons/scrollToTop.tsx';
import { CategoryList } from '@/features/categoryList.tsx';
import { Navbar } from '@/features/navbar.tsx';

const kebabize = (title: string): string =>
  `#${title.toLowerCase().replaceAll(' ', '-')}`;

const initKebabCaseName = kebabize(CATEGORIES[0].title);

const InViewCategory = createContext({
  inViewCategory: initKebabCaseName,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setInViewCategory: (() => {}) as StateUpdater<string>
});

const AppContent = (): JSX.Element => (
  <Flex direction='column' minH='100svh'>
    <Navbar />
    <Flex
      flex='1'
      as='aside'
      bgRepeat='repeat'
      direction='column'
      bgImage={background}
      ms={{ lg: '21em' }}>
      <Header />
      <CategoryList />
      <ScrollToTop />
      <Footer />
    </Flex>
  </Flex>
);

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

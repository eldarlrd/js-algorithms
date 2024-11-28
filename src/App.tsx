import { ChakraProvider, Flex } from '@chakra-ui/react';
import { type JSX } from 'preact/jsx-runtime';
import '@fontsource/ubuntu/latin-400.css';
import '@fontsource/ubuntu-mono/latin-400.css';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router';

import theme from '../chakra.config.mts';

import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';
import background from '@/assets/images/background.webp';
import { Footer } from '@/components/banners/Footer.tsx';
import { Header } from '@/components/banners/Header.tsx';
import { ScrollToTop } from '@/components/buttons/ScrollToTop.tsx';
import { CategoryList } from '@/features/CategoryList.tsx';
import { Navbar } from '@/features/Navbar.tsx';

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
      <Routes>
        <Route
          path='/'
          element={<Navigate to={kebabize(CATEGORIES[0].title)} />}
        />

        {CATEGORIES.map(category => (
          <Route
            key={category.title}
            path={kebabize(category.title)}
            element={<CategoryList category={category} />}
          />
        ))}

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </Flex>
  </Flex>
);

export const App = (): JSX.Element => (
  <ChakraProvider theme={theme}>
    <BrowserRouter basename='js-algorithms'>
      <AppContent />
    </BrowserRouter>
  </ChakraProvider>
);

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

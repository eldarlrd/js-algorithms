import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import '@fontsource/ubuntu/latin-400.css';
import '@fontsource/ubuntu-mono/latin-400.css';

import { type VNode } from 'preact';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import background from '#/images/background.webp';
import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';
import { Footer } from '@/components/banners/Footer.tsx';
import { ScrollToTop } from '@/components/buttons/ScrollToTop.tsx';
import { CategoryList } from '@/features/CategoryList.tsx';
import { Navbar } from '@/features/Navbar.tsx';
// biome-ignore lint/style/noRestrictedImports: theme config file
import theme from '../chakra.config.mts';

const AppContent = (): VNode => (
  <Flex direction='column' minH='100dvh'>
    <Navbar />
    <Flex
      as='aside'
      bgImage={background}
      bgRepeat='repeat'
      direction='column'
      flex='1'
      ms={{ lg: '21em' }}>
      <Box alignContent='center' as='main' flex='1' flexDirection='column'>
        <Routes>
          <Route element={<Navigate to={'/' + kebabize(CATEGORIES[0].title)} />} path='/' />

          {CATEGORIES.map((category) => (
            <Route
              element={<CategoryList category={category} />}
              key={category.title}
              path={'/' + kebabize(category.title)}
            />
          ))}

          <Route element={<Navigate to='/' />} path='*' />
        </Routes>
      </Box>
      <ScrollToTop />
      <Footer />
    </Flex>
  </Flex>
);

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

export const App = (): VNode => (
  <ChakraProvider theme={theme}>
    <BrowserRouter basename='/js-algorithms'>
      <AppContent />
    </BrowserRouter>
  </ChakraProvider>
);

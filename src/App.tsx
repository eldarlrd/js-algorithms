import { Box, ChakraProvider, Flex } from '@chakra-ui/react';
import '@fontsource/ubuntu/latin-400.css';
import '@fontsource/ubuntu-mono/latin-400.css';
import { type ReactElement } from 'preact/compat';
import { HashRouter, Routes, Route, Navigate } from 'react-router';

import theme from '../chakra.config.mts';

import { CATEGORIES, kebabize } from '@/algorithms/categories.ts';
import background from '@/assets/images/background.webp';
import { Footer } from '@/components/banners/Footer.tsx';
import { Header } from '@/components/banners/Header.tsx';
import { ScrollToTop } from '@/components/buttons/ScrollToTop.tsx';
import { CategoryList } from '@/features/CategoryList.tsx';
import { Navbar } from '@/features/Navbar.tsx';

const AppContent = (): ReactElement => (
  <Flex direction='column' minH='100dvh'>
    <Navbar />
    <Flex
      flex='1'
      as='aside'
      bgRepeat='repeat'
      direction='column'
      bgImage={background}
      ms={{ lg: '21em' }}>
      <Header />
      <Box as='main' flex='1' flexDirection='column' alignContent='center'>
        <Routes>
          <Route
            path='/'
            element={<Navigate to={'/' + kebabize(CATEGORIES[0].title)} />}
          />

          {CATEGORIES.map(category => (
            <Route
              key={category.title}
              path={'/' + kebabize(category.title)}
              element={<CategoryList category={category} />}
            />
          ))}

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Box>
      <ScrollToTop />
      <Footer />
    </Flex>
  </Flex>
);

export const App = (): ReactElement => (
  <ChakraProvider theme={theme}>
    <HashRouter>
      <AppContent />
    </HashRouter>
  </ChakraProvider>
);

// Easter Egg
console.log('PNEGUNTB QRYRAQN RFG');

import { Heading, VStack } from '@chakra-ui/react';
import { useContext, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { useInView } from 'react-intersection-observer';

import { checkCashRegisterObj } from '@/algorithms/inputMixed/cash-register.js';
import { InViewCategory } from '@/app.tsx';
import { CodeView } from '@/components/cards/codeView.tsx';
import { LINK_ITEMS } from '@/features/navbar.tsx';

export const InputMixed = (): JSX.Element => {
  const mixFuncArr = [checkCashRegisterObj];

  const mixedCards: JSX.Element[] = [];
  mixFuncArr.forEach(e => {
    mixedCards.push(
      <CodeView
        name={e.name}
        placeholder={e.placeholder}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  });

  const { ref, inView } = useInView({
    // Due to Mixed being too short
    threshold: 1
  });

  const { setInViewCategory } = useContext(InViewCategory);

  useEffect(() => {
    if (inView) {
      window.history.replaceState({}, '', LINK_ITEMS[2].id);
      setInViewCategory(2);
    }
  }, [inView, setInViewCategory]);

  return (
    <main ref={ref}>
      <Heading
        id='input-mixed'
        fontFamily='main'
        textDecoration='3px underline'
        textDecorationColor='yellow.400'
        _selection={{ bg: 'yellow.300' }}
        mx={[2, 4, 8]}
        my='8'>
        Inputs with Mixed Arguments
      </Heading>
      <VStack
        as='section'
        w={['initial', 'fit-content']}
        mx={[2, 4, 8]}
        align='flex-start'
        spacing='8'>
        {mixedCards}
      </VStack>
    </main>
  );
};

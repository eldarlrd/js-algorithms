import { Heading, VStack } from '@chakra-ui/react';
import { useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import { useInView } from 'react-intersection-observer';

import { checkCashRegisterObj } from '@/algorithms/inputMixed/cash-register.js';
import { type ViewCategoryOrder } from '@/app.tsx';
import { CodeCard } from '@/components/cards/codeCard.tsx';
import { LINK_ITEMS } from '@/features/navbar.tsx';

export const InputMixed = ({
  setInViewCategory
}: ViewCategoryOrder): JSX.Element => {
  const mixFuncArr = [checkCashRegisterObj];

  const mixedCards: JSX.Element[] = [];
  mixFuncArr.forEach(e => {
    mixedCards.push(
      <CodeCard
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

  useEffect(() => {
    if (inView && setInViewCategory) {
      window.history.replaceState({}, '', LINK_ITEMS[2].id);
      setInViewCategory(2);
    }
  }, [inView, setInViewCategory]);

  return (
    <div ref={ref}>
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
        w={['initial', 'fit-content']}
        mx={[2, 4, 8]}
        align='flex-start'
        spacing='8'>
        {mixedCards}
      </VStack>
    </div>
  );
};

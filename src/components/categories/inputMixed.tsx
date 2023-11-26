import { Heading, VStack } from '@chakra-ui/react';
import { type JSX } from 'preact/jsx-runtime';

import { checkCashRegisterObj } from '@/algorithms/inputMixed/cash-register.js';
import { CodeCard } from '@/components/codeCard.tsx';
// Mixed Functions

export const InputMixed = (): JSX.Element => {
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

  return (
    <>
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
    </>
  );
};

import {
  VStack
} from '@chakra-ui/react';
import { CodeCard } from './codeCard';

import { diceRollObj } from '../algorithms/inputNumber/dice-roll';
import { factorializeObj } from '../algorithms/inputNumber/factorialize-numbers';

export const InputNumber = () => {
  const numFuncArr = [
    diceRollObj,
    factorializeObj,
  ];
  const numberCards: Array<JSX.Element> = [];
  {numFuncArr.forEach(e => {
    numberCards.push(
      <CodeCard
        name={e.name}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  })}

  return (
    <VStack
      w={['initial', 'fit-content']}
      mx={[2, 4, 8]}
      align='flex-start'
      spacing='8'>
      {numberCards}
    </VStack>
  );
}
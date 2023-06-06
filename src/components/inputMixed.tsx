import {
  Heading,
  VStack
} from '@chakra-ui/react';
import { CodeCard } from './codeCard';
// Mixed Functions


export const InputMixed = () => {
  const mixFuncArr = [
    
  ];

  const mixedCards: Array<JSX.Element> = [];
  {mixFuncArr.forEach(e => {
    mixedCards.push(
      <CodeCard
        name={e.name}
        placeholder={e.placeholder}
        code={e.myFunc}
        raw={e.raw}
      />
    );
  })}

  return (
    <>
    <Heading
      fontFamily='main'
      textDecoration='3px underline'
      textDecorationColor='yellow.400'
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
}
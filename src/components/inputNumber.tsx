import {
  VStack
} from '@chakra-ui/react';
import { CodeCard } from './codeCard';

export const InputNumber = () => {
  return (
    <VStack
      w={['initial', 'fit-content']}
      mx={[2, 4, 8]}
      align='flex-start'
      spacing='8'>
      <CodeCard />
    </VStack>
  );
}
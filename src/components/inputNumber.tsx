import {
  VStack
} from '@chakra-ui/react';
import { CodeCard } from './codeCard';

export const InputNumber = () => {
  return (
    <VStack spacing='8'>
      <CodeCard />
      <CodeCard />
    </VStack>
  );
}
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Flex,
  Box,
  Input,
  HStack
} from '@chakra-ui/react';
import { useState } from 'preact/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlay } from '@fortawesome/free-solid-svg-icons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { diceRoll, diceRollRaw } from '../algorithms/inputNumber/dice-roll';

export const CodeCard = (props: string) => {
  const [visible, setVisible] = useState(false);
  return (
    <Card borderWidth={1} borderColor='gray.300'>
      <CardHeader>
        <Heading fontFamily='main' size='lg'>
          JavaScript Function Name
        </Heading>
      </CardHeader>

      <CardBody fontSize={[10, 16]}>
        <Flex flexDirection='column' alignItems='flex-start' justifyContent='center' gap='2'>
          <Button
            onClick={() => setVisible(!visible)}
            fontSize={[12, 16]}>
            <FontAwesomeIcon
              icon={visible ? faEye : faEyeSlash} />
            {visible ? 'Hide Code' : 'Show Code'}
          </Button>
          {visible
            ? <SyntaxHighlighter
                customStyle={{borderRadius: 6}}
                codeTagProps={{
                  style: {fontFamily: 'Ubuntu Mono'}}}
                language='javascript'
                showLineNumbers={true}
                style={gml}>
                {diceRollRaw}
              </SyntaxHighlighter>
            : null
          }
        </Flex>
      </CardBody>

      <CardFooter>
        <Flex flexDirection='column'>
          <HStack>
            <Input bg='gray.300'></Input>
            <Button bg='green.300'>
              <FontAwesomeIcon icon={faPlay} />
                Run
            </Button>
          </HStack>
          <Heading size='md'>
            Result: 56
          </Heading>
        </Flex>
      </CardFooter>
    </Card>
  );
}
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Flex,
  Collapse,
  Input,
  Text,
  HStack
} from '@chakra-ui/react';
import { useState } from 'preact/hooks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faPlay } from '@fortawesome/free-solid-svg-icons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { diceRoll, diceRollRaw } from '../algorithms/inputNumber/dice-roll';

export const CodeCard = (props: string) => {
  const [ visible, setVisible ] = useState(false);
  // props.code
  const runCode = () => {
    console.log('ran');
  };

  return (
    <Card
      w={['fit-content', 'md', 'xl']}
      borderWidth={1}
      borderColor='gray.300'>
      <CardHeader>
        <Heading fontFamily='main' size='lg'>
          {/* props.name */}
          JavaScript Function Name
        </Heading>
      </CardHeader>

      <CardBody fontSize={[9.4, 12.8, 16]}>
        <Flex
          direction='column'
          align='flex-start'
          gap='2'>
          <Button
            onClick={() => setVisible(!visible)}
            fontSize={[12, 16]}>
            <FontAwesomeIcon
              icon={visible ? faEyeSlash : faEye} />
            {visible ? 'Hide Code' : 'Show Code'}
          </Button>
          <Collapse in={visible}>
            <SyntaxHighlighter
              customStyle={{borderRadius: 6}}
              codeTagProps={{
                style: {fontFamily: 'Ubuntu Mono'}}}
              language='javascript'
              showLineNumbers={true}
              style={gml}>
              {/* props.raw */}
              {diceRollRaw}
            </SyntaxHighlighter>
          </Collapse>
        </Flex>
      </CardBody>

      <CardFooter>
        <Flex flexDirection='column'>
          <HStack>
            <Input bg='gray.300'></Input>
            <Button onClick={runCode} bg='green.300'>
              <FontAwesomeIcon icon={faPlay} />
              <Text>Run</Text>
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
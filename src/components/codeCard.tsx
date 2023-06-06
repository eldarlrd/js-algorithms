import {
  useBoolean,
  useClipboard,
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
  Tooltip
} from '@chakra-ui/react';

import {
  faEye,
  faEyeSlash,
  faPlay,
  faHandHolding,
  faExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { JSX } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';

import { diceRoll, diceRollRaw } from '../algorithms/inputNumber/dice-roll';

export const CodeCard = (props: string) => {
  const [ visible, setVisible ] = useBoolean();
  const { onCopy, hasCopied } = useClipboard('');
  const [ argument, setArgument ] = useState<String>();
  // props.code
  const runCode = () => {
    console.log('ran');
  };

  const copyToClipboard = () => {
    alert('copied');
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
            onClick={setVisible.toggle}
            colorScheme='yellow'
            fontSize={[12, 16]}>
            <Text
              display='flex'
              gap='2'>
              <FontAwesomeIcon
                icon={visible ? faEyeSlash : faEye} />
              {visible ? 'Hide Code' : 'Show Code'}
            </Text>
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
        <Flex
          direction='column'
          align='flex-start'
          w='full'
          gap='2'>
          <Flex w='full' gap='2'>
            <Input
              fontFamily='main'
              focusBorderColor='yellow.300'
              errorBorderColor='red.300'
              value={argument}
              onInput={(e: JSX.TargetedEvent<HTMLInputElement>) =>
                setArgument((e.target as HTMLInputElement).value)}
              bg='gray.100' />
            <Tooltip
              hasArrow
              borderRadius='6'
              label='Run Code'>
              <Button onClick={runCode} colorScheme='yellow'>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </Flex>
          
          <Tooltip
            isDisabled={visible ? true : false}
            hasArrow
            borderRadius='6'
            label='Copy to Clipboard'>
            <Button
              onClick={visible ? null : onCopy}
              mt='2'
              py='2.5'
              h='full'
              whiteSpace='normal'
              colorScheme={visible ? 'red' : 'green'}>
              <Text
                display='flex'
                gap='2'>
                <FontAwesomeIcon
                  icon={visible ? faExclamation : faHandHolding} />
                Success
              </Text>
            </Button>
          </Tooltip>
        </Flex>
      </CardFooter>
    </Card>
  );
}
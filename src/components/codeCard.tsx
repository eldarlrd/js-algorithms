import {
  useBoolean,
  useDisclosure,
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
  faCircleExclamation
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';

export const CodeCard = (props: any) => {
  const [ visible, setVisible ] = useBoolean();
  const { isOpen, onOpen } = useDisclosure();
  const { value, setValue, onCopy } = useClipboard('');
  const [ argument, setArgument ] = useState<String>();
  const [ result, setResult ] = useState<String>();
  const [ error, setError ] = useState<Boolean>();

  const runCode = () => {
    if (argument)
      onOpen();
      setResult(props.code(argument?.split(',')));
  };

  const copyToClipboard = () => {
    setValue(result);
  };

  useEffect(() => {
    if (value === '')
      return;
    onCopy();
  }, [value]);

  useEffect(() => {
    if (result) {
      const errorStr = result.toString().split(' ');
      if (errorStr[0] === 'ERROR:')
        setError(true);
      else setError(false);
    }
  }, [result]);

  return (
    <Card
      w={['fit-content', 'md', 'xl']}
      borderWidth={1}
      borderColor='gray.300'>
      <CardHeader>
        <Heading fontFamily='main' size='lg' as='h3'>
          {props.name}
        </Heading>
      </CardHeader>

      <CardBody
        fontSize={[9.4, 12.8, 16]}
        my='-6'>
        <Flex
          direction='column'
          align='flex-start'
          gap='2'>
          <Button
            onClick={setVisible.toggle}
            colorScheme='yellow'
            fontFamily='main'
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
              {props.raw}
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
          <Flex w='full' mb='2' gap='2'>
            <Input
              fontFamily='main'
              focusBorderColor='yellow.300'
              errorBorderColor='red.300'
              value={argument}
              placeholder={props.placeholder}
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

          <Collapse in={isOpen}>
            <Tooltip
              isDisabled={error ? true : false}
              hasArrow
              borderRadius='6'
              label='Copy to Clipboard'>
              <Button
                onClick={error ? null : copyToClipboard}
                colorScheme={error ? 'red' : 'green'}
                whiteSpace='normal'
                fontFamily='main'
                h='full'
                py='2.5'>
                <Text
                  display='flex'
                  gap='2'>
                  <FontAwesomeIcon
                    icon={error ? faCircleExclamation : faHandHolding} />
                  {result?.toString().replace('ERROR:', '')}
                </Text>
              </Button>
            </Tooltip>
          </Collapse>
        </Flex>
      </CardFooter>
    </Card>
  );
}
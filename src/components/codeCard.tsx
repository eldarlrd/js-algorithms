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
  ScaleFade,
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

import { type JSX } from 'preact/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';

interface CodeProps {
  name: string;
  placeholder: string;
  code: (argument: string[] | undefined) => string;
  raw: string;
}

export const CodeCard = (props: CodeProps): JSX.Element => {
  const [visible, setVisible] = useBoolean();
  const { isOpen, onOpen } = useDisclosure();
  const { value, setValue, onCopy } = useClipboard('');
  const [argument, setArgument] = useState<string>();
  const [result, setResult] = useState<string>();
  const [error, setError] = useState<boolean>();
  const [spinner, setSpinner] = useState<boolean>();

  const runCode = (): void => {
    if (argument) {
      onOpen();
      setSpinner(true);
      setTimeout(() => {
        setSpinner(false);
      }, 200);
      setResult(props.code(argument.split(',')));
    }
  };

  const copyToClipboard = (): void => {
    setValue(result);
  };

  useEffect(() => {
    if (value === '') return;
    onCopy();
  }, [value, onCopy]);

  useEffect(() => {
    if (result) {
      const errorStr = result.toString().split(' ');
      if (errorStr[0] === 'ERROR:') setError(true);
      else setError(false);
    }
  }, [result]);

  return (
    <Card
      as='section'
      w={['21.5rem', 'md', 'xl']}
      borderWidth={1}
      borderColor='gray.300'>
      <CardHeader as='header'>
        <Heading
          fontFamily='main'
          size='lg'
          as='h3'
          _selection={{ bg: 'yellow.300' }}>
          {props.name}
        </Heading>
      </CardHeader>

      <CardBody as='main' fontSize={[9.4, 12.8, 16]} my='-6'>
        <Flex direction='column' align='flex-start' gap='2'>
          <Button
            _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
            onClick={setVisible.toggle}
            colorScheme='yellow'
            minW={[32, 36]}
            fontFamily='main'
            fontSize={[14, 16]}>
            <Text display='flex' gap='2'>
              <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} />
              {visible ? 'Hide Code' : 'Show Code'}
            </Text>
          </Button>

          <Collapse in={visible}>
            <SyntaxHighlighter
              customStyle={{ borderRadius: 6 }}
              codeTagProps={{
                style: { fontFamily: 'Ubuntu Mono' }
              }}
              language='javascript'
              showLineNumbers
              showInlineLineNumbers
              style={gml}>
              {props.raw}
            </SyntaxHighlighter>
          </Collapse>
        </Flex>
      </CardBody>

      <CardFooter as='footer'>
        <Flex direction='column' align='flex-start' w='full' gap='2'>
          <Flex w='full' mb='2' gap='2'>
            <Input
              fontFamily='main'
              focusBorderColor='yellow.300'
              errorBorderColor='red.300'
              aria-label={argument}
              value={argument}
              _selection={{ bg: 'yellow.300' }}
              placeholder={props.placeholder}
              onInput={(e: JSX.TargetedEvent<HTMLInputElement>): void => {
                setArgument((e.target as HTMLInputElement).value);
              }}
              bg='gray.100'
            />
            <Tooltip
              isDisabled={spinner}
              hasArrow
              borderRadius='6'
              label='Run Code'>
              <Button
                aria-label='Run Code'
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                onClick={runCode}
                isLoading={spinner}
                colorScheme='yellow'>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </Flex>

          <Collapse in={isOpen}>
            <ScaleFade in={!spinner}>
              <Tooltip
                isDisabled={error}
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
                  <Text display='flex' gap='2' overflowWrap='anywhere'>
                    <FontAwesomeIcon
                      icon={error ? faCircleExclamation : faHandHolding}
                    />
                    {result?.toString().replace('ERROR:', '')}
                  </Text>
                </Button>
              </Tooltip>
            </ScaleFade>
          </Collapse>
        </Flex>
      </CardFooter>
    </Card>
  );
};

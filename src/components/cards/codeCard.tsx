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
  Tooltip,
  Link
} from '@chakra-ui/react';
import {
  faEye,
  faEyeSlash,
  faPlay,
  faHandHolding,
  faCircleExclamation,
  faClipboard,
  faClipboardCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect, type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeProps {
  name: string;
  placeholder: string;
  code: (argument: string[] | undefined) => string;
  raw: string;
}

export const CodeCard = (props: CodeProps): JSX.Element => {
  const [isVisible, setIsVisible] = useBoolean();
  const { isOpen, onOpen } = useDisclosure();
  const [result, setResult] = useState('');
  const [argument, setArgument] = useState<string>();
  const [isError, setIsError] = useState<boolean>();
  const [isSpinner, setIsSpinner] = useState<boolean>();
  const [isHovered, setIsHovered] = useState(false);
  const [clipboardIcon, setClipboardIcon] = useState(faClipboard);

  const codeClipboard = useClipboard(props.raw);
  const resultClipboard = useClipboard(result);

  const runCode = (): void => {
    if (argument) {
      onOpen();
      setIsSpinner(true);
      setTimeout(() => {
        setIsSpinner(false);
      }, 200);
      setResult(props.code(argument.split(',')));
    }
  };

  const copyCodeToClipboard = (text: string): void => {
    codeClipboard.setValue(text as unknown as StateUpdater<string>);
    codeClipboard.onCopy();
  };

  const copyResultToClipboard = (text: string): void => {
    resultClipboard.setValue(text as unknown as StateUpdater<string>);
    resultClipboard.onCopy();
  };

  useEffect(() => {
    if (result) {
      const isErrorStr = result.toString().split(' ');
      if (isErrorStr[0] === 'ERROR:') setIsError(true);
      else setIsError(false);
    }
  }, [result]);

  return (
    <Card
      as='section'
      id={props.name.toLowerCase().replaceAll(' ', '-')}
      w={['21.5rem', 'md', 'xl']}
      borderWidth={1}
      borderColor='gray.300'>
      <CardHeader as='header'>
        <Heading
          fontFamily='main'
          size='lg'
          as='h3'
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          _selection={{ bg: 'yellow.300' }}>
          {`${props.name} `}
          {isHovered && (
            <Link
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              href={`#${props.name.toLowerCase().replaceAll(' ', '-')}`}
              _selection={{ bg: 'gray.900' }}
              color='yellow.400'
              borderRadius='6'>
              #
            </Link>
          )}
        </Heading>
      </CardHeader>

      <CardBody as='main' fontSize={[9.4, 12.8, 16]} my='-6'>
        <Flex direction='column' align='flex-start' gap='2'>
          <Flex gap='2'>
            <Button
              _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
              onClick={setIsVisible.toggle}
              colorScheme='yellow'
              minW={[32, 36]}
              fontFamily='main'
              fontSize={[14, 16]}>
              <Text display='flex' alignItems='center' gap='2'>
                <FontAwesomeIcon icon={isVisible ? faEyeSlash : faEye} />
                {isVisible ? 'Hide Code' : 'Show Code'}
              </Text>
            </Button>
            <Tooltip
              hasArrow
              placement='right'
              borderRadius='6'
              label='Copy Code'>
              <Button
                aria-label='Run Code'
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                onClick={(): void => {
                  copyCodeToClipboard(props.raw);
                  setClipboardIcon(faClipboardCheck);
                  setTimeout(() => {
                    setClipboardIcon(faClipboard);
                  }, 1000);
                }}
                colorScheme='yellow'>
                <FontAwesomeIcon icon={clipboardIcon} />
              </Button>
            </Tooltip>
          </Flex>

          <Collapse in={isVisible}>
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
              onKeyDown={(
                e: JSX.TargetedKeyboardEvent<HTMLInputElement>
              ): void => {
                if (e.key === 'Enter') runCode();
              }}
              bg='gray.100'
            />
            <Tooltip
              isDisabled={isSpinner}
              hasArrow
              borderRadius='6'
              label='Run Code'>
              <Button
                aria-label='Run Code'
                _focusVisible={{ ring: 3, ringColor: 'yellow.300' }}
                onClick={runCode}
                isLoading={isSpinner}
                colorScheme='yellow'>
                <FontAwesomeIcon icon={faPlay} />
              </Button>
            </Tooltip>
          </Flex>

          <Collapse in={isOpen}>
            <ScaleFade in={!isSpinner}>
              <Tooltip
                isDisabled={isError}
                hasArrow
                borderRadius='6'
                label='Copy to Clipboard'>
                <Button
                  onClick={(): void => {
                    if (!isError && result) copyResultToClipboard(result);
                  }}
                  colorScheme={isError ? 'red' : 'green'}
                  whiteSpace='normal'
                  fontFamily='main'
                  h='full'
                  py='2.5'>
                  <Text display='flex' gap='2' overflowWrap='anywhere'>
                    <FontAwesomeIcon
                      icon={isError ? faCircleExclamation : faHandHolding}
                    />
                    {result.toString().replace('ERROR:', '')}
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

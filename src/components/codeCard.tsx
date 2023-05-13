import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
} from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { gml } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { diceRoll, diceRollRaw } from '../algorithms/inputNumber/dice-roll';

export const CodeCard = () => {
  console.log(diceRoll(2, 6));
  return (
    <Card>
      <CardHeader>
        <Heading fontFamily='main' size='lg'>
          JavaScript Function Name
        </Heading>
      </CardHeader>

      <CardBody>
        <SyntaxHighlighter
          codeTagProps={{
            style: {fontFamily: 'Ubuntu Mono'}}}
          language='javascript'
          showLineNumbers={true}
          style={gml}>
          {diceRollRaw}
        </SyntaxHighlighter>
      </CardBody>

      <CardFooter>

      </CardFooter>
    </Card>
  );
}
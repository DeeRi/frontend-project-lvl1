import mainFunction from '..';
import getRandom from '../random';
import { cons } from 'hexlet-pairs';


const gameDescription = 'Find the greatest common divisor of given numbers.';

export default function gameFunction() {
  let firstNumber = getRandom();
  let secondNumber = getRandom();
  const questionString = `${firstNumber} ${secondNumber}`;

  while (secondNumber !== 0) {
    secondNumber = firstNumber % (firstNumber = secondNumber);
  }
  firstNumber = String(firstNumber);
  return cons(questionString, firstNumber);
}

mainFunction(gameDescription, gameFunction);

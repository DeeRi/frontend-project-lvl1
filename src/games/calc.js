import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';


const mathOperators = ['+', '-', '*'];

const calculateExpression = (a, b, operatorIndex) => {
  switch (operatorIndex) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    default:
      return a + b;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const operatorIndex = getRandomValue(0, mathOperators.length - 1);
  const gameQuestion = `${firstValue} ${mathOperators[operatorIndex]} ${secondValue}`;
  const rightAnswer = String(calculateExpression(firstValue, secondValue, operatorIndex));
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

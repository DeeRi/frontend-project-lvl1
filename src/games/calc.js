import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const mathOperators = ['+', '-', '*'];

const calculateExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const operator = mathOperators[getRandomValue(0, mathOperators.length - 1)];
  const gameQuestion = `${firstValue} ${operator} ${secondValue}`;
  const rightAnswer = String(calculateExpression(firstValue, secondValue, operator));
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

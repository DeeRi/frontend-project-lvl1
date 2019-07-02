import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What is the result of the expression?';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const operatorIndex = getRandomValue(1, 3);
  let gameQuestion = '';
  let expressionResult = 0;
  switch (operatorIndex) {
    case 1:
      gameQuestion = `${firstValue} + ${secondValue}`;
      expressionResult = Number(firstValue) + Number(secondValue);
      break;
    case 2:
      gameQuestion = `${firstValue} - ${secondValue}`;
      expressionResult = Number(firstValue) - Number(secondValue);
      break;
    case 3:
      gameQuestion = `${firstValue} * ${secondValue}`;
      expressionResult = Number(firstValue) * Number(secondValue);
      break;
    default:
      console.log();
  }
  expressionResult = String(expressionResult);
  return cons(gameQuestion, expressionResult);
};

export default () => playGame(gameDescription, getGameData);

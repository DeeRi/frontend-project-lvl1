import { cons } from 'hexlet-pairs';
import showGame from '../index';
import getRandomNumber from '../random';

const gameDescription = 'What is the result of the expression?';

export default function getGameData() {
  const firstValue = getRandomNumber();
  const secondValue = getRandomNumber();

  const max = 3;
  const opindex = Math.floor(Math.random() * max) + 1;

  let gameQuestion = '';
  let expressionResult = 0;
  if (opindex === 1) {
    gameQuestion = `${firstValue} + ${secondValue}`;
    expressionResult = Number(firstValue) + Number(secondValue);
  }
  if (opindex === 2) {
    gameQuestion = `${firstValue} - ${secondValue}`;
    expressionResult = Number(firstValue) - Number(secondValue);
  }
  if (opindex === 3) {
    gameQuestion = `${firstValue} * ${secondValue}`;
    expressionResult = Number(firstValue) * Number(secondValue);
  }
  expressionResult = String(expressionResult);
  return cons(gameQuestion, expressionResult);
}

showGame(gameDescription, getGameData);

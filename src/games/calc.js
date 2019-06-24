/* eslint-disable no-eval */
import { cons } from 'hexlet-pairs';
import mainFunction from '../index';
import getRandom from '../random';

const gameDescription = 'What is the result of the expression?';

export default function gameFunction() {
  const firstNumber = getRandom();
  const secondNumber = getRandom();

  const max = 2;
  const min = 0;
  let opindex = min + Math.random() * (max + 1 - min);
  opindex = Math.floor(opindex);

  let res;
  if (opindex === 0) {
    res = `${firstNumber} + ${secondNumber}`;
  }
  if (opindex === 1) {
    res = `${firstNumber} - ${secondNumber}`;
  } else {
    res = `${firstNumber} * ${secondNumber}`;
  }
  let countedExpression = eval(res);
  countedExpression = String(countedExpression);
  return cons(res, countedExpression);
}

mainFunction(gameDescription, gameFunction);

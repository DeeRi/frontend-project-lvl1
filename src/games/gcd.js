import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const getGcd = (x, y) => {
  if (!y) {
    return x;
  }
  return getGcd(y, x % y);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const firstValue = getRandomValue(1, 100);
  const secondValue = getRandomValue(1, 100);
  const gameQuestion = `${firstValue} ${secondValue}`;
  const rightAnswer = String(getGcd(firstValue, secondValue));
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

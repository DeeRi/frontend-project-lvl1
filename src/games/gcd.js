import showGame from '..';
import getRandomNumber from '../random';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default function getGameData() {
  let firstValue = getRandomNumber();
  let secondValue = getRandomNumber();
  const gameQuestion = `${firstValue} ${secondValue}`;

  while (secondValue !== 0) {
    secondValue = firstValue % (firstValue = secondValue);
  }
  firstValue = String(firstValue);
  return cons(gameQuestion, firstValue);
}

showGame(gameDescription, getGameData);

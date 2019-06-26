import { cons } from 'hexlet-pairs';
import getRandomNumber from '../random';
import showGame from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function getGameData() {
  const gameQuestion = getRandomNumber();
  const isPrime = gameQuestion % 1 || gameQuestion < 2;
  if (isPrime === true) {
    return cons(gameQuestion, 'no');
  }
  const max = Math.floor(Math.sqrt(gameQuestion));
  for (let i = 2; i <= max; i += 1) {
    if (gameQuestion % i === 0) {
      return cons(gameQuestion, 'no');
    }
  }
  return cons(gameQuestion, 'yes');
}

showGame(gameDescription, getGameData);

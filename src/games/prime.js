import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = getRandomValue(-10, 100);
  const rightAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

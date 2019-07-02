import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const isPrimeValue = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = getRandomValue(1, 100);
  const rightAnswer = isPrimeValue(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

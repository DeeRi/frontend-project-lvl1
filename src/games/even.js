import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const isEven = number => number % 2 === 0;

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const getGameData = () => {
  const gameQuestion = getRandomValue(1, 100);
  const rightAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

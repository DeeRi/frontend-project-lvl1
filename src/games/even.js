import showGame from '..';
import getRandomNumber from '../random';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default function getGameData() {
  const gameQuestion = getRandomNumber();
  let rightAnswer = '';
  const isEven = gameQuestion % 2 === 0;
  if (isEven === true) {
    rightAnswer = 'yes';
  }
  if (isEven === false) {
    rightAnswer = 'no';
  }
  return cons(gameQuestion, rightAnswer);
}

showGame(gameDescription, getGameData);

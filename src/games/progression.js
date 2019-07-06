import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const getGameData = () => {
  const firstElement = getRandomValue(1, 20);
  const step = getRandomValue(1, 100);
  const hiddenElementIndex = getRandomValue(0, progressionLength - 1);
  const rightAnswer = String(firstElement + step * hiddenElementIndex);
  let gameQuestion = '';

  for (let i = 0; i < progressionLength; i += 1) {
    const newElement = firstElement + step * i;
    const isSameIndex = hiddenElementIndex === i ? '..' : newElement;
    gameQuestion = `${gameQuestion} ${isSameIndex}`;
  }
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

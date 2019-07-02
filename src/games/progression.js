import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';

const getGameData = () => {
  let hiddenElement = 0;
  let firstElement = 0;
  let gameQuestion = '';
  const step = getRandomValue(1, 100);
  const hiddenElementIndex = getRandomValue(1, 10);
  const progressionLength = 10;
  for (let i = 1; i <= progressionLength; i += 1) {
    firstElement += step;
    const isSameIndex = i === hiddenElementIndex ? '..' : `${firstElement}`;
    if (isSameIndex === '..') {
      hiddenElement = firstElement;
    }
    gameQuestion = `${gameQuestion} ${isSameIndex}`;
  }
  hiddenElement = String(hiddenElement);
  return cons(gameQuestion, hiddenElement);
};

export default () => playGame(gameDescription, getGameData);

import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgressionWithHiddenElement = (firstElement, step, hiddenElementIndex) => {
  const result = '';
  const iter = (index, acc) => {
    if (index > 9) {
      return acc;
    }
    const newElement = firstElement + step * index;
    const isHiddenNumber = index === hiddenElementIndex ? '..' : newElement;
    return iter(index + 1, `${acc} ${isHiddenNumber}`);
  };
  return iter(0, result);
};

const getGameData = () => {
  const firstElement = getRandomValue(0, 20);
  const step = getRandomValue(1, 50);
  const hiddenElementIndex = getRandomValue(0, progressionLength - 1);
  const gameQuestion = makeProgressionWithHiddenElement(firstElement, step, hiddenElementIndex);
  const rightAnswer = String(firstElement + step * hiddenElementIndex);
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

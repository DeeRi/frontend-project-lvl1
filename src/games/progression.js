import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgressionWithHiddenElement = (firstElement, step, hiddenElementIndex) => {
  const iter = (index, acc) => {
    if (index > progressionLength - 1) {
      return acc.trim();
    }
    const newElement = firstElement + step * index;
    const followingElement = index === hiddenElementIndex ? '..' : newElement;
    return iter(index + 1, `${acc} ${followingElement}`);
  };
  return iter(0, '');
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

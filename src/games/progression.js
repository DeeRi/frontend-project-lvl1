import { cons } from 'hexlet-pairs';
import getRandomValue from '../random';
import playGame from '..';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (firstElement, step, hiddenElementIndex) => {
  const result = '';
  const iter = (index, acc, progressionElement) => {
    if (index === progressionLength - 1) {
      return acc;
    }
    if (index === hiddenElementIndex) {
      return iter(index + 1, `${acc} ..`, progressionElement + step);
    }
    return iter(index + 1, `${acc} ${progressionElement}`, progressionElement + step);
  };
  return iter(0, result, firstElement);
};

const getGameData = () => {
  const firstElement = getRandomValue(0, 20);
  const step = getRandomValue(1, 50);
  const hiddenElementIndex = getRandomValue(0, progressionLength - 1);
  const rightAnswer = String(firstElement + step * hiddenElementIndex);
  const gameQuestion = makeProgression(firstElement, step, hiddenElementIndex);
  return cons(gameQuestion, rightAnswer);
};

export default () => playGame(gameDescription, getGameData);

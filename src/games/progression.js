import { cons } from 'hexlet-pairs';
import getRandom from '../random';
import mainFunction from '..';

const gameDescription = 'What number is missing in the progression?';

export default function gameFunction() {
  let hiddenNumber = 0;
  let initialValue = 0;
  let resultString = '';
  const stepOfProgression = getRandom();

  const min = 1;
  const max = 10;
  let index = min + Math.random() * (max + 1 - min);
  index = Math.floor(index);
  for (let i = 1; i <= 10; i += 1) {
    initialValue += stepOfProgression;
    const isIndex = i === index ? '..' : `${initialValue}`;
    if (isIndex === '..') {
      hiddenNumber = initialValue;
    }
    resultString = `${resultString} ${isIndex}`;
  }
  hiddenNumber = String(hiddenNumber);
  return cons(resultString, hiddenNumber);
}

mainFunction(gameDescription, gameFunction);

import { cons } from 'hexlet-pairs';
import getRandomNumber from '../random';
import showGame from '..';

const gameDescription = 'What number is missing in the progression?';

export default function getGameData() {
  let hiddenNumber = 0;
  let initialValue = 0;
  let gameQuestion = '';
  const stepOfProgression = getRandomNumber();

  const max = 10;
  const index = Math.floor(Math.random() * max) + 1;
  const valuesNumber = 10;

  for (let i = 1; i <= valuesNumber; i += 1) {
    initialValue += stepOfProgression;
    const isIndex = i === index ? '..' : `${initialValue}`;
    if (isIndex === '..') {
      hiddenNumber = initialValue;
    }
    gameQuestion = `${gameQuestion} ${isIndex}`;
  }
  hiddenNumber = String(hiddenNumber);
  return cons(gameQuestion, hiddenNumber);
}

showGame(gameDescription, getGameData);

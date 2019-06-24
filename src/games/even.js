import mainFunction from '..';
import getRandom from '../random';
import { cons } from 'hexlet-pairs';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

export default function gameFunction() {
  const gameNumber = getRandom();
  const isEven = gameNumber % 2 === 0 ? 'yes' : 'no';
  const rightAnswer = isEven;
  return cons(gameNumber, rightAnswer);
}

mainFunction(gameDescription, gameFunction);

import { cons } from 'hexlet-pairs';
import getRandom from '../random';
import mainFunction from '..';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function gameFunction() {
  const randomNumber = getRandom();
  if (randomNumber % 1 || randomNumber < 2) {
    return cons(randomNumber, 'no');
  }
  const max = Math.floor(Math.sqrt(randomNumber));
  for (let i = 2; i <= max; i += 1) {
    if (randomNumber % i === 0) {
      return cons(randomNumber, 'no');
    }
  }
  return cons(randomNumber, 'yes');
}

mainFunction(gameDescription, gameFunction);

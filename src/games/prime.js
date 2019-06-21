import { getRandom, isPrime } from '..';
import readlineSync from 'readline-sync';

export default function isPrimeGame() {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    const gameFunction = getRandom();
    console.log(`Question: ${gameFunction}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((isPrime(gameFunction) === true && userAnswer === 'yes') || (isPrime(gameFunction) === false && userAnswer === 'no')) {
      console.log('Correct!');
      i += 1;
    }
    if (isPrime(gameFunction) === false && userAnswer === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}!`);
      return;
    }

    if (isPrime(gameFunction) === true && userAnswer === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

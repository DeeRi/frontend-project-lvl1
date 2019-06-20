import { greatestDivisor, getRandom } from '..';
import readlineSync from 'readline-sync';

export default function greatestDivisorGame() {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);


  let i = 0;
  while (i < 3) {
    const num1 = getRandom();
    const num2 = getRandom();
    console.log(`Question: ${num1} ${num2}`);
    const rightAnswer = greatestDivisor(num1, num2);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === rightAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${rightAnswer}.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

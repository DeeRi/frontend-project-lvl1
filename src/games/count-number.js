/* eslint-disable no-eval */
import { randomExpression } from '..';
import readlineSync from 'readline-sync';

export default function countNumberGame() {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    const gameFunction = randomExpression();
    console.log(`Question: ${gameFunction}`);
    const userAnswer = readlineSync.question('Your answer: ');


    if (Number(userAnswer) === eval(gameFunction)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${eval(gameFunction)}.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

import { initSeries, hiddenNumber } from '..';
import readlineSync from 'readline-sync';


export default function initSeriesGame() {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    const gameFunction = initSeries();
    console.log(`Question: ${gameFunction}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (hiddenNumber === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${hiddenNumber}.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

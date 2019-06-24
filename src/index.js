import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default function mainFunction(gameDescription, gameFunction) {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let moveNumber = 3;
  while (moveNumber > 0) {
    const runFunction = gameFunction();
    const getQuestion = car(runFunction);
    const getAnswer = cdr(runFunction);

    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (toString(userAnswer) !== toString(getAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer}.Let's try again, ${userName}!`);
      return;
    }

    if (toString(userAnswer) === toString(getAnswer)) {
      console.log('Correct!');
      moveNumber -= 1;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

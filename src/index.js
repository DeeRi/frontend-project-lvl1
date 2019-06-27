import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export default function showGame(gameDescription, getGameData) {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let stepsCount = 3; stepsCount > 0; stepsCount -= 1) {
    const gameData = getGameData();
    const getQuestion = car(gameData);
    const getAnswer = cdr(gameData);

    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== getAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    if (userAnswer === getAnswer) {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

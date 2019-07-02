import { car, cdr } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const stepsCount = 3;

const playGame = (gameDescription, getGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 1; i <= stepsCount; i += 1) {
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
};

export default playGame;

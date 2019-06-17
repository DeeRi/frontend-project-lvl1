/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

// greeting

export function makeGreeting() {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
}

// games

export function getRandom() {
  const max = 100;

  const random = Math.floor(Math.random(max) * max);
  return random;
}

export function randomExpression() {
  let max = 100;
  const num1 = Math.floor(Math.random(max) * max);
  const num2 = Math.floor(Math.random(max) * max);

  max = 2;
  const min = 0;
  let opindex = min + Math.random() * (max + 1 - min);
  opindex = Math.floor(opindex);

  let res;
  switch (opindex) {
    case 0:
      res = `${num1} + ${num2}`;
      return res;
    case 1:
      res = `${num1} - ${num2}`;
      return res;
    case 2:
      res = `${num1} * ${num2}`;
      return res;
    default:
      console.log();
  }
  return res;
}

export function randomNumberGame() {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    const gameFunction = getRandom();
    console.log(`Question: ${gameFunction}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((gameFunction % 2 === 0 && userAnswer === 'yes') || (gameFunction % 2 !== 0 && userAnswer === 'no')) {
      console.log('Correct!');
      i += 1;
    }
    if ((gameFunction % 2 !== 0 && userAnswer === 'yes')) {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}!`);
      return;
    }

    if ((gameFunction % 2 === 0 && userAnswer === 'no')) {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}


export function countNumberGame() {
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

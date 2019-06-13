import readlineSync from 'readline-sync';


export function getName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export function getRandom() {
  const max = 100;
  const random = Math.floor(Math.random(max) * max);
  return random;
}

export function numberGame() {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let i = 0;
  while (i < 3) {
    const randomNumber = getRandom();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && userAnswer === 'yes') {
      console.log('Correct!');
      i += 1;
    }
    if (randomNumber % 2 !== 0 && userAnswer === 'no') {
      console.log('Correct!');
      i += 1;
    }

    if (randomNumber % 2 === 0 && userAnswer !== 'yes') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.Let's try again, ${userName}!`);
      return;
    }

    if (randomNumber % 2 !== 0 && userAnswer !== 'no') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

import readlineSync from 'readline-sync';

function putName() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}

export default putName;

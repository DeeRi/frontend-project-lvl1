/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

export function makeGreeting() {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
}

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


export function greatestDivisor(num1, num2) {
  if (!num2) {
    return num1;
  }
  return greatestDivisor(num2, num1 % num2);
}

// eslint-disable-next-line import/no-mutable-exports
export let hiddenNumber;
export function initSeries() {
  let x = 0;
  let resultString = '';
  const step = getRandom();

  const min = 1;
  const max = 10;
  let index = min + Math.random() * (max + 1 - min);
  index = Math.floor(index);
  for (let i = 1; i <= 10; i += 1) {
    x += step;
    const isIndex = i === index ? '..' : `${x}`;
    if (isIndex === '..') {
      hiddenNumber = x;
    }
    resultString = `${resultString} ${isIndex}`;
  }
  return resultString;
}

export function isPrime(number) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(number) || !isFinite(number) || number % 1 || number < 2) { return false; }
  const max = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

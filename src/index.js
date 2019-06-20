/* eslint-disable no-eval */
import readlineSync from 'readline-sync';

export function makeGreeting() {
  console.log('Welcome to the Brain Games!');
  const nameOfUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameOfUser}!`);
}

export function getRandom() {
  const maxNumber = 100;

  const randomNumber = Math.floor(Math.random(maxNumber) * maxNumber);
  return randomNumber;
}

export function randomExpression() {
  let maxNumber = 100;
  const firstNumber = Math.floor(Math.random(maxNumber) * maxNumber);
  const secondNumber = Math.floor(Math.random(maxNumber) * maxNumber);

  maxNumber = 2;
  const min = 0;
  let opindex = min + Math.random() * (maxNumber + 1 - min);
  opindex = Math.floor(opindex);

  let res;
  switch (opindex) {
    case 0:
      res = `${firstNumber} + ${secondNumber}`;
      return res;
    case 1:
      res = `${firstNumber} - ${secondNumber}`;
      return res;
    case 2:
      res = `${firstNumber} * ${secondNumber}`;
      return res;
    default:
      console.log();
  }
  return res;
}


export function greatestDivisor(firstNumber, secondNumber) {
  if (!secondNumber) {
    return firstNumber;
  }
  return greatestDivisor(secondNumber, firstNumber % secondNumber);
}

// eslint-disable-next-line import/no-mutable-exports
export let hiddenNumber;
export function initSeries() {
  let initialValue = 0;
  let resultString = '';
  const stepOfProgression = getRandom();

  const min = 1;
  const max = 10;
  let index = min + Math.random() * (max + 1 - min);
  index = Math.floor(index);
  for (let i = 1; i <= 10; i += 1) {
    initialValue += stepOfProgression;
    const isIndex = i === index ? '..' : `${initialValue}`;
    if (isIndex === '..') {
      hiddenNumber = initialValue;
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


export default function getRandom() {
  const maxNumber = 100;
  const randomNumber = Math.floor(Math.random(maxNumber) * maxNumber);
  return randomNumber;
}

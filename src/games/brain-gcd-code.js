import brainGamesLogic from '../index.js';

const ruleSentence = 'Find the greatest common divisor of given numbers.';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;

const getGCD = (num1, num2) => {
  let gcd;
  for (let i = 1; i <= num1 && i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getGameData = () => {
  const firstNum = getRndmIntegerFrom1To100();
  const secondNum = getRndmIntegerFrom1To100();
  const expression = `${firstNum} ${secondNum}`;
  const correctAnswer = getGCD(firstNum, secondNum).toString();
  const pair = [expression, correctAnswer];
  return pair;
};

const gcdGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default gcdGame;

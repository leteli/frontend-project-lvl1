import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'Find the greatest common divisor of given numbers.';

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
  const firstNum = getRandomInteger(1, 100);
  const secondNum = getRandomInteger(1, 100);
  const expression = `${firstNum} ${secondNum}`;
  const correctAnswer = getGCD(firstNum, secondNum).toString();
  const gameData = [expression, correctAnswer];
  return gameData;
};

const gcdGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default gcdGame;

import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return 'no';
  }
  if (num === 2) {
    return 'yes';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const getGameData = () => {
  const number = getRandomInteger(1, 100);
  const expression = `${number}`;
  const correctAnswer = isPrime(number);
  const pair = [expression, correctAnswer];
  return pair;
};

const primeGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default primeGame;

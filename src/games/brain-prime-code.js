import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const number = getRandomInteger(1, 100);
  const expression = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const gameData = [expression, correctAnswer];
  return gameData;
};

const primeGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default primeGame;

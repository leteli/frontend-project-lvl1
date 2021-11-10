import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const number = getRandomInteger(1, 100);
  const expression = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const pair = [expression, correctAnswer];
  return pair;
};

const isEvenGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};

export default isEvenGame;

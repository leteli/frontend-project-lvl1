import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'What number is missing in the progression?';

const buildProgression = (num1, step, length) => {
  const progression = [];
  for (let i = 0; i <= (length - 1); i += 1) {
    progression[i] = num1 + (i * step);
  }
  return progression;
};

const getGameData = () => {
  const num1 = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 10);
  const length = 10;
  const missingIndex = getRandomInteger(0, 9);
  const progression = buildProgression(num1, step, length);
  const correctAnswer = progression[missingIndex].toString();
  progression[missingIndex] = '..';
  const expression = progression.join(' ');
  const gameData = [expression, correctAnswer];
  return gameData;
};

const progressionGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default progressionGame;

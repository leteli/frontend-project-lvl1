import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'What number is missing in the progression?';

const progressionNumbersCount = 10;

const buildProgression = (num1, step) => {
  const progression = [];
  let item = num1;
  for (let i = 0; i <= (progressionNumbersCount - 1); i += 1) {
    progression[i] = item;
    item += step;
  }
  return progression;
};

const getMissingNum = (num1, step, missingIndex) => {
  const progression = buildProgression(num1, step);
  const missingNum = progression[missingIndex];
  return missingNum;
};

const buildProgressionWithMissingNum = (num1, step, missingIndex) => {
  const progression = buildProgression(num1, step);
  progression[missingIndex] = '..';
  return progression;
};

const getGameData = () => {
  const num1 = getRandomInteger(1, 100);
  const step = getRandomInteger(1, 10);
  const missingIndex = getRandomInteger(0, 9);
  const expression = `${buildProgressionWithMissingNum(num1, step, missingIndex).join(' ')}`;
  const correctAnswer = getMissingNum(num1, step, missingIndex).toString();
  const pair = [expression, correctAnswer];
  return pair;
};

const progressionGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default progressionGame;

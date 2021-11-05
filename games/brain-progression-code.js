import brainGamesLogic from '../src/index.js';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;
const getRndmIntegerFrom1To10 = () => Math.floor(Math.random() * 10) + 1;
const getNumFrom0To9 = () => Math.floor(Math.random() * 10);

const buildProgressionWithMissingNum = (num1, step, missingIndex) => {
  const progression = [];
  let item = num1;
  for (let i = 0; i <= 9; i += 1) {
    progression[i] = item;
    item += step;
  }
  progression[missingIndex] = '..';
  return progression;
};

const getMissingNum = (num1, step, missingIndex) => {
  const progression = [];
  let item = num1;
  for (let i = 0; i <= 9; i += 1) {
    progression[i] = item;
    item += step;
  }
  return progression[missingIndex];
};

const pairGenerator = () => {
  const num1 = getRndmIntegerFrom1To100();
  const step = getRndmIntegerFrom1To10();
  const missingIndex = getNumFrom0To9();
  const expression = `${buildProgressionWithMissingNum(num1, step, missingIndex)}`;
  const correctAnswer = getMissingNum(num1, step, missingIndex).toString();
  const pair = [expression, correctAnswer];
  return pair;
};

const toDoString = 'What number is missing in the progression?';

const progressionGame = () => {
  brainGamesLogic(toDoString, pairGenerator);
};
export default progressionGame;

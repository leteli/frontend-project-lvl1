import brainGamesLogic from '../src/index.js';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const pairGenerator = () => {
  const number = getRndmIntegerFrom1To100();
  const expression = `${number}`;
  const correctAnswer = isEven(number);
  const pair = [expression, correctAnswer];
  return pair;
};

const toDoString = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenGame = () => {
  brainGamesLogic(toDoString, pairGenerator);
};

export default isEvenGame;

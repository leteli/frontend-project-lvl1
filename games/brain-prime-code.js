import brainGamesLogic from '../src/index.js';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;

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

const pairGenerator = () => {
  const number = getRndmIntegerFrom1To100();
  const expression = `${number}`;
  const correctAnswer = isPrime(number);
  const pair = [expression, correctAnswer];
  return pair;
};

const toDoString = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = () => {
  brainGamesLogic(toDoString, pairGenerator);
};
export default primeGame;

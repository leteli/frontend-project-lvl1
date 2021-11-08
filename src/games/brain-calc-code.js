import brainGamesLogic from '../index.js';

const ruleSentence = 'What is the result of the expression?';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;

const operators = ['+', '-', '*'];
const getRandomIndex = () => Math.floor(Math.random() * operators.length);

const calculate = (num1, oper, num2) => {
  switch (oper) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const getGameData = () => {
  const firstOperand = getRndmIntegerFrom1To100();
  const secondOperand = getRndmIntegerFrom1To100();
  const operator = operators[getRandomIndex()];
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = calculate(firstOperand, operator, secondOperand).toString();
  const pair = [expression, correctAnswer];
  return pair;
};

const calcGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default calcGame;

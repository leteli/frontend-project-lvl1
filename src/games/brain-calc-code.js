import { getRandomInteger, brainGamesLogic } from '../index.js';

const ruleSentence = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

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
  const firstOperand = getRandomInteger(1, 100);
  const secondOperand = getRandomInteger(1, 100);
  const operator = operators[getRandomInteger(0, 2)];
  const expression = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = calculate(firstOperand, operator, secondOperand).toString();
  const gameData = [expression, correctAnswer];
  return gameData;
};

const calcGame = () => {
  brainGamesLogic(ruleSentence, getGameData);
};
export default calcGame;

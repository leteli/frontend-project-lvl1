import readlineSync from 'readline-sync';

const brainGamesLogic = (toDoString, getPair) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(toDoString);
  for (let i = 1; i <= 3; i += 1) {
    const pair = getPair();
    const expression = pair[0];
    const correctAnswer = pair[1];
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default brainGamesLogic;

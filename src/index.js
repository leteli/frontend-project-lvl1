import readlineSync from 'readline-sync';

const gameRoundsCount = 3;

const brainGamesLogic = (ruleSentence, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleSentence);
  for (let i = 1; i <= gameRoundsCount; i += 1) {
    const pair = getGameData();
    const [expression, correctAnswer] = pair;
    console.log(`Question: ${expression}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default brainGamesLogic;

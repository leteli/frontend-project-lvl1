import readlineSync from 'readline-sync';

const getRndmIntegerFrom1To100 = () => Math.floor(Math.random() * 100) + 1;

const isEvenYN = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const isEvenGame = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 1; i <= 3; i += 1) {
    const currentNumber = getRndmIntegerFrom1To100();
    console.log(`Question: ${currentNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEvenYN(currentNumber) === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${isEvenYN(currentNumber)}. Let's try again, ${userName}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
export default isEvenGame;

const newEmployees = () => {
   const employees = {
     id1: newEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
     id2: newEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
     id3: newEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
   }
   return employees;
 };

 const newEmail = (nome) => {
   let splitName = nome.split(' ');
   return `${splitName[0]}_${splitName[1]}@trybe.com`;
 };

 console.log(newEmployees());

 // ex 2

 const randomNumberGen = (betNum, checkWin) => {
   let randomNum = Math.floor(Math.random() * 6);
   console.log(randomNum);
   return checkWin(randomNum, betNum);
 };

 const checkWin = (lotteryNumber, betNum) => {
    if (lotteryNumber === betNum) {
       console.log('You Win!')
    } else { console.log('Try again') }
 }

 randomNumberGen(5, checkWin)

 // ex 3

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

 const gradeGenerator = (correct, student, gradeCount) => {
   console.log(gradeCount(correct, student));
 }

 const gradeCount = (answer, studentAnswer) => {
   let points = 0;

   for (let index = 0; index < answer.length; index += 1) {
      if (answer[index] === studentAnswer[index]) {
         points += 1;
      } else if (studentAnswer[index] === 'N.A') {
         points += 0;
      } else {
         points -= 0.5;
      };
   };

   return points;
 }

 gradeGenerator(rightAnswers, studentAnswers, gradeCount);
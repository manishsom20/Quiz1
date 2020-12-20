var readlineSync = require("readline-sync");
var userName = readlineSync.question("May I have your name? ");
console.log("Welcome " + userName + " to the game \"Do you know Manish\"!");
console.log(`
1. In this game you have to answer some personal questions about me
2. Total there are 8 questions
3. For each correct answer you get 1 point
4. No deduction for any wrong answer
5. Highest scorer is Pratik with 8 points`);
console.log();
console.log("Let the game begin");
var score = 0;
var highest = [
  {
    name : "Pratik",
    score : 8
  },
  {
    name : "mom",
    score : 6
  },
  {
    name : "Dad",
    score : 7
  }
];
var question1 = {
  question : `
  1. What is my full name?
  [a] Manish Das
  [b] Manish Biswal 
  [c] Manish Sharma 
  [d] Manish S Biswal \n `,
  answer : "d"
};
var question2 = {
  question : `
  2. Where do i live?
  [a] Bhubaneswar
  [b] Burla
  [c] Delhi
  [d] Mumbai \n`,
  answer : "a"
};
var question3 = {
  question : `
  3. Where do i study?
  [a] IIT Bhubaneswar
  [b] IIIT Bhubaneswar
  [c] Veer Surendra Sai University of Technology
  [d] NIT Roulkela \n`,
  answer : "c"
}
var question4 = {
  question : `
  4. What is my favorite color?
  [a] red
  [b] blue
  [c] black
  [d] yellow \n`,
  answer : "c"
}
var question5 = {
  question : `
  5. Which laptop do i own?
  [a] HP Envy x360
  [b] Asus ROG Zephyrus G14
  [c] MacBook Pro
  [d] Lenovo Legion y740 \n`,
  answer : "d"
}
var question6 = {
  question : `
  6. Which smartphone do i own?
  [a] Motorola Edge Plus
  [b] Realme 3 pro
  [c] OnePlus 8 Pro
  [d] Oppo Find X2 Pro\n`,
  answer : "b"
}
var question7 = {
  question : `
  7. What is my favorite food?
  [a] Dosa
  [b] Vada
  [c] Chilli paneer
  [d] Chaat\n`,
  answer : "d"
}
var question8 = {
  question : `
  8. What is my hobby?
  [a] reading book
  [b] playing football
  [c] coding
  [d] studing\n`,
  answer : "c"
}
var questions = [question1,question2, question3, question4, question5, question6, question7, question8];
function game(input1,input2){
  var userAnswer = readlineSync.question(input1);
  if(userAnswer===input2){
    console.log("Congratulation, you are correct!");
    ++score;
    console.log("Your score is " + score);
  }else{
    console.log("Sorry, you are wrong!");
    console.log("Your score is " + score);
  }
}
for (var i=0;i<questions.length;i++){
  game(questions[i].question, questions[i].answer);
}
console.log();
console.log("Your final score is " + score);
//❗❗ PLEASE READ THE README file for project instructions, helpful resources, additional tasks and stretch problems, and more ❗❗ 

// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log('example task:', processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  Counter1 returns a function while counter2 returns a count.
  2. Which of the two uses a closure? How can you tell?
  Counter2 uses a closure because it has to reach outside of the function for the variable count.
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better? 
  Counter2 is better if that is the only variable being used. But if the counter is dependent on something else happening to increase the count,
  then counter1 is better. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
}
console.log('task 2: inning', inning());

/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 in the first parameter
  2. Receive a number of innings to be played in the second parameter
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 
function finalScore(callback, innings){
  let score=[];
  let HomeScore=0;
  let AwayScore=0;
  for (let i=0;i<innings;i++){
    let score1 = callback();
    let score2 = callback();
    score[i]={
      'Home':score1,
      'Away':score2,
    };
    HomeScore=score1+HomeScore;
    AwayScore = score2+AwayScore;
  };
  let FinalScore={
    'Home': HomeScore,
    'Away': AwayScore,
  };
  return FinalScore;
};
console.log('task 3:', finalScore(inning,9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function in a parameter - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function 
  
For example: invoking getInningScore(inning) might return this object:
{
  "Home": 0,
  "Away": 2
}
  */
function getInningScore(callback) {
  //return an object with a score for home and away that populates from the inning function
  let score=[];
  score={
    'Home':callback(),
    'Away':callback()
    };
  return score;
  }//getInningScore function
  console.log('task 4',getInningScore(inning))

/* STRETCH: ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function in the first parameter that will take `getInningScore` from Task 4 as its argument
  2. Receive the callback function in a second parameter that will take `inning` from Task 2 as its argument
  3. Receive a number in a third parameter that will take the number of innings to be played as its argument
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score (see the example below).
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
] */
// NOTE: There is no test associated with this code; if your output matches the given example, consider it complete!
function scoreboard(cb1,cb2,innings) {
  let score=[];
  let HomeScore=0;
  let AwayScore=0;
  for (let i=0;i<innings;i++){
    let score1 = cb2();
    let score2 = cb2();
    score[i]= cb1(cb2);
    HomeScore=score1+HomeScore;
    AwayScore = score2+AwayScore;
  }
  
    if (HomeScore===AwayScore){
      score[innings]='This game will require extra innings: Away '+ AwayScore+' - Home '+HomeScore;
  } else{
      score[innings]='Final Score: Away '+AwayScore+' - Home '+HomeScore;
  };
  return score; 
}
console.log('task5', scoreboard(getInningScore,inning,9))
  
//   if(final.Home===final.Away){
//     final.Message='This game will require extra innings: Away '+final.Away+'- Home '+final.Home;
//   }else{
//     final.Message='Final Score: Away '+ final.Away+ '- Home '+final.Home;
//   }
//   return final;

// console.log('task 5',scoreboard(getInningScore,inning,9))


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}

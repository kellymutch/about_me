'use strict';
var userName = prompt('Greetings!! What is your name');
// alert ('Welcome ' + userName + '. We are going to play a guessing game.');
// function answered(){
//   console.log ('Greeting answered');
//   var answer1 = prompt('Is Kelly a native Seattleite?').toLowerCase();
//   if (answer1 === 'yes' || answer1 === 'y') {
//     alert('Yes, I grew up in Redmond, before Bill.');
//   }
//   else {
//     alert('That is incorrect, I am native.');
//   }
//   console.log (answer1 + ' answer to native');
//   var answer2 = prompt('Has Kelly ever lived else where?').toLowerCase();
//   if (answer2 === 'yes' || answer2 === 'y') {
//     alert('Yes, I lived in Santa Fe, New Mexico for 15 years.');
//   }
//   else {
//     alert('I spent time in the city different');
//   }
//   console.log (answer2 + ' answer to NM');
//   var answer3 = prompt('Has Kelly done non IT work.').toLowerCase();
//   if (answer3 === 'yes' || answer3 === 'y') {
//     alert('Yes, I have been a non profit director, a ditch digger, janitor, farm and stable manager and a few other things.');
//   }
//   else {
//     alert('I have done a bit of everything.');
//   }
//   console.log (answer3 + ' answer to work question');
//   var answer4 = prompt('Does Kelly ever go outside?').toLowerCase();
//   if (answer4 === 'yes' || answer4 === 'y') {
//     alert('Yes, I golf, bike, hike and love to do new things. My last adventure was salmon/halibut fishing in the gulf of Alaska.');
//   }
//   else {
//     alert('I do get off the couch.');
//   }
//   console.log (answer4 + ' couch question');
//   var answer5 = prompt('Is Kelly creative and fun and whimsical.').toLowerCase();
//   if (answer5 === 'yes' || answer5 === 'y') {
//     alert('Not really but after a beer or two, I start to find myself funny.');
//   }
//   else {
//     alert('You may find me funny after a beer or two.');
//   }
//   console.log (answer5 + ' I am not funny.');
// }
// function question6 () {
//   var number = parseInt(prompt('I am thinking of a number between one and ten. If you can guess that number within 4 tries, you win.'));
//   var i = 0;
//   //var correctNum = 5;// the below works on a number of tries in that it exits,fixed
//   while (number !== 5 && i < 4) {
//     if (number > 5) {
//       alert('Your number was to high.');
//       console.log(i);
//     }
//     else if (number < 5) {
//       alert('Your number was too low.');
//       console.log(i);
//     }
//      else {
//       alert('Please enter a number.');
//       console.log(i);
//     }
//     i++;
//     number = parseInt (prompt('I am thinking of a number between one and ten. If you can guess that number within 4 tries, you win.'));
//   }
//   if ( i === 4 ) {
//     alert('Game over, too many tries.');
//   }
//   else if ( number === 5 ){
//     alert('Great Job, you win.');
//     console.log(i);
//   }
// }
function question7(){ //need something that will catch if same name used 2x
  var arrayName = [' sam',' sara',' socorro',' sage',' shasta',' solo'];
  var dogName = prompt(userName + ', please try and guess the name of one of my dogs.' );
  var m = 0;//counter
  var correctAnswer = 0;
  while( m < 6){
    for ( var j = 0; j <= arrayName.length ; j++ ) {
      if(dogName === arrayName[j]){
        //m ++;
        correctAnswer ++;
        alert('Good job!! ' + userName + '.');
        console.log('correct dog name');
        console.log(m);
        console.log(correctAnswer);
      }
    }
    if(correctAnswer === 0) {
      m ++;
      dogName = prompt(userName + ', please try and guess the name of one of my dogs.' );
      console.log('wrong dog name');
      console.log(m);
      console.log(correctAnswer);
    }
    else {
      m = 7;
    }
  }
  if(m === 6) {
    alert(userName + ', you guessed ' + correctAnswer + ' correctly. The dogs names are ' + arrayName + '.');
      //guess = false;
  }
}
//answered();
//question6();
question7();

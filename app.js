'use strict';
var userName = prompt('Greetings!! What is your name');
alert ('Welcome ' + userName, + ' We are going to play a guessing game');
var answer1 = prompt(userName, + 'Is Kelly a native Seattleite?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert ('Yes, I grew up in Redmond.');
}
else {
  alert ('That is incorrect');
}
console.log (answer1);

var answer2 = prompt('Has Kelly ever lived else where?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert ('Yes, I lived in Santa Fe, New Mexico for 15v years.');
}
else {
  alert ('That is incorrect');
}
console.log (answer2);



var answer3 = prompt('?').toLowerCase();
var answer4 = prompt('?').toLowerCase();
var answer5 = prompt('?').toLowerCase();

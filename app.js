'use strict';
var userName = prompt('Greetings!! What is your name');
alert ('Welcome ' + userName + '. We are going to play a guessing game.');
console.log ('Greeting answered');
var answer1 = prompt ('Is Kelly a native Seattleite?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert ('Yes, I grew up in Redmond, before Bill).');
}
else {
  alert ('That is incorrect');
}
console.log (answer1+ (' answer to 1'));

var answer2 = prompt('Has Kelly ever lived else where?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert ('Yes, I lived in Santa Fe, New Mexico for 15 years.');
}
else {
  alert ('That is incorrect');
}
console.log (answer2 + (' answer to 2'));

var answer3 = prompt('Has Kelly done non IT work.').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert ('Yes, I have been a non profit director, a ditch digger, janitor, farm and stable manager and a few other things.');
}
else {
  alert ('That is incorrect');
}
console.log (answer3 + (' answer to 3'));

var answer4 = prompt('Does Kelly ever go outside?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert ('Yes, I golf, bike, hike and love to do new things. My last adventure was salmon/halibut fishing in the gulf of Alaska.');
}
else {
  alert ('That is incorrect');
}
console.log (answer4 + (' answer to 4'));

var answer5 = prompt('Is Kelly creative and fun and whimsical ').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  alert ('Not really but after a beer or two, I start to find myself funny.');
}
else {
  alert ('Not really but after a beer or two, I start to find myself funny.');
}
console.log (answer5 + (' answer to 5'));

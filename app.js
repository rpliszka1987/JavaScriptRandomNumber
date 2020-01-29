// First Number
var firstNumber = prompt('What is your start number?');
var bottomNumber = parseInt(firstNumber);
// Second Number
var secondNumber = prompt('What is your finish number?');
var topNumber = parseInt(secondNumber);
// Random number Generation
var randomNumber = Math.floor(Math.random() * ((topNumber - bottomNumber) + bottomNumber) + 1);

console.log(randomNumber);

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbersResult', sum);

function convertHoursToMinutes(hours) {
  var result = hours * 60;
  return result;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  var result = 'Hello ' + name + '!';
  return result;
}

var greeting = getGreeting('Vanessa');
console.log('greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  var result = (num1 + num2);
  return result * 5;

}
var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log('sumTimesFive:', sumTimesFive);

function multiplyAndDividedBy5(num1, num2) {
  var result = (num1 * num2 / 5);
  return result;
}

var productDividedByFive = multiplyAndDividedBy5(35, 10);
console.log('productDividedByFive', productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  var result = num1 - num2;
  return result;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference:', difference);

function getCircleCircumference(radius) {
  var result = 5 * 3.14 * 2;
  return result;
}

var circumference = getCircleCircumference(5);
console.log('circumference:', circumference);

function getFullName(firstName, lastName) {
  var result = firstName + ' ' + lastName;
  return result;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('fullName:', fullName);

function cube(number) {
  var result = number * number * number;
  return result;
}

var cubed = cube(5);
console.log('cubed:', cubed);

let firstNum, secondNum, thirdNum;

firstNum = prompt("Enter the first number:");
secondNum = prompt("Enter the second number:");
thirdNum = prompt("Enter the third number:");

let arr = new Array();

arr.push(firstNum);
arr.push(secondNum);
arr.push(thirdNum);

let areAllDifferent = arr.every(function(num, index, array) {
  return array.indexOf(num) === index;
});

if (!areAllDifferent) {
  document.write("Error: Please enter three different numbers.");
} else {
  let maxNum = Math.max(...arr);
  document.write(`The largest number is ${maxNum}.`);
}

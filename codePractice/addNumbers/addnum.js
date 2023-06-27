var total = 0;
var numOfNum = parseFloat(prompt("How many numbers do you wanna add? Enter a digit:"))
for (let i = 1; i <= numOfNum; i++) {
  let num = parseFloat(prompt(`Enter number ${i}:`));
  if (!isNaN(num)) {
  total += num;
  }
}
document.write(`The total is ${total}.`);

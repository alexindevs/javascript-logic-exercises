let weight = parseFloat(prompt("Enter your weight in pounds:"));
let gender = prompt("Enter your gender (M/F):");
let numOfDrinks = parseFloat(prompt("Enter the number of drinks you've had:"));
let alcoholVol = parseFloat(prompt("Enter the alcohol by volume (ABV) of your drinks (%):"));
let timeOfLastDrink = parseFloat(prompt("Enter the amount of time since your last drink (hours):"));

let r = (gender === "M") ? 0.73 : 0.66;
let A = numOfDrinks * alcoholVol * 0.01 * 5.14;
let W = weight * 0.453592;
let H = 0.015 * timeOfLastDrink;

let BAC = (A / (W * r)) - H;
BAC = Math.max(BAC, 0);

var msg;

if (BAC > 0.08) {
   msg = "It is not legal for you to drive in this state.";
} else {
  msg = "Happy Driving!";
}

document.write(`Your BAC is ${BAC.toFixed(4)}. <br>`);
document.write(msg);


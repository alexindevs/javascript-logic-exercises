let weight = prompt("You weight in kg");
let height = prompt("Your height in meters");

let bmi = weight / (height * height);
    bmi = Math.floor(bmi);

var result;

if (bmi > 18.5 && bmi < 25) {
     result = `You have a healthy weight. Your BMI is ${bmi}`;
    } else if (bmi < 18.5) {
     result = `You are underweight. Your BMI is ${bmi}.`;
    } else if (bmi > 25) {
     result = `You are overweight. Your BMI is ${bmi}.`; 
    } else {
     result = "Invalid input."
    }


document.write(result);
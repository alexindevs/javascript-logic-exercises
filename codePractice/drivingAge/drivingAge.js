let userAge = prompt("How old are you?");

const drivingAge = 16;

let message = (drivingAge <= userAge) ? "You are old enough to legally drive." : "You are not old enough to legally drive.";

document.write(message);
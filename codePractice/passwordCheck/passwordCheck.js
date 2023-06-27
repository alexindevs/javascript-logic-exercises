let password = prompt("What's your password?");
let strength;
let numberCheck = /^\d+$/.test(password);
let length = password.length;
let letterCheck = /[a-z]/i.test(password);
let mixedCheck = /^[A-Za-z0-9]*$/.test(password);
let everyCheck = /[A-Za-z0-9\/\-\.]{8,}/.test(password);

function passwordChecker(password) {
  let length = password.length;

  if (numberCheck || length < 8) { 
    strength = "very weak";
  } else if (letterCheck && length < 8) {
    strength = "weak";
  } else {
    if (letterCheck && numberCheck && length >= 8) {
      strength = "strong";
    } else if (everyCheck) {
      strength = "very strong";
    }
  }

  return strength;
}

let passwordStrength = passwordChecker(password);

document.write(`${password} is a ${passwordStrength} password.`);
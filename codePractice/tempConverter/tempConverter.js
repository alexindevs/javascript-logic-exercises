var choice = prompt("Press C to convert from Fahrenheit to Celsius.\nPress F to convert from Celsius to Fahrenheit.");
var temperature = parseFloat(prompt(`Please enter the temperature in ${choice == 'C' ? 'Fahrenheit' : 'Celsius'}:`));

if (choice.toUpperCase() == 'C') {
  var celsius = (temperature - 32) * 5 / 9;
  document.write(`The temperature in Celsius is ${celsius.toFixed(1)}.`);
} else if (choice.toUpperCase() == 'F') {
  var fahrenheit = temperature * 9 / 5 + 32;
  document.write(`The temperature in Fahrenheit is ${fahrenheit.toFixed(1)}.`);
} else {
  document.write("Invalid choice.");
}

let rateOfReturn;
let years;

while (true) {
  rateOfReturn = prompt("What is the rate of return?");
  
  if (isNaN(rateOfReturn) || rateOfReturn == 0) {
    document.write("Sorry. That's not a valid input.<br>");
  } else {
    years = 72 / rateOfReturn;
    document.write(`It will take ${years.toFixed(0)} years to double your initial investment.<br>`);
    break;
  }
}

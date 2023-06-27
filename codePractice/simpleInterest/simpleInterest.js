var Principal = parseFloat(prompt("Enter the money you wish to invest"));
var Rate = parseFloat(prompt("Enter the interest rate"));
var Time = parseFloat(prompt("Enter the years"));

var interest = (Principal * Rate * Time) / 100;
var totalAmount = Principal + interest;

document.write(`Enter the principal: ${Principal} <br>Enter the rate of interest: ${Rate} <br>Enter the number of years: ${Time} <br> <br>After ${Time} years at ${Rate}%, the investment will be worth $${totalAmount}.`); 
var Principal = parseFloat(prompt("Enter the money you wish to invest"));
var Rate = parseFloat(prompt("Enter the interest rate"));
var Time = parseFloat(prompt("Enter the years"));
var Compound = parseFloat(prompt("What is the number of times the interest is compounded per year?"));

var compoundInterest = Principal *  Math.pow((1 + (Rate/100) / Compound), (Compound * Time)); 
compoundInterest = compoundInterest.toFixed(2);

document.write(`$${Principal} invested at ${Rate}% for ${Time} years
compounded ${Compound} times per year is $${compoundInterest}.`)
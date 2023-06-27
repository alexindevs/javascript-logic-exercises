let amountFrom = parseFloat(prompt("Enter amount in euros:"));
let rateFrom = parseFloat(prompt("Enter current exchange rate in euros:"));

let amountTo = (amountFrom * rateFrom);
amountTo = amountTo.toFixed(2); // Round to 2 decimal places

document.write(`${amountFrom} euros is equal to $${amountTo} U.S. dollars.`);


// Unfinished
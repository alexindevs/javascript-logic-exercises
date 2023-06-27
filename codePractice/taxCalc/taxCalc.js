var amount = parseFloat(prompt("Enter the amount:"));
var state = prompt("Enter state:");

var taxRate = 0;
if (state === "WI") {
  taxRate = 0.055;
}

var tax = amount * taxRate;
var total = amount + tax;

if (state === "WI") {
  document.write(`Subtotal: $${amount.toFixed(2)} <br>`);
  document.write(`Tax: $${tax.toFixed(2)} <br>`);
  document.write(`Total: $${total.toFixed(2)} <br>`);
} else {
  document.write(`Total: $${total.toFixed(2)} <br>`);
}

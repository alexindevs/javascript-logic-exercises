var item1 = prompt("Enter the price of item 1");
var qty1 = prompt("Enter the quantity:");
var item2 = prompt("Enter the price of item 2");
var qty2 = prompt("Enter the quantity:");
var item3 = prompt("Enter the price of item 3");
var qty3 = prompt("Enter the quantity:");

let total1 = item1 * qty1;
let total2 = item2 * qty2;
let total3 = item3 * qty3;

let subtotal = total1 + total2 + total3;
const taxRate = 5.5 / 100;
let tax = subtotal * taxRate;
let total = subtotal + tax;

document.write(`Enter the price of item 1: ${item1} <br>`);
document.write(`Enter the quantity: ${qty1} <br>`);
document.write(`Enter the price of item 2: ${item2} <br>`);
document.write(`Enter the quantity: ${qty2} <br>`);
document.write(`Enter the price of item 3: ${item3} <br>`);
document.write(`Enter the quantity: ${qty3} <br>`);

document.write(`Subtotal: $${subtotal} <br>`);
document.write(`Tax: $${tax} <br>`);
document.write(`Total: $${total} <br>`);
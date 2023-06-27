let amount = parseFloat(prompt("What is the order amount?"));
let state = prompt("What is the state? (Enter two-letter abbreviation)");

let tax = 0;
let taxAmount = 0;
let total;

if (state == "WI") {
    var county = prompt("What is your county?");

    switch (county) {
        case "Eau Claire":
            tax = 0.005;
            break;
        case "Dunn":
            tax = 0.008;
            break;
        default:
            tax = 0.05;
            break;
    }

    taxAmount = tax * amount;
} else if (state == "IL") {
    tax = 8;
    taxAmount = (tax/100) * amount;
}

total = amount + taxAmount;

document.write(`What is the order amount? ${amount}<br>What is the state? ${state}<br>The tax is ${taxAmount.toFixed(2)}<br>The total is ${total.toFixed(2)}<br>`);

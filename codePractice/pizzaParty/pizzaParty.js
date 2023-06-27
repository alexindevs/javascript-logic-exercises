let numOfPeople = parseFloat(prompt("How many people?"));
let numOfPizzas = parseFloat(prompt("How many pizzas to be shared equally?"));

 
 document.write(`${numOfPeople} people with ${numOfPizzas} pizzas. <br>`);
 const pizzaSlices = 8;

 totalSlices = numOfPizzas * pizzaSlices;
 slicePerPerson = Math.floor(totalSlices / numOfPeople);
 leftovers = totalSlices % numOfPeople;

document.write(`Each person gets ${slicePerPerson} pieces of pizza. <br>`);
document.write(`There are ${leftovers} leftover pieces.`);
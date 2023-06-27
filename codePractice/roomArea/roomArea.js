let length = prompt("What is the length of the room in feet?");
let width = prompt("What is the width of the room in feet?");
 document.write(`You entered dimensions of ${length} by ${width} feet. <br>`);
 document.write("The area is" + "<br>");

let feet = length * width;
let meters = feet * 0.09290304;

document.write(`${feet} square feet` + "<br>")
document.write(`${meters} square meters`)



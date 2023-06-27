let sqrFt = prompt("How many square feet do you need to cover?");
const gallon = 350;

let numOfGallons = Math.ceil(sqrFt / gallon);
if (numOfGallons == 1) {
    document.write(`You need ${numOfGallons} gallon to cover ${sqrFt} square feet.`);
} else {
    document.write(`You need ${numOfGallons} gallons to cover ${sqrFt} square feet.`);    
}

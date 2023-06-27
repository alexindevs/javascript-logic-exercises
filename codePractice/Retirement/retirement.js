var age = prompt("What's your age?");
let retirementAge = prompt("What age woukd you like to retire at?");

let yearsTillRetirement = retirementAge - age;

let date = new Date();

let thisYear = date.getFullYear();

let retirementYear = parseFloat(thisYear) + parseFloat(yearsTillRetirement);


if (yearsTillRetirement > 0) {
    document.write(`You have ${yearsTillRetirement} years till you retire. <br>` + "\n");
    document.write(`It's ${thisYear} so you can retire in ${retirementYear}.`);
} else {
    document.write("You should have retired already!");
}



let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let employeeID = prompt("Enter your employee ID (format: AA-1234):");
let zipcode = prompt("Enter your ZIP code:");

if (firstName.length < 2) {
  document.write(`${firstName} is not a valid first name. It is too short.` + "<br>");
} else if (lastName.length < 2) {
  document.write("Last name must be at least two characters long. What last name is two characters long though? Oh, my coding teacher, Angela Yu! I love her so much!<br>");
} else if (!/^[A-Z]{2}-\d{4}$/.test(employeeID)) {
  document.write("Employee ID must be in the format AA-1234.  <br>");
} else if (isNaN(zipcode)) {
  document.write("ZIP code must be a number. <br>");
} else {
    document.write("There were no errors found.")
}

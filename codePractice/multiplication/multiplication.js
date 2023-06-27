let table = document.createElement("table");

for (let i = 1; i <= 12; i++) {
  let row = document.createElement("tr");

  for (let j = 1; j <= 12; j++) {
    
    let cell = document.createElement("td");
    cell.classList.add("cell");

    let product = i * j;
    cell.textContent = product;
    row.appendChild(cell);
  }

  // Add the row to the table
  table.appendChild(row);
}

// Add the table to the document body
document.body.appendChild(table);

// script.js

function insert_Row() {
    let table = document.getElementById("sampleTable");
    
    // Insert a new row at the top of the table
    let newRow = table.insertRow(0);

    // Insert two cells in the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set the content of the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

// Basic 3 | Table Creation

// Create a JavaScript program that will boost the creation of a HTML table. Instead of writing many <td> or <tr> tags, create a function that accepts two arguments, one for number of columns and other for number of rows. Provide one button to the user labeled as "Create a table", after it clicks on it, prompt two windows, one for number of columns and another for number of rwos.

// For ex. If the User enters 3 rows and 4 columns, you should provide the following results:

function createTable() {

	var table = document.getElementById("output")

	var noRows = Number(prompt("How many rows?", "3"));
	var noColumns = Number(prompt("How many columns?", "4"));

	for (r=0; r<noRows; r++) {
		var row = table.insertRow(r);
		console.log(r);

		for (c=0; c<noColumns; c++) {
			console.log(c);
			var newCell = row.insertCell(c);
			newCell.innerHTML = "Row: "+r+" Cell: "+c;

		};

		

	};

	// tableText = rowEndText.join("<br>");
	// document.getElementById("output").innerHTML = tableText;


};
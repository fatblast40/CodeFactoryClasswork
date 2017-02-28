// Basic 3 | Table Creation

// Create a JavaScript program that will boost the creation of a HTML table. Instead of writing many <td> or <tr> tags, create a function that accepts two arguments, one for number of columns and other for number of rows. Provide one button to the user labeled as "Create a table", after it clicks on it, prompt two windows, one for number of columns and another for number of rwos.

// For ex. If the User enters 3 rows and 4 columns, you should provide the following results:

function createTable() {

	var rows = Number(prompt("How many rows?", "3"));
	var columns = Number(prompt("How many columns?", "4"));

	var tableText = "";
	var rowEndText = "</tr>";



	for (r=0; r>columns; r++) {
		var rowStartText = "<tr id=\"row"+r+"\">";
		tableText = rowStartText.join("<br>");

		for (c=0; c>columns; c++) {
			var ColText = "<td>Row "+r+"<br> Column "+c+"</td>";
			tableText = rowStartText.join("<br>");

		};

		tableText = rowEndText.join("<br>");

	};

	document.getElementById("output").innerHTML = tableText;


};
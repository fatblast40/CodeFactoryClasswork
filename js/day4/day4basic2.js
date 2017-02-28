// Basic 2 | Truncate

// Create a truncate function that accepts two parameters. 1st parameters is a string and the 2nd is number of characters that should be truncated - shorten by cutting off the string from left to right.

// For ex. If we pass the following arguments in the function 1st argument = "I am a hero from World of Warcraft" and 2nd argument = "12", we should get just the string "I am a hero"


function truncate () {

	var sentence = prompt("Type a sentence", "This is a sample sentence.");
	var n = Number(prompt("How many characters do you want to truncate from this sentence?", "12"));

	var truncatedSentence = sentence.slice(0, n+1);
	document.getElementById("output").innerHTML = truncatedSentence

};

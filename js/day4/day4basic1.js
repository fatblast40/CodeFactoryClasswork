// Basic 1 | Reading Status

// Based on data stored within the library array, create a JavaScript program that will iterate through the array and will provide the output based on the reading status. If the user has read the book, print on the screen "Already read <name_of_the_book>, otherwise print "You still need to read <name_of_the_book>". Also make a clear graphical division between the both reading statuses.


var library = [
    { title: 'When Breath Becomes Air', author: 'Paul Kalanithi', readingStatus: true },
    { title: 'The Girls', author: 'Emma Cline', readingStatus: true },
    { title: 'The Nest', author: 'Cynthia', readingStatus: false },
    { title: 'The Crown', author: 'Kiera Cass', readingStatus: true },
    { title: 'Behind Closed Doors', author: 'B.A. Paris', readingStatus: false },
    { title: 'It Ends with Us', author: 'Colleen Hoover', readingStatus: true }
];



function readStatus () {

	var n = library.length;

	for (i=0 ; i<n ; i++) {

		if (library[i].readingStatus == true)
		document.write("Already read "+library[i].title+"<br>");

		if (library[i].readingStatus == false)
		document.write("You still need to read "+library[i].title+"<br>");

	} // end for loop

}



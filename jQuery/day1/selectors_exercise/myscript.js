// /*
//  * My jQuery selectors
//  *
//  * Apply a style such as a yellow background to the following elements.
//  * Test your selectors one at a time.
//  */

// // all elements
// $("*").css("background-color", "yellow");

// // all p elements
// $("p").css("background-color", "orange");

// // the p element with an ID of "intro"
// $("p#intro").css("background-color", "green");

// // all elements with a class of "note"
// $("*.note").css("background-color", "blue");

// // all DIV elements with a class of note
// $("*div.note").css("background-color", "red");

// // all p elements in the article element
// $("article > p").css("background-color", "pink");

// // the last element in any section which is a p tag
// $("p:last").css("background-color", "purple");

// // the first paragraph on the page
// $("p:first").css("background-color", "purple");

// all p elements which have a link
$("p:has(a)").css("background-color", "yellow")

// the second li within nested ul element
$("ul>li:nth-child(2)").css("background-color", "orange")

// every second and third p element
$("p:nth-child(2), p:nth-child(3)").css("background-color", "green")
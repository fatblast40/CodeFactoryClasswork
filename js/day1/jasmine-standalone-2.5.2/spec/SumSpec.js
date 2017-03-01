/* This is the file which will call our java script file that need to be tested.
* Each describe block is equivalent to one test case   
*     
*/   
//describe your code
describe("Sort", function(){

//what it should do
it("sort the cars alphabetically",function(){

//expect something
expect( sort( 0,1,2,3,4,5,6 ) )
    .toEqual( 1,6,5,4,0,3 );
});


//what it should do
it("should Return 9 for numbers 5 and 4",function(){

//expect something
expect( sum( 5, 4 ) )
    .toEqual( 9 );
});
});
/*
Note how describe + it reads like a sentence.
*/
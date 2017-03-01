/*            
* This is the file which will call our java script file that need to be tested.
* Each describe block is equivalent to one test case    
*     
// */
// //describe your code
// describe("Hello World", function(){
// //what it should do
// it("should Return Hello world", function(){
// //expect something
// expect(helloworld()).toEqual('Hello World');



describe("x", function() {


    it("should return weather is moderate", function() {


        expect(RandTemp(14)).toEqual("the weather is moderate");
    });
    
    it("should return weather is cold", function() {


        expect(RandTemp(4)).toEqual("The Weather is Cold");
    });
});

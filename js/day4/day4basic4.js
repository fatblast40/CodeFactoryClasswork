// Basic 4 | Hotels

// Create three objects of type Hotel. Each of them share some properties and methods. The user should be able to insert number of nights for each hotel and get back results, whether the hotel is available or not (for some number of nights). For each hotel generate random integers from 1-10 that stores available nights. If the the Hotel is available, provide a button labeled "I'll reserve" otherwise provide a message with text "Sorry, no free room for <number_of_nights> nights".

// Try to style the Program with the colors #003580, #FFFFFF and #E9F0FA so it can be embedded within real production website.


function hotelConstructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms
    this.booked = booked
    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}
var hotelNames = ["Hilton", "Marriott", "Starwood"];
var n = hotelNames.length;
var hotelList = [];

function createHotel(hotelNames) {

    for (i = 0; i < n; i++) {
        var roomsAvailable = Math.ceil(Math.random() * 10);
        var booked = Math.ceil(Math.random() * roomsAvailable);

        hotelList[i] = new hotelConstructor(hotelNames[i], roomsAvailable, booked);
    };
};

function checkHotels() {

    createHotel(hotelNames);

    var nightsInquiry = Number(prompt("How many nights would you like to book", "1"));

    var available = "I'll reserve";
    var unavailable = "Sorry, no free rooms for "+nightsInquiry+" nights";

	for (i=0; i<n; i++) {
        console.log(hotelList[i]);
        var vacancy = Boolean(hotelList[i].checkAvailability() > 0);
        var nightsAvailable = Math.ceil(Math.random() * 10);

        if (vacancy == true && nightsInquiry <= nightsAvailable) {
            document.getElementById("output").innerHTML = available;
        } else {
            document.getElementById("output").innerHTML = unavailable;
        };

    };

};

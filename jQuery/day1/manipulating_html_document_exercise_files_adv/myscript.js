// $(".notebook .product-image").css("background-color", "red");
// $(".phone .product-image").css("background-color", "green");
// $(".tablet .product-image").css("background-color", "blue");

// $(".phone:first").clone().insertAfter('.phone:first');
// $(".tablet:first").clone().insertAfter('.tablet:first');

$("body").prepend("<header> <nav> <form> <select id='prodCat'> <option value='all'>-");

$("#prodCat").append("<option value='phones'>phones");
$("#prodCat").append("<option value='tablets'>tablets");
$("#prodCat").append("<option value='notebooks'>notebooks");


var filterSelect = document.getElementById('prodCat');

filterSelect.select(function() {
	var prodSelect = $("#prodCat").val();
	
	filterProd(prodSelect);
});


filterSelect.onSelect = filterProd;

function filterProd(prodCase) {
	console.log("function running");
}

}

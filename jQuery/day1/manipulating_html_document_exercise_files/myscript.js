$(".notebook .product-image").css("background-color", "red");
$(".phone .product-image").css("background-color", "green");
$(".tablet .product-image").css("background-color", "blue");

$(".phone:first").clone().insertAfter('.phone:first');
$(".tablet:first").clone().insertAfter('.tablet:first');


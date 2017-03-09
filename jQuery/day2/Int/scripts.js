var products = [
	{Name: "DJI Mavic", Photo: "img/mavic.png", Price: "€900"},
	{Name: "DJI Phantom 4", Photo: "img/phantom4.png", Price: "€1,400"},
	{Name: "DJI Inspire", Photo: "img/inspire.png", Price: "€2,800"},
	{Name: "GoPro Karma", Photo: "img/karma.png", Price: "€1,100"}
];

for(i=0; i<products.length; i++) {
	var productBox = "<div class='productBox'> <figure> <img class='productImg' src='"+products[i].Photo+"' alt='Photo of "+products[i].Name+"'> </figure> <div class='productDetails'> <p class='productName'>"+products[i].Name+"</p> <p class='productPrice'>"+products[i].Price+"</p> </div> <div class='productFunctions'><button type='submit' value='addToCart'>Add to cart</button></div> </div>";
		$('#products').prepend(productBox);
}

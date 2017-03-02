

for (i=0; i<5; i++) {
	$("<div>").appendTo("article");
	};

var text = $("#msg[value]").val();

$("div").append(text);

$("div").addClass('box');

// for (i=0; i<5; i++) {
// 	$("article>div:nth-child(i)").offset({left:i*100});
// 	console.log();
// };

$(".box").map(function(i, elem) {
	return $(elem).offset({left: 100*i+100});
});

// $("div").offset({left:100});



$("form").remove();

$("form").submit(function(e) {

	e.preventDefault();
	


	

});
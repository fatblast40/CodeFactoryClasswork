// Events | Exercise 2 - Airplane

// Select the airplane element in the document, according to your mouse movements, the airplane should move (follow your cursor). The cursor should appear in the middle of the element. When it is clicked, the element should be dropped, fade out than fade in and stay where it is.

$(document).on('mousemove', function(e){
    $('#moveme').css({
       left:  e.pageX,
       top:   e.pageY
    });
});

$(document).click(function() {
    $(document).off("mousemove");
    $("#moveme").show().fadeOut("slow").fadeIn("fast");

});
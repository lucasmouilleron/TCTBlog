//------------------------------------------------------------------------------
// MAIN
//------------------------------------------------------------------------------
$(function() {
    var navOuterHeight = $("header nav").outerHeight();
    var navHeight = $("header nav").height();
    $(".navWrapper").height(navOuterHeight);
    $("body .container").waypoint({
        handler: function(direction) {
            if (direction === "down") {
                $("header nav").addClass("sticky");
                $("header nav").css({top: -navHeight, opacity: 0});
                $("header nav").animate({top: 0, opacity: 1}, 200);

            } else {
                $("header nav").fadeOut(300, function() {
                    $("header nav").removeClass("sticky");
                    $("header nav").show();
                });
            }
        },
        offset: navOuterHeight + 20
    });
});
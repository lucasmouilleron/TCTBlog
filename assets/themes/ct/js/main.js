//------------------------------------------------------------------------------
// MAIN
//------------------------------------------------------------------------------
$(function() {
    setupMenu();
});

//------------------------------------------------------------------------------
function setupMenu() {
    $("header nav").hover(function() {
        $("header nav.sticky").stop().animate({opacity: 1});
        $("header nav.sticky *").stop().animate({opacity: 1});
    }, function() {
        $("header nav.sticky").stop().animate({opacity: 0.7});
        $("header nav.sticky *").stop().animate({opacity: 0.7});

    });
    var navOuterHeight = $("header nav").outerHeight();
    var navHeight = $("header nav").height();
    $(".navWrapper").height(navOuterHeight);
    $("body .container").waypoint({
        handler: function(direction) {
            if (direction === "down") {
                $("header nav").addClass("sticky");
                $("header nav.sticky").css({opacity: 0.7});
                $("header nav.sticky *").css({opacity: 0.7});
                $("header nav").css({top: -navHeight});
                $("header nav").stop().animate({top: 0}, 200);

            } else {
                $("header nav").stop().fadeOut(300, function() {
                    $("header nav").removeClass("sticky");
                    $("header nav").show();
                    $("header nav *").css({opacity: 1});
                    $("header nav").css({opacity: 1});
                });
            }
        },
        offset: navOuterHeight + 20
    });
}
//------------------------------------------------------------------------------
// MAIN
//------------------------------------------------------------------------------
$(function() {
    setupMenu();
    setupLinks();
});

//------------------------------------------------------------------------------
function setupMenu() {
    /*$("header nav").hover(function() {
        $("header nav.sticky").animate({opacity: 1});
        $("header nav.sticky *").animate({opacity: 1});
    }, function() {
        $("header nav.sticky").animate({opacity: 1});
        $("header nav.sticky *").animate({opacity: 1});
    });*/
var navOuterHeight = $("header nav").outerHeight();
var navHeight = $("header nav").height();
$(".navWrapper").height(navOuterHeight);
$("body .container").waypoint({
    handler: function(direction) {
        if (direction === "down") {
            $("header nav").addClass("sticky");
                //$("header nav.sticky").css({opacity: 0.9});
                //$("header nav.sticky *").css({opacity: 0.9});
                $("header nav").css({top: -navHeight});
                $("header nav").animate({top: 0}, 200, function() {
                    $("header nav").css({top: 0});
                });

            } else {
                $("header nav").fadeOut(200, function() {
                    $("header nav").removeClass("sticky");
                    $("header nav").show();
                    //$("header nav *").css({opacity: 1});
                    //$("header nav").css({opacity: 1});
                });
            }
        },
        offset: navOuterHeight - 40
    });
}

//------------------------------------------------------------------------------
function copyToClipboard (label, text) {
  window.prompt (label, text);
}

//------------------------------------------------------------------------------
function setupLinks() {
    $('a[href^="http"]').each(function(){
        $(this).attr('target', '_blank');
    });
}


////////////////////////////////////////////////////////////////////////////////
// MAIN
////////////////////////////////////////////////////////////////////////////////
$(function() {
    setupMenu();
    setupLinks();
    setupImageRollOvers();
});

////////////////////////////////////////////////////////////////////////////////
function setupMenu() {
    var navOuterHeight = $("header nav").outerHeight();
    var navHeight = $("header nav").height();
    $(".navWrapper").height(navOuterHeight);
    $("body .container").waypoint({
        handler: function(direction) {
            if (direction === "down") {
                $("header nav").addClass("sticky");
                if($("header nav").data("background") != undefined) {
                    $("header nav").css("background-image","url('"+$("header nav").data("background")+"')");
                }
                $("header nav").css({top: -navHeight});
                $("header nav").animate({top: 0}, 200, function() {
                    $("header nav").css({top: 0});
                });

            } else {
                if($("header nav").data("background") != undefined) {
                    $("header nav").css("background-image","none");
                }
                $("header nav").fadeOut(200, function() {
                    $("header nav").removeClass("sticky");
                    $("header nav").show();
                });
            }
        },
        offset: navOuterHeight - 40
    });
}

////////////////////////////////////////////////////////////////////////////////
function copyToClipboard (label, text) {
  window.prompt (label, text);
}

////////////////////////////////////////////////////////////////////////////////
function setupLinks() {
    $('.container a[href^="http"]').each(function(){
        $(this).attr('target', '_blank');
    });
}

////////////////////////////////////////////////////////////////////////////////
function setupImageRollOvers() {
    $(".content-content a img").parent().addClass("a-with-img");
    $(".content-content a img").each(function() {
        $(this).after("<div class='hover'><div class='caption'><img src='/assets/themes/ct/images/share15.png'/><div>"+$(this).attr("alt")+"</div></div></div>");
    });
}
var menuToggled = 0;
var windowSm = $(window).width()<560 ? true : false;
var windowMd = $(window).width()>=560 && $(window).width()<800 ? true : false;
var windowLg = $(window).width()>=976 ? true : false;

function showMenu() {
    $("#menu").fadeIn("fast");
    $("#menu-toggler").css("background-color", "rgb(0, 0, 0, 0)");
    $(".menu-toggler-line:nth-child(1)").transition({rotate: "39deg"});
    $(".menu-toggler-line:nth-child(2)").animate({opacity: "0"}, "fast");
    $(".menu-toggler-line:nth-child(3)").transition({rotate: "-39deg"});
    menuToggled = 1;
}
function hideMenu() {
    $("#menu").fadeOut("fast");
    $("#menu-toggler").css("background-color", "rgb(0, 0, 0, 0.7)");
    $(".menu-toggler-line:nth-child(1)").transition({rotate: "0deg"});
    $(".menu-toggler-line:nth-child(2)").animate({opacity: "1"}, "fast");
    $(".menu-toggler-line:nth-child(3)").transition({rotate: "0deg"});
    menuToggled = 0;
}
function introAnime() {
    if (windowSm) {
        $("#main-img2").css("left", "-200px").css("top", "-100px");
        $("#main-img2").animate({
            top: "10",
            left: "-20", 
            opacity: "1"
        }, "slow");
    } else {
        $("#main-img2").animate({
            top: "10", 
            right: "-20",
            opacity: "1"
        }, "slow");
    }

    if (windowLg) {
        $("#main-img1").delay(700).animate({
            left: "0",
            opacity: "1"
        }, "slow");
        $("#main-content").delay(1900).animate({opacity: "1"}, "slow");
    } else {
        $("#main-content").delay(1000).animate({opacity: "1"}, "slow");
    }

}
    
$(document).ready(function(){
    introAnime();
    
    $("#menu-toggler").click(function() {
        if (menuToggled) {
            hideMenu();
        } else {
            showMenu();
        }
    });
    
    $(".nav-link").click(function() {
        if(windowSm) hideMenu();
    });
    
    if (windowSm) {
        $("#to-intro").click(function() {
            $("html").animate({ scrollTop: $("#intro").offset().top }, 1000);
        });

        $("#to-habits").click(function() {
            $("html").animate({ scrollTop: $("#habits").offset().top }, 1000);
        });

        $("#to-species").click(function() {
            $("html").animate({ scrollTop: $("#species").offset().top }, 1000);
        });
    } else {
        $("#to-intro").click(function() {
            $("html").animate({ scrollTop: $("#intro").offset().top-56 }, 1000);
        });

        $("#to-habits").click(function() {
            $("html").animate({ scrollTop: $("#habits").offset().top-56 }, 1000);
        });

        $("#to-species").click(function() {
            $("html").animate({ scrollTop: $("#species").offset().top-56 }, 1000);
        });
    }
    
    
    if (windowMd) {
        $("#habits .col-sm-6:nth-child(2)").addClass("col-sm-4");
        $("#habits .col-sm-6:nth-child(3)").addClass("col-sm-8");
        $("#habits .col-sm-6").removeClass("col-sm-6");
    }
});

$(window).resize(function() {
    windowSm = $(window).width()<560 ? true : false;
    if (windowSm) {
        $("#menu").css("display", "none");
        if (menuToggled) {
            hideMenu();
        }
    } else {
        $("#menu").css("display", "block");
    }
});

    
var scTop = 0;
var secLeave = 0;
var secNow = 0;


$(window).scroll(function() {
    if (!windowSm) {
        scTop = $("html").scrollTop();
        
        if (scTop < $("#intro").offset().top-56) {
            secNow = 0;
        }
        if (scTop >= $("#intro").offset().top-56) {
            secNow = 1;
        }
        if (scTop >= $("#habits").offset().top-56) {
            secNow = 2;
        }
        if (scTop >= $("#species").offset().top-56) {
            secNow = 3;
        }
        
        if (secLeave != secNow) {
            if (secLeave == 1) {
                $("#to-intro + .nav-underline").animate({width: "0px"}, "middle");
            }
            if (secLeave == 2) {
                $("#to-habits + .nav-underline").animate({width: "0px"}, "middle");
            }
            if (secLeave == 3) {
                $("#to-species + .nav-underline").animate({width: "0px"}, "middle");
            }
            
            if (secNow == 1) {
                $("#to-intro + .nav-underline").animate({width: "70%"}, "middle");
            }
            if (secNow == 2) {
                $("#to-habits + .nav-underline").animate({width: "70%"}, "middle");
            }
            if (secNow == 3) {
                $("#to-species + .nav-underline").animate({width: "70%"}, "middle");
            }
            
            secLeave = secNow;
        }
    }
});
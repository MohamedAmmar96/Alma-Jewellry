$(window).on('load', function() {

    $(".loading-overlay .loading-overlay-box").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})


var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();



$(document).ready(function() {


    // This is to Open Language menu in large Screens
    if (($(window).width() >= 992)) {
        $(".page-language .lang").click(function() {
            $(".lang-back").fadeIn(300);
        });
        $(".page-language .lang").click(function() {
            $(".page-language .lang").addClass("rotate");
            $(".page-language .lang-list").slideDown(300);
        });
        $(".lang-back").click(function() {
            $(".lang-back").fadeOut(300);
        });
        $(".lang-back").click(function() {
            $(".page-language .lang").removeClass("rotate");
            $(".page-language .lang-list").slideUp(300);
        });
    }
    if (($(window).width() <= 991)) {
        $(".page-language .lang").click(function() {
            $(".page-language .lang").toggleClass("rotate");
            $(".page-language .lang-list").slideToggle(300);
        });
    }

    //This is to Open Search Box 
    $(".search .search-icon").click(function() {
        // $("body").addClass("overflow")
        $(".search .search-icon").removeClass("open-search")
        $(".search .search-icon").addClass("close-search")
        $(".search-box").addClass("search-open");
        $(".overlay-box").fadeIn(500);
    });

    $(".overlay-box").click(function() {
        $("body").removeClass("overflow")
        $(".search .search-icon").addClass("open-search")
        $(".search .search-icon").removeClass("close-search")
        $(".search-box").removeClass("search-open");
        $(".overlay-box").fadeOut(500);
    });


    //This is to Open Config Box
    $(".terms .config").click(function() {
        $(".overlay-box2").fadeIn(300);
    });
    $(".terms .config").click(function() {
        $(".config .config-list").slideDown(300);
    });
    $(".overlay-box2").click(function() {
        $(".overlay-box2").fadeOut(300);
    });
    $(".overlay-box2").click(function() {
        $(".config .config-list").slideUp(300);
    });

    //Main Slider Carousel
    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        rtl: true,
        margin: 20,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    });



    $('.sub-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        // stagePadding: 10,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            480: {
                items: 2,
                nav: false,
                dots: true,
                loop: true
            },
            720: {
                items: 3,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 4,
                nav: false,
                dots: true,
                loop: true
            },
            1200: {
                items: 4,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });

    //This is to Open Side Menu in Small Screens
    $(".menu .menu-icon").click(function() {
        $("body").addClass("overflow")
        $(".menu .menu-icon").removeClass("open-menu")
        $(".menu .menu-icon").addClass("close-menu")
        $(".mo-nav").addClass("menu-open");
        $(".overlay-box3").fadeIn(500);
    });

    $(".close,.overlay-box3").click(function() {
        $("body").removeClass("overflow")
        $(".menu .menu-icon").addClass("open-menu")
        $(".menu .menu-icon").removeClass("close-menu")
        $(".mo-nav").removeClass("menu-open");
        $(".overlay-box3").fadeOut(500);
    });

});
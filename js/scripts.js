/*-----------------------------------------------------------------------------------

    Theme Name: Aeon
    Description: The Multi-Purpose Onepage Template
    Author: ui-themez
    Author URI: http://themeforest.net/user/ui-themez
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";

    var wind = $(window);



    /* ----------------------------------------------------------------
                    [ Navbar ( scrollIt ) ]
    -----------------------------------------------------------------*/

    $.scrollIt({
        upKey: 38,                // key code to navigate to the next section
        downKey: 40,              // key code to navigate to the previous section
        easing: 'swing',          // the easing function for animation
        scrollTime: 600,          // how long (in ms) the animation takes
        activeClass: 'active',    // class given to the active nav element
        onPageChange: null,       // function(pageIndex) that is called when page is changed
        topOffset: -70            // offste (in px) for fixed top navigation
    });



    /* ----------------------------------------------------------------
                    [ Navbar ( Change Background & Logo ) ]
    -----------------------------------------------------------------*/

    wind.on("scroll", function () {

        var bodyScroll = wind.scrollTop(),
            navbar = $(".navbar"),
            logo = $(".change .logo> img");

        if (bodyScroll > 100) {

            navbar.addClass("nav-scroll");
            logo.attr('src', 'img/logo-dark.svg');

        } else {

            navbar.removeClass("nav-scroll");
            logo.attr('src', 'img/logo-light.svg');
        }
    });


    // close navbar-collapse when a  clicked
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });



    /* ----------------------------------------------------------------
                    [ Progress Bar ]
    -----------------------------------------------------------------*/

    wind.on('scroll', function () {
        $(".skill-progress .progres").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });


    /* ----------------------------------------------------------------
                [ Sections Background Image With Data ]
-----------------------------------------------------------------*/

    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    /* ----------------------------------------------------------------
                [ Owl-Carousel ]
    -----------------------------------------------------------------*/

    // Testimonials owlCarousel
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<span class='ti-arrow-left'></span>", "<span class='ti-arrow-right'></span>"],
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 500
    });

    /* ----------------------------------------------------------------
                [ magnificPopup ]
    -----------------------------------------------------------------*/

    $('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    /* ----------------------------------------------------------------
                [ countUp ]
    -----------------------------------------------------------------*/

    $('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });


    /* ----------------------------------------------------------------
                    [ parallaxie]
    -----------------------------------------------------------------*/

    // parallaxie
    $('.parallaxie').parallaxie({
        speed: 0.6,
        size: "cover"
    });


});



// === window When Loading === //

$(window).on("load", function () {

    var wind = $(window);

    /* ----------------------------------------------------------------
                    [ Preloader ]
    -----------------------------------------------------------------*/

    $(".loading").fadeOut(500);


    /* ----------------------------------------------------------------
                    [ isotope Portfolio ( Masonery Style ) ]
    -----------------------------------------------------------------*/

    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });


    // contact form validator
    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    });

});

// Header 
$(window).scroll(function () {

    var header = $(".header").outerHeight();
    var scroll = $(window).scrollTop();

    $(".header .caption").css("opacity", 1 - scroll / header);

});

// Slider 
$(document).ready(function() {

    var owl = $('.header .owl-carousel');

    // Slider owlCarousel
    $('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        $('h6').removeClass('animated fadeInLeft');
        $('h1').removeClass('animated fadeInRight');
        $('p').removeClass('animated fadeInUp');
        $('.butn').removeClass('animated zoomIn');
        $('.owl-item').not('.cloned').eq(item).find('h6').addClass('animated fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});



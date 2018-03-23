$(function () {
    "use strict";


    /***************** Header Search ******************/
    $('.search').click(function (e) {
        if (jQuery('.search-btn').hasClass('fa-search')) {
            jQuery('.search-open').fadeIn(500);
            jQuery('.search-btn').removeClass("fa-search").addClass("fa-times");
        } else {
            jQuery('.search-open').fadeOut(500);
            jQuery('.search-btn').removeClass("fa-times").addClass("fa-search");
        }
    });




    /*============================================
     Counter
     ==============================================*/
    if ($('.count').length)
    {
        $('.count').counterUp({
            delay: 10,
            time: 1000
        });
    }



    /*============================================
     Tooltip
     ==============================================*/
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });


    /*============================================
     MagnificPopup Bar
     ==============================================*/
    $('.mp-lightbox').magnificPopup({
        removalDelay: 300,
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-fade',
        image: {
            verticalFit: true
        },
        gallery: {
            enabled: true
        }
    });

    /***************** Testimonial 2******************/
    $('#testimonial-slider').owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        pagination: true,
        autoPlay: true
    });

    /***************** Brand******************/
    $('#owl-clients').owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        pagination: true,
        autoPlay: true
    });

    /***************** Owl Carousel Blog ******************/
    $('#owl-blog').owlCarousel({
        navigation: false, // Show next and prev buttons
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: true

    });

});

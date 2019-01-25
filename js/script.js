/* counter plugin */
 $('.counter').counterUp({
                delay: 10,
                time: 3000
            });
/* counter plugin */
/* magnific popup */
 $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        },
    });
/* magnific popup */
/* slick slider */
   $('.slick').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
    });
 /* slick slider */
 /* owl carousel */
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
 /* owl carousel */
 
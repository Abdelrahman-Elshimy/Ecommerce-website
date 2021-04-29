$(function () {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 3500,
        animateOut: "slideOutDown",
        animateIn: "slideInDown",
    });
    new WOW().init();

    var scroll_top = 0;
    var topH = $('.top_bar').innerHeight();
    // height of slider
    $('.home-demo .item').height($(window).innerHeight() - topH);
    $('.home-demo .item .content-image img').height($(window).innerHeight() - topH);
    // fixed navbar
    $(window).scroll(function () {
        scroll_top = $(this).scrollTop();
        if (scroll_top > 100) {
            $('#nav_shop').css({
                'background-color': '#fff',
                'box-shadow': '1px 1px 5px #ccc',
                'top': -topH,
            });
        }
        else {
            $('#nav_shop').css({
                'background-color': 'transparent',
                'box-shadow': 'none',
                'top': 0
            });
        }
        console.log("goog");
    });

});

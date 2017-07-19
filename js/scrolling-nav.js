jQuery(document).ready(function ($) {

    $("#scroll-top").hide();

    $('#scroll-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });
//jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 400) {
            //$(".fixed-top").addClass("top-nav-collapse");
            $(".fixed-top").addClass("scroll-navbar");
            $('#scroll-top').fadeIn();
        } else {
            //$(".fixed-top").removeClass("top-nav-collapse");
            $(".fixed-top").removeClass("scroll-navbar");
            $('#scroll-top').fadeOut();
        }
    });

});

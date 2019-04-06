$(document).ready(function() {
    // Enables tooltip usage
    $("[data-toggle='tooltip']").tooltip({
        trigger: 'hover'
    });

    //Collapse navbar when a link is clicked
    $('.navbar-collapse a').click(function(e) {
        if ($('.navbar-toggler').css('display') == 'block' && !$(this).siblings().length) {
            $('.navbar-collapse').collapse('toggle');
        }
    });

    // Enables smooth scroll on navbar and footer links
    $('.navbar a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        }
                        else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    // Hide "back to top" button until near bottom of page
    var btn = $("#top-button");

    $(window).scroll(function() {
        if ($(window).scrollTop() > 800) {
            btn.addClass('show');
        }
        else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '800');
    });
    
    // Toggle modal on validation
    $("#validate-form").submit(function(event) {
        $("#contact-modal").modal("toggle");
        event.preventDefault();
    });
});



jQuery(function ($) {
    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------
    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // Initialize AOS Animations
    // --------------------------------------------------------------------
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // --------------------------------------------------------------------
    // Smooth Scrolling for Navigation Links
    // --------------------------------------------------------------------
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000, 'easeInOutQuart');
        }
    });

    // --------------------------------------------------------------------
    // Navbar Background on Scroll
    // --------------------------------------------------------------------
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        
        if (scroll >= 100) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // --------------------------------------------------------------------
    // Active Navigation Highlighting
    // --------------------------------------------------------------------
    $(window).on('scroll', function () {
        var scrollDistance = $(window).scrollTop();
        
        $('section').each(function (i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    });

    // --------------------------------------------------------------------
    // Typing Effect for Hero Title (Optional)
    // --------------------------------------------------------------------
    function typeWriter(element, text, speed = 100) {
        var i = 0;
        element.html('');
        
        function type() {
            if (i < text.length) {
                element.html(element.html() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Uncomment to enable typing effect
    // setTimeout(function() {
    //     typeWriter($('.hero-title'), 'Jack King');
    // }, 500);

    // --------------------------------------------------------------------
    // Parallax Effect for Hero Background
    // --------------------------------------------------------------------
    $(window).on('scroll', function () {
        var scrolled = $(window).scrollTop();
        var parallax = $('.hero-background');
        var speed = 0.5;
        
        parallax.css('transform', 'translateY(' + (scrolled * speed) + 'px)');
    });

    // --------------------------------------------------------------------
    // Enhanced Dropdown Interactions
    // --------------------------------------------------------------------
    $('.dropdown-toggle').on('mouseenter', function () {
        $(this).next('.dropdown-menu').addClass('show');
    });

    $('.dropdown').on('mouseleave', function () {
        $(this).find('.dropdown-menu').removeClass('show');
    });

    // --------------------------------------------------------------------
    // Card Hover Effects
    // --------------------------------------------------------------------
    $('.research-area, .skill-category, .achievement-item').on('mouseenter', function () {
        $(this).addClass('hovered');
    }).on('mouseleave', function () {
        $(this).removeClass('hovered');
    });

    // --------------------------------------------------------------------
    // Timeline Animation on Scroll
    // --------------------------------------------------------------------
    function animateTimeline() {
        $('.timeline-item').each(function (index) {
            var $this = $(this);
            var delay = index * 200;
            
            setTimeout(function () {
                $this.addClass('animate-in');
            }, delay);
        });
    }

    // Trigger timeline animation when in view
    $(window).on('scroll', function () {
        var timelineTop = $('.timeline').offset().top;
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop + windowHeight > timelineTop) {
            animateTimeline();
        }
    });

    // --------------------------------------------------------------------
    // Contact Form Enhancement (if you add one later)
    // --------------------------------------------------------------------
    // $('.contact-form').on('submit', function(e) {
    //     e.preventDefault();
    //     // Add your form handling logic here
    // });

    // --------------------------------------------------------------------
    // Scroll to Top Button (Optional)
    // --------------------------------------------------------------------
    // Add this HTML if you want a scroll-to-top button:
    // <button id="scrollToTop" class="scroll-to-top-btn">↑</button>
    
    // $(window).on('scroll', function() {
    //     if ($(this).scrollTop() > 300) {
    //         $('#scrollToTop').fadeIn();
    //     } else {
    //         $('#scrollToTop').fadeOut();
    //     }
    // });
    
    // $('#scrollToTop').on('click', function() {
    //     $('html, body').animate({scrollTop: 0}, 800);
    // });

}); // JQuery end
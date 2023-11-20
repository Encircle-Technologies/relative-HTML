$(document).ready(function ($) {


    // Sticky Header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.header').addClass('is-sticky');
        } else {
            $('.header').removeClass('is-sticky');
        }
    });

    // Search box
    $(".btn-search").click(function () {
        $(".search-bar").toggleClass("active");
    });
    $(".btn-close-search").click(function () {
        $(".search-bar").removeClass("active");
    });

    /*Mobile Menu*/
    $(".navbar-toggler").click(function () {
        $('.navbar').toggleClass('active');
        $('body').toggleClass('menu-open');
    });
    $(".navbar").menumaker({
        title: "Menu",
        format: "multitoggle"
    });
    
    //Badge slider
    if($(".badge").length) {
        var badgeSlide = new Swiper(".badge-slider", {
            spaceBetween: 28,
            centeredSlides: !0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: !1
            },
            breakpoints: {
                320: {
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 1,
                    spaceBetween: 28
                },
                375: {
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween: 28
                },
                640: {
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 2.5,
                    spaceBetween: 28
                },
                768: {
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 2.5,
                    spaceBetween: 28
                },
                992: {
                    centeredSlides: true,
                    loop: true,
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1200: {
                    centeredSlides: !1,
                    loop: !1,
                    slidesPerView: 5,
                    spaceBetween: 40
                },
                1366: {
                    centeredSlides: !1,
                    loop: !1,
                    slidesPerView: 5,
                    spaceBetween: 40
                }
            }
        });
    }
    // accordion Start
    if($('.faq, .faq_wrapper').length) {
        $(function () {
            $(".accordion-content:not(:first-of-type)").css("display", "none");
            $(".js-accordion-title:first-of-type").addClass("open"); 
            $(".js-accordion-title").click(function () {
                $(".open").not(this).removeClass("open").next().slideUp(500);
                $(this).toggleClass("open").next().slideToggle(500);
            });
        });
    }
    // accordion End

    // Tabs
    if($('.ecoTours_single').length) {
        $('.tabs>ul').on('click', 'li', function(){
            $('li').removeClass('active');
            $('.tabs>ul').toggleClass('expanded');
            $(this).addClass('active');
            var tab_id = $(this).attr('data-tab');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $('#'+tab_id).addClass('current');
        });
    }
});


// Responsive menu start
(function ($) {
    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                format: "dropdown",
                sticky: false
            }, options);
        return this.each(function () {
            $(this).find(".navbar-toggler").on('click', function () {
                $(this).toggleClass('menu-opened');
                var mainmenu = $(this).next('#menu-main-menu');
                if (mainmenu.hasClass('open')) {
                    mainmenu.slideToggle().removeClass('open');
                } else {
                    mainmenu.slideToggle().addClass('open');
                    if (settings.format === "dropdown") {
                        mainmenu.find('#menu-main-menu').show();
                    }
                }
            });
            cssmenu.find('li ul.sub-menu').parent().addClass('has-sub');
            function multiTg() {
                cssmenu.find(".has-sub").prepend('<span class="submenu-button"><svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.50495 5.64494L0.20524 1.3451C-0.0684144 1.07157 -0.0684144 0.628106 0.20524 0.354717C0.478651 0.0813054 0.922098 0.0813054 1.19549 0.354717L5.00007 4.15941L8.80452 0.354827C9.07805 0.081416 9.52145 0.081416 9.79486 0.354827C10.0684 0.628238 10.0684 1.07168 9.79486 1.34521L5.49508 5.64505C5.35831 5.78175 5.17925 5.85003 5.00009 5.85003C4.82085 5.85003 4.64165 5.78162 4.50495 5.64494Z"/></svg></span>');
                cssmenu.find('.submenu-button').on('click', function () {
                    if ($(this).hasClass('submenu-opened')) {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');

                    } else {
                        cssmenu.find('.submenu-button').removeClass('submenu-opened');
                        $(this).addClass('submenu-opened');

                    }

                    if ($(this).siblings('ul').hasClass('open')) {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                    } else {
                        cssmenu.find('.submenu-button').siblings('ul').removeClass('open');
                        cssmenu.find('.submenu-button').siblings('a').removeClass('active');
                        $(this).siblings('ul').addClass('open');
                        $(this).siblings('a').addClass('active');
                    }

                });
                cssmenu.find('a').on('click', function () {
                    if ($(this).attr('href') == '#') {

                        $(this).siblings('span').toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this).siblings('ul').removeClass('open');
                        } else {
                            $(this).siblings('ul').addClass('open');
                        }
                    }
                });
            };
            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
            if (settings.sticky === true) cssmenu.css('position', 'fixed');
            function resizeFix() {
                var mediasize = 1199.9;
                if ($(window).width() > mediasize) {
                    cssmenu.find('ul').addClass('open');
                }
                if ($(window).width() <= mediasize) {
                    cssmenu.find('ul').removeClass('open');
                }
            };
            resizeFix();
            return $(window).on('resize', resizeFix);
        });
    };

})($);
// Responsive menu end
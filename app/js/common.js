$(function(){
    $('#my-menu').mmenu({
       extensions: [
           'widescreen',
           'theme-black',
           'effect-menu-slide',
           'pagedim-black',
        ],
        navbar: {
            title: '<img src="img/logo-1.svg" alt="Салон красоты Smitler">'
        },
        offCanvas: {
            position: 'right'
        }
    });
    var apiMmenu = $('#my-menu').data('mmenu');
    apiMmenu.bind('opened', function(){
        $('.hamburger').addClass('is-active');
    }).bind('closed', function(){
        $('.hamburger').removeClass('is-active');
    })
    
    /*$('.carousel-services').on('initialized.owl.carousel', function(){
        setTimeout(
            function(){
                carouselService();
            },100);
    })*/
    $('.carousel-services-composition .h3').each(function(){
        $(this).html($(this).html().replace(/(\S+)\s*$/,'<span>$1</span>'))
    })
    $('section .h2').each(function(){
        $(this).html($(this).html().replace(/^(\S+)/,'<span>$1</span>'))
    })

    $('.carousel-services').owlCarousel({
        loop: false,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>','<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }

    });

    function carouselService(){
        $('.carousel-services-item').each(function (){
                var contentHeight = $(this).find('.carousel-services-content').outerHeight();
                $(this).find('.carousel-services-image').css('min-height',contentHeight);
        })
    };
    
    // resize Window
    function onResize(){
        $(".carousel-services-content").equalHeights();
        carouselService();
    }onResize();
    window.onresize = onResize;
});
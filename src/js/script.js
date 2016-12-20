(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").css({"opacity": "0", "z-index": "-1"});
                $(tabs).children("div").children("div").eq(i).css({"opacity": "1", "z-index": "1"});
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }

            showPage(0);

            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);


$(document).ready(function() {
    $('.js-slider-products').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-fragmented-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 681,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-slider-banners').slick({
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 681,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-product-feedback__slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.js-items-slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<div class="items-next items-arrow"></i><span>Next</span><i class="icon icon-arrow-right"></div>',
        prevArrow: '<div class="items-prev items-arrow"><i class="icon icon-arrow-left"></i><span>PREVIOUS</span></div>',
    });
    $(".button-collapse").sideNav({
        draggable: false
    });
    $(".tabs").lightTabs();
    $(".thumbs img").click(function() {
        event.preventDefault();
        var block = $(".demo-trigger");
        var image = $(this).data("image-normal");
        var zoom = $(this).data("image-large");
        block.attr("src", image);
        block.attr("data-zoom", zoom);
        new Drift(demoTrigger, {
            paneContainer: paneContainer,
            inlinePane: false
        });
    });


    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    jQuery('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = jQuery(this).attr('href');

        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();

            // Add active class to section title
            jQuery(this).addClass('active');
            // Open up the hidden content panel
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

    //truncates
    function truncate(html, lenght) {
       html.each(function(){
           var original_text = $(this).text();
           if (original_text.length > lenght) {
               var truncated_text = $.trim(original_text).substring(0, lenght).split(" ").slice(0, -3).join(" ") + "...";
           }
           $(this).html(truncated_text);
        });
    }
    truncate($('.js-truncate-product-name'), 66);
    if ($( window ).width() < 681) {
        truncate($('.js-truncate-product-name'), 40);
    }
    //truncates end


    if ($( window ).width() < 681) {
        var divs = $(".products__wrapper > .item-card");
        for(var i = 0; i < divs.length; i+=2) {
            divs.slice(i, i+2).wrapAll("<div class='slide'></div>");
        }
        $('.products__wrapper').addClass('js-items-slider items-slider');
        $('.js-items-slider').slick({
            dots: false,
            arrows: true,
            infinite: false,
            swipe: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: '<div class="items-next items-arrow"></i><span>Next</span><i class="icon icon-arrow-right"></div>',
            prevArrow: '<div class="items-prev items-arrow"><i class="icon icon-arrow-left"></i><span>PREVIOUS</span></div>',
        });
    }
    $('a.btn--to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
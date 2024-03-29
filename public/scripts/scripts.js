$(document).ready(function(){

    $(".events-item").mouseenter(function(){
        $(".events-description").stop().slideUp("slow");
        $(this).find(".events-description").stop().slideDown("slow");
    })

    $('.banners').slick({
        arrows: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: "<button class='prev-arrow'></button>",
        nextArrow: "<button class='next-arrow'></button>",
        dots: false
    });

    $('.reviews .container').slick({
        prevArrow: "<button class='prev-arrow'></button>",
        nextArrow: "<button class='next-arrow'></button>",
        dots: true
    })

    $('.counter').counterUp({
        delay: 10,
        time: 1000,
        offset: 70,
        beginAt: 100,
        formatter: function (n) {
          return n.replace(/,/g, '.');
        }
    });

});
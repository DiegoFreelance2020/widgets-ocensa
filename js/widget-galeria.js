$(document).ready(function(){
    $('.oc-slick-galeria').slick({
        slidesToShow: 1,
        prevArrow:
        "<img src='img/slick-arrow-left-02.svg' class='custom-slick-arrow arrow-left'>",
        nextArrow:
        "<img src='img/slick-arrow-right-02.svg' class='custom-slick-arrow arrow-right'>",
        arrows: false,
        dots: true,
        infinite: false,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    })
})
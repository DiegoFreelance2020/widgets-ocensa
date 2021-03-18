$(document).ready(function() {
    $('.oc-slick-calendar').slick({
        slidesToShow: 1,
        prevArrow: "<img src='../img/slick-arrow-left.svg' class='custom-slick-arrow arrow-left'>",
        nextArrow: "<img src='../img/slick-arrow-right.svg' class='custom-slick-arrow arrow-right'>"
    })

    $('.oc-slick-agenda').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        dots: true,
        verticalSwiping: true,
        infinite: false
    })

    $('.oc-slick-notices').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        dots: true,
        verticalSwiping: true,
        infinite: false
    })

    $('.oc-slick-event-info').slick({
        slidesToShow: 1,
        vertical: true,
        arrows: false,
        dots: true,
        verticalSwiping: true,
        infinite: false
    })
})
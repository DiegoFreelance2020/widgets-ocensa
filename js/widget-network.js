$(document).ready(function() {
    $('.oc-widget-network__content__slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                vertical: false,
                verticalSwiping: false
              }
            }
        ]
    })

    $('.oc-widget-network__content__buttons .oc-btn').click(function(e) {
        e.preventDefault()
        const target = $(this).attr('data-target')
        $('.oc-widget-network__content__buttons .oc-btn').removeClass('oc-btn-active')
        $('.oc-widget-network__content__buttons .oc-btn').addClass('oc-btn-inactive')
        $(this).removeClass('oc-btn-inactive')
        $(this).addClass('oc-btn-active')
        $('.oc-widget-network__content__panel').slideUp()
        $(target).slideDown()
        $(target).find('.oc-widget-network__content__slider').slick('refresh');
    })
})
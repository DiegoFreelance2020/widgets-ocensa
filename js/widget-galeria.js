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

    $('.oc-slick-wdg-galeria').slick({
        prevArrow:
        "<img src='img/img-widget-galeria/icon/arrow-left-blue.svg' class='custom-slick-arrow arrow-left'>",
        nextArrow:
        "<img src='img/img-widget-galeria/icon/arrow-right-blue.svg' class='custom-slick-arrow arrow-right'>",
        dots: true,
        responsive: [
            {
                breakpoint: 575.98,
                settings: {
                    arrows: false
                }
            }
        ]
    })

    $('.comment-user__input').focus(function() {
        $('.oc-btn-submit').show()
        $('.comment-user__input').css('max-height', '50px')
    })

    $('.comment-user__input').focusout(function() {
        $('.oc-btn-submit').hide()
        $('.comment-user__input').css('max-height', '15px')
    })

    $('.oc-widget-galeria__link').click(function(e) {
        let target = $(this).attr('data-widget')
        $(target).addClass('gallery-active')

        $('.oc-box-list').fadeIn()
    })

    $('.galeria-close-button').click(function(e) {
        e.preventDefault()
        $('.contenedor-widget-galeria-foto').removeClass('gallery-active')
        
    })

    if(screen.width > 575.98){
        $('.oc-btn-share').click(function(e) {
            e.preventDefault()
            let item = $(this).parent().parent()
            let list = $(this).parent()
            list.addClass('share-active')
            let target = $(this).attr('data-target')
            $(item).find('.oc-box-list').fadeOut()
            $(target).fadeIn()
        })
    
        $('.oc-btn-comments').click(function(e) {
            e.preventDefault()

            let item = $(this).parent().parent()
            let list = $(this).parent()
            list.removeClass('share-active')
            let target = $(this).attr('data-target')
            $(item).find('.oc-box-list').fadeOut()
            $(target).fadeIn()
        })
    } else {
        $('.oc-btn-share').click(function(e) {
            e.preventDefault()

            let target = $(this).attr('data-target')
            $('.oc-share-mobile').html('<div class="oc-text-right"><img src="img/img-widget-galeria/boton/boton–cerrar.svg" alt="" class="share-close-button"></div>')
            $('.oc-share-mobile').append($(target).html())
            $('.oc-share-mobile').slideDown()

            $('.oc-share-mobile .oc-widget-galeria-foto__content__right__list-share__user').click(function(e) {
                e.preventDefault()
                if($(this).hasClass('profile-active')){
                    $(this).removeClass('profile-active')
                } else {
                    $(this).addClass('profile-active')
                }
            })

            $('.share-close-button').click(function(e) {
                e.preventDefault()
                $('.oc-share-mobile').slideUp()
            })
        })
    }

    $('.oc-widget-galeria-foto__content__right__list-share__user').click(function(e) {
        e.preventDefault()
        if($(this).hasClass('profile-active')){
            $(this).removeClass('profile-active')
        } else {
            $(this).addClass('profile-active')
        }
    })
})
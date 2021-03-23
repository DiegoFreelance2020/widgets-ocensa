$(document).ready(function () {
  $(".oc-slick-calendar").slick({
    slidesToShow: 1,
    prevArrow:
      "<img src='img/slick-arrow-left.svg' class='custom-slick-arrow arrow-left'>",
    nextArrow:
      "<img src='img/slick-arrow-right.svg' class='custom-slick-arrow arrow-right'>",
  });

  $(".oc-slick-agenda").slick({
    slidesToShow: 1,
    vertical: true,
    arrows: false,
    dots: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });

  $(".oc-slick-notices").slick({
    slidesToShow: 1,
    vertical: true,
    arrows: false,
    dots: true,
    verticalSwiping: true,
    infinite: false,
  });

  $(".oc-slick-notices__mobile").slick({
    slidesToShow: 1,
    vertical: false,
    arrows: false,
    dots: true,
    verticalSwiping: false,
    infinite: false,
  });
  $(".oc-slick-event-info").slick({
    slidesToShow: 1,
    vertical: true,
    arrows: false,
    dots: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });

  $(".oc-slick-day").slick({
    slidesToShow: 1,
    vertical: true,
    arrows: false,
    dots: true,
    verticalSwiping: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          vertical: false,
          verticalSwiping: false,
        }
      }
    ]
  });

  $(".oc-slick-indicadores").slick({
    slidesToShow: 4,
    prevArrow:
      "<img src='img/slick-arrow-left-02.svg' class='custom-slick-arrow arrow-left'>",
    nextArrow:
      "<img src='img/slick-arrow-right-02.svg' class='custom-slick-arrow arrow-right'>",
    dots: true,
    infinite: false,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },

    ] 
  });



  if (screen.width > 480) {
    const slider = $(".on-scroll-v");

    slider.on("wheel", function (e) {
      e.preventDefault();

      if (e.originalEvent.deltaY < 0) {
        $(this).slick("slickNext");
      } else {
        $(this).slick("slickPrev");
      }
    });
  }

  $('#wg-calendario .btn-agenda').click(function(e) {
    e.preventDefault()
    $('.oc-widget-calendario__content').slideUp()
    $('#wdg-agenda').slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

  $('#wg-calendario .btn-calendario').click(function(e) {
    e.preventDefault()
    $('.oc-widget-calendario__content').slideUp()
    $('#wdg-calendario').slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

  $('#wdg-agenda .oc-content-agenda__item').click(function(e) {
    e.preventDefault()
    const target_day = $(this).attr('data-day')
    $('.oc-widget-calendario__content').slideUp()
    $(target_day).slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

  $('.content-day-events .oc-content-agenda__item').click(function(e) {
    e.preventDefault()
    const target_event = $(this).attr('data-event')
    $('.oc-widget-calendario__content').slideUp()
    $(target_event).slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

  $('.content-day-events .oc-btn-close').click(function(e) {
    e.preventDefault()
    $('.oc-widget-calendario__content').slideUp()
    $('#wdg-calendario').slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

  $('.content-day .oc-btn-close').click(function(e) {
    e.preventDefault()
    $('.oc-widget-calendario__content').slideUp()
    $('#wdg-agenda').slideDown()
    $('.oc-slick-theme').slick('refresh');
  })

});

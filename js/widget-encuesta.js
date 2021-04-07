const formVote = document.getElementById('form-vote')

if(formVote){
    const inputsCheck = document.querySelectorAll('input[name="info-red"]')
    formVote.addEventListener('change', function() {
        for (const input of inputsCheck) {
            input.parentElement.querySelector('.checkmark').classList.remove('active')
            if(input.checked == true){
                let label = input.parentElement
                let circleOpt = label.querySelector('.checkmark')
                circleOpt.classList.add('active')
            }
        }
    })
}



$(document).ready(function () {
    $(".oc-widget-encuesta__car").slick({
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

    $('.btn-widgets.vote').click(function(e){
        e.preventDefault()
        $(this).removeClass('btn-active')
        $('.btn-widgets.see-result').addClass('btn-active')

        $('.btn-widgets.see-result').click(function(e) {
            e.preventDefault()
            $('.oc-widget-encuesta__box').slideUp()
            $('.oc-widget-encuesta__car').slick('refresh');
            $('#wdg-results').slideDown()

            $('.oc-widget-encuesta__modal-close').click(function(e) {
                e.preventDefault()
                $('#wdg-results').slideUp()
                $('#wdg-question').slideDown()
            })
        })
    })
});
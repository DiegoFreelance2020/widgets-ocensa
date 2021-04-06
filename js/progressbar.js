function progressBar(barClass) {
    let items = document.querySelectorAll(barClass);
    console.log('Hola mundo');
    for(let item of items){
        let progress = item.dataset.progress
        item.style.width = `${progress}%`
        item.textContent = `${progress}%`
    }
  }
  
  progressBar('.oc-progress');

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
});
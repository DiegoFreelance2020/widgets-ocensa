function progressBar(barClass) {
    let items = document.querySelectorAll(barClass);
    for(let item of items){
        let progress = item.dataset.progress
        item.style.width = `${progress}%`
        item.textContent = `${progress}%`
    }
  }
  
  progressBar('.oc-progress');
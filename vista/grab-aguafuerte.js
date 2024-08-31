// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const galleryImages = document.querySelectorAll('.gallery-img');
  
    galleryImages.forEach(img => {
      img.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
      });
    });
  
    closeBtn.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });


  //SCROLL SUAVE


  $(document).ready(function () {
    // Selecciona todos los enlaces que comienzan con un "#"
    $('a[href^="#"]').on('click', function (event) {
        // Previene el comportamiento por defecto
        event.preventDefault();

        // Guarda el destino del enlace en una variable
        var target = this.hash;
        var $target = $(target);

        // Anima el scroll hacia el destino
        $('html, body').animate({
            scrollTop: $target.offset().top
        }, 800, function () {
            // Cambia el foco de la URL al destino
            window.location.hash = target;
        });
    });
});

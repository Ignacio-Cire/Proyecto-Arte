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
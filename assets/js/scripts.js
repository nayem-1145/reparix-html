document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('[data-background]').forEach(function(el) {
    el.style.backgroundImage = 'url("' + el.getAttribute('data-background') + '")';
  });



  const brandSlider = new Swiper('.rp_brand_slider', {
    slidesPerView: 'auto',
    spaceBetween: 16,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0, 
      disableOnInteraction: false,
    }
  });



});
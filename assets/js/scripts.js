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

  // const testimonialSlider = new Swiper('.rpt_box_slider', {
  //   slidesPerView: 1,
  //   spaceBetween: 30,
  //   loop: true,
  //   speed: 500,
  //   autoplay: {
  //     delay: 2500, 
  //     disableOnInteraction: false,
  //   }
  // });

  // const authorSlider = new Swiper('.rpt_author_slider', {
  //   slidesPerView: 5,
  //   spaceBetween: 30,
  //   loop: true,
  //   speed: 500,
  //   autoplay: {
  //     delay: 2500, 
  //     disableOnInteraction: false,
  //   }
  // });



  const authorSlider = new Swiper('.rpt_author_slider', {
    slidesPerView: "auto",
    spaceBetween: 40,
    loop: true,
    speed: 500,
    watchSlidesProgress: true, 
  });

  const testimonialSlider = new Swiper('.rpt_box_slider', {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: authorSlider,
    }
  });


  Fancybox.bind("[data-fancybox='video']", {
    Toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false
    }
  });




});
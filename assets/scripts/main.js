((SR) => {
  'use strict';

  /**
   * ScrollReveal configuration
   */
  SR({
    distance: '120px'
  });

  /**
   * Preloader
   */
  const preloader = document.getElementById('preloader');

  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Header background animation
   */
  const headerBgAnimation = () => {
    const scrollTop = window.pageYOffset,
      limit = document.getElementById('intro').offsetHeight;
    document.getElementById('header').style.backgroundColor = `rgb(37, 40, 41, ${scrollTop / limit})`;
  };
  window.addEventListener('load', () => headerBgAnimation());
  window.addEventListener('scroll', () => headerBgAnimation());

  /**
   * Animation
   */
  SR().reveal('.move-down', {
    origin: 'top'
  });

  SR().reveal('.move-up', {
    origin: 'bottom',
    delay: 500
  });

  SR().reveal('.move-to-left', {
    origin: 'right',
    delay: 500
  });

  SR().reveal('.move-to-right', {
    origin: 'left',
    delay: 500
  });

  /**
   * Swiper (carousel)
   */
  const maxScreenWidth = 767,
    screenWidth = window.outerWidth;
  let slideNumber = 3;

  if (screenWidth <= maxScreenWidth) slideNumber = 1;


  const swiper = new Swiper('.mySwiper', {
    slidesPerView: slideNumber,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

})(window.ScrollReveal);


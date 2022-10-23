
  var swiper = new Swiper(".news__swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let element = document.querySelector('.menu a');
element.onclick = function(){
    element.style='color:#fde700'
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

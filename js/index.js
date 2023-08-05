
new Swiper(".swiper",{
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination:{
    el: ".swiper-pagination",
    clickable: true
  },

  keyboard:{
    enabled: true,
    onlyInViewport:true,
  },

  mousewheel:{
    sensetivity:1,
    eventTarget: ".swiper"
  },
  slidesPerView: 1.2,

  centeredSlides: true,

  speed: 800,


});
let burgerbutton = document.querySelector(".header-burger");
let nav = document.querySelector(".nav");
let headerContainer = document.querySelector(".header-container");

burgerbutton.addEventListener("click",() =>{
  burgerbutton.classList.toggle("active");
  nav.classList.toggle("active");
  headerContainer.classList.toggle("active");

});
// burgerbutton.addEventListener("click",() =>{
//   nav.classList.toggle("active");
// });
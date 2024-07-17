$(document).ready(function(){
  $(".navi > li").mouseover(function(){
      // console.log(this);
      $(this).find(".submenu").stop().slideDown()
  }).mouseout(function(){
      $(this).find(".submenu").stop().slideUp()
  })
})

window.onload = function(){
  var swiper = new Swiper(".pics", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}



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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
}



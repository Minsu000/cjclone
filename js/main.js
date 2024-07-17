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

    // 모달창 부분=====================
    const body = document.querySelector("body")
    const modal = document.querySelector(".modal-wrap")
    const modalClose = document.querySelector(".modal-close")
    // isOpen 이라는 값에 따라 스크롤을 제어하는 함수
    function controlScroll(isOpen){
      if(isOpen){
        body.style.overflow = "hidden"; /*오버플로우는 스크롤이라는 의미*/
      }
      else{
        body.style.overflow = "auto";
      }
    }

    
    
    // 초기 모달창 상태 설정
    const isOpen = true;
    controlScroll(isOpen); /*위에서 기능하려면 여기서 한번 불러줘야 함*/
    
    modalClose.addEventListener("click",function(){
      modal.style.display = "none";
      // 모달창이 닫힐 때는 스크롤을 다시 활성화시킴
      controlScroll(false);
    });





}



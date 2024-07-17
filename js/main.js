$(document).ready(function(){
  $(".navi > li").mouseover(function(){
      // console.log(this);
      $(this).find(".submenu").stop().slideDown()
  }).mouseout(function(){
      $(this).find(".submenu").stop().slideUp()
  })

  $(".m_menu").click(function(){
		$(".Mobile_wrap").css({"display":"block"});
	});
		//닫기
	$(".menu_close").click(function(){
		$(".Mobile_wrap").css({"display":"none"});
	});

		//하위메뉴열기-고객센터
	$("div.Mobile_wrap > div > ul > li:nth-child(5) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(5) > ul").toggleClass("on_M");

	});
	
		//하위메뉴열기-포인트카드
	$("div.Mobile_wrap > div > ul > li:nth-child(8) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(8) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-이벤트/쿠폰
	$("div.Mobile_wrap > div > ul > li:nth-child(9) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(9) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-기프트카드
	$("div.Mobile_wrap > div > ul > li:nth-child(11) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(11) > ul").toggleClass("on_M");

	});
		//하위메뉴열기-나의 ONE
	$("div.Mobile_wrap > div > ul > li:nth-child(12) > a").click(function(){
		$("div.Mobile_wrap > div > ul > li:nth-child(12) > ul").toggleClass("on_M");

	});
});

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
    };

    
    
    // 초기 모달창 상태 설정
    const isOpen = true;
    controlScroll(isOpen); /*위에서 기능하려면 여기서 한번 불러줘야 함*/
    
    modalClose.addEventListener("click",function(){
      modal.style.display = "none";
      // 모달창이 닫힐 때는 스크롤을 다시 활성화시킴
      controlScroll(false);
    });

    // top버튼 스크롤 기능=======================
    const topBtn = document.getElementById("top-btn");
    topBtn.addEventListener("click", function (event) {
      event.preventDefault();
      console.log(window.scrollY);
      if (window.scrollY == 0) {
        window.scrollTo({
          top: 2777,
          behavior: "smooth",
        });
      } 
      else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
}



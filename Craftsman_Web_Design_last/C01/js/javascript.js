$(document).ready(function(){
    
   $(".gnb>ul>li").mouseenter(function(){
      $(this).find(".submenu").stop().slideDown(); 
   });
    $(".gnb>ul>li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp();  
   }); 
    /* 메뉴 업 다운 */
    
    var currentIndex = 0;
    
    setInterval(function(){
        if (currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        }
            $(".slideImg").siblings().fadeOut();
            $(".slideImg").eq(currentIndex).fadeIn();
    },3000);
   
    /* 이미지 페이드인 아웃   */
    
    $(".container .notice_gal h2").click(function(){
       $(".notice_gal>h2, .notice_gal>ul").removeClass("on"); 
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    /* 탭 메뉴 */
    
    $(".container .notice li").eq(0).click(function(){
       $(".modal").fadeIn(); 
    });
    $("button").click(function(){
       $(".modal").fadeOut(); 
    });
    
    /* 모달창 페이드 인 아웃 */
});


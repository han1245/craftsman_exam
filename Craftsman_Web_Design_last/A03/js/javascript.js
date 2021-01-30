$(document).ready(function(){
    
   $(".nav>ul>li").mouseenter(function(){
      $(this).find(".submenu").stop().slideDown(); 
   });
    $(".nav>ul>li").mouseleave(function(){
       $(this).find(".submenu").stop().slideUp();  
   }); 
    /* 해당메뉴만 업 다운 */
    
    var currentIndex = 0;
    
    
    setInterval(function(){
        if(currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } 
            $(".slideImg").eq(currentIndex).siblings().fadeOut();
            $(".slideImg").eq(currentIndex).fadeIn();
    },3000);
    
    /* 이미지 슬라이드 페이드인 아웃 효과  */
    
    $("#contents .notice_gal h2").click(function(){
       $("#contents .notice_gal h2, #contents .notice_gal ul").removeClass("on"); 
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    /* 탭 메뉴 */
    
    $("#contents .notice li").eq(0).click(function(){
       $(".modal").fadeIn(); 
    });
    $("button").click(function(){
       $(".modal").fadeOut(); 
    });
    
    /* 모달창 페이드 인 아웃 */
});


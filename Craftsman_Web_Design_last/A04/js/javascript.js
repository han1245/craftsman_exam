$(document).ready(function(){
   $(".nav>ul>li").mouseenter(function(){
      $(".nav>ul>li>ul, .nav_bg").stop().slideDown(); 
   });
    $(".nav>ul>li").mouseleave(function(){
       $(".nav>ul>li>ul, .nav_bg").stop().slideUp();  
   }); 
    
    /*메뉴 슬라이드 업 다운 */
    
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
    
    /*이미지 슬라이드 좌 우 */
    
    $("#contents .notice li").eq(0).click(function(){
       $(".modal").fadeIn(); 
    });
    $("button").click(function(){
       $(".modal").fadeOut(); 
    });
    
    /* 모달창 페이드인 아웃 */
});


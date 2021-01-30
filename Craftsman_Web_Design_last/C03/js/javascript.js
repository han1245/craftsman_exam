$(document).ready(function(){
    
   $(".nav>ul>li").mouseenter(function(){
      $(".nav>ul>li>ul").stop().slideDown(); 
   });
    $(".nav>ul>li").mouseleave(function(){
       $(".nav>ul>li>ul").stop().slideUp();  
   }); 
    /* 메뉴 업 다운 */
    
    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } slidePosition= currentIndex * (-300) +"px";
        
        $(".slideList").animate({top: slidePosition},400);
    },3000);
    
    /* 이미지 슬라이드 상하  */
    
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


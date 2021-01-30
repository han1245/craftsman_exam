$(document).ready(function () {
    
    
    $(".gnb > ul > li").mouseenter(function (){
       $(".gnb > ul > li > ul").stop().slideDown(500); 
        return false;
    });
    
    $(".gnb > ul > li").mouseleave(function (){
       $(".gnb > ul > li > ul").stop().slideUp(500); 
        return false;
    });
    
    /* 메뉴창 다운 업 */
    
    var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if( currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } 
            slidePosition = currentIndex * (-1200) +"px";
        
            $(".slideList").animate({left: slidePosition}, 400);
    },3000);
    /* 이미지 슬라이드 좌 우 이동 */
    
    $(".notice_gal > h2").click(function(){
       $(".notice_gal > h2, .notice_gal > ul").removeClass("on");
        $(this).addClass("on");
        $(this).next("ul").addClass("on");
    });
    
    /* 탭 메뉴 클릭 시 이동 */
    
    
    $(".notice > li").eq(0).click(function(){
       $(".modal").fadeIn(); 
    });
    
    $(".modal_btn").click(function(){
       $(".modal").fadeOut(); 
    });
    
}); //ready end

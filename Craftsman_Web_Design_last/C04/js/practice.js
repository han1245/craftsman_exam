$(document).ready(function () {
   $(".gnb > ul > li").mouseenter(function(){
      $(this).find(".submenu").stop().slideDown(); 
   });
    $(".gnb > ul > li").mouseleave(function(){
      $(this).find(".submenu").stop().slideUp(); 
   });
    
    var currentIndex = 0;
    var slidePosition;
    setInterval(function(){
        if (currentIndex < 2) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        }
            slidePosition = currentIndex * (-800) +"px";
            $(".slideList").animate({left:slidePosition},400);
    },3000);
   
    
    $(".notice li").eq(0).click(function (){
       $(".modal").fadeIn(); 
    });
    
    $("button").click(function (){
       $(".modal").fadeOut(); 
    });
});
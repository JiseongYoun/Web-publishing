$(function(){
   var $firstmenu = $('.top-menu > ul > li'),
       $header = $('header');
    $firstmenu.mouseenter(function(){
       $header.stop().animate({height:'350px'},200);
    })
    .mouseleave(function(){
        $header.stop().animate({height:'120px'},200);
    })
});
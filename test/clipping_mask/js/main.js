$(document).ready(function(){
    
    
    function layout() {
        
        ww = $(window).width();
        wh = $(window).height();
        
        $('#wrap,.bg,.img_wrap').css({
            width:ww,
            height:wh
        });
        
    }
    
    layout();
    
    
    $('.img').animate({
        left:'5%'
    },1500).animate({
        left:0
    },1500);
    
    setInterval(function(){
        $('.img').animate({
            left:'5%'
        },1500).animate({
            left:0
        },1500);
    },3000)
    
});//ready_end
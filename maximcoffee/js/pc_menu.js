$(document).ready(function() {
                
                /*$('#in_sub_wrap').hide();
                $('.main').hover(function(){
                    $('#in_sub_wrap').stop().slideDown(1000);
                },function(){
                    $('#in_sub_wrap').slideUp(1000);
                });*/
                
                $('#in_sub_wrap').hide();
                
                $('.main a').mouseover(function(){
                    $('#in_sub_wrap').stop().slideDown();
                });
                
                $('#in_sub_wrap').mouseleave(function(){
                    $(this).stop().slideUp();
                    
                });
                /*  메뉴 이벤트  */
    
    
});// readyend
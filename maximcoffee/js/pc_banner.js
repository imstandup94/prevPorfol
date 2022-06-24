$(document).ready(function() {
    
    var wid=$('#mask').width();
                function img_move(i) {
                    $('#img_wrap').animate({
                        left:-wid*i
                    },500);
                    $('.but[data-index!='+i+']').removeClass('on');
                    $('.but[data-index='+i+']').addClass('on');
                };
                
                $('.but').each(function(index) {
                    $(this).attr('data-index',index);
                }).click(function() {
                    click_num = $(this).attr('data-index');
                    img_move(click_num);
                });
                
                var click_num = 0;
                img_move(click_num);
                function time() {
                    a = setInterval(function() {
                        click_num++;
                        if(click_num>2) {
                            click_num=0;
                        }
                        img_move(click_num);
                    },3000);
                }
                time();
                /*  배너 이벤트  */
    
});// readyend
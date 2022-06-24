$(document).ready(function () {
    
    
    
    var m_wid=$(window).width();
    
                function img_move(i) {
                    $('.swiper-wrapper').animate({
                        left:-m_wid*i
                    },500);
                    $('.m_but[data-index!='+i+']').removeClass('but_color');
                    $('.m_but[data-index='+i+']').addClass('but_color');
                };
                
                $('.m_but_wrap>.m_but').each(function(index){
                    $(this).attr('data-index',index);
                }).click(function() {
                    click_num = $(this).attr('data-index');
                    img_move(click_num);
                });
                
    
                var click_num = 0;
                img_move(click_num);
                function time() {
                    
                    img_ani = setInterval(function() {
                        click_num++;
                        if(click_num>2) {
                            click_num=0;
                        }
                        img_move(click_num);
                    },3000);
                    
                }
                time();
    
    
                function event_move(a) {
                    $('#m_section_3 .swiper-wrapper').animate({
                        left:-m_wid*a
                    },500);
                    $('.sm_but[data-index!='+a+']').removeClass('but_color');
                    $('.sm_but[data-index='+a+']').addClass('but_color');
                };
                
                $('.sm_but_wrap>.sm_but').each(function(index){
                    $(this).attr('data-index',index);
                }).click(function() {
                    click_num = $(this).attr('data-index');
                    event_move(event_num);
                });
                
    
                var event_num = 0;
                event_move(event_num);
                function event_time() {
                    
                    event_ani = setInterval(function() {
                        event_num++;
                        if(event_num>2) {
                            event_num=0;
                        }
                        event_move(event_num);
                    },3000);
                    
                }
                event_time();
    
    

    /*var m_wid = $('#m_mask').width();

    function img_move(i) {
        $('#m_img_wrap').animate({
            left: -m_wid * i
        }, 500);
        $('.but[data-index!=' + i + ']').removeClass('on');
        $('.but[data-index=' + i + ']').addClass('on');
    };

    $('.but').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        click_num = $(this).attr('data-index');
        img_move(click_num);
    });

    var click_num = 0;
    img_move(click_num);

    function time() {
        a = setInterval(function () {
            click_num++;
            if (click_num > 2) {
                click_num = 0;
            }
            img_move(click_num);
        }, 3000);
    }
    time();*/
    /*  모바일 배너 이벤트  */


    
    
    /*var m_wid = $(window).width();

    function img_move(i) {
        $('#m_event_img_wrap').animate({
            left:-m_wid*i
        }, 500);
        $('.m_but[data-index!='+ i+']').removeClass('but_color');
        $('.m_but[data-index='+i+']').addClass('but_color');
    };

    $('.m_but').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        click_num = $(this).attr('data-index');
        img_move(click_num);
    });

    var click_num = 0;
    img_move(click_num);

    function time() {
        a = setInterval(function () {
            click_num++;
            if (click_num > 2) {
                click_num = 0;
            }
            img_move(click_num);
        }, 3000);
    }
    time();*/

    /*  모바일 이벤트의 이벤트*/





}); // readyend

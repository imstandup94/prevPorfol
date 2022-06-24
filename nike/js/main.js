$(document).ready(function(){
    
    /* 레이아웃 */
    
    function layout() {
        
        ww = $(window).width();
        wh = $(window).height();
        
        $('#wrap,header,section,footer,#m_wrap').css({
            width:ww,
            float:'left'
        });
        
        var m_top_header_height = $('#m_top_header').height();
        
        $('#m_menu').css({
            width:ww,
            height:wh-135,
            zIndex:99999,
            left:-ww
        });
        
        var m_news_mask_width = $('#m_news_mask').width();
        
        $('#m_news_mask').css({
            marginLeft:-m_news_mask_width/2
        });
        
    }//layout_end
    
    layout();
    
    $(window).resize(function(){
        
        ww = $(window).width();
        wh = $(window).height();
        
        layout();
        
    });//resize_end
    
    
    /* 모바일, 탭 메뉴 이벤트 */
    var click_num = 0;
    
    $('#m_menu_icon').click(function(){
        
        if(click_num==0) {
            
            $('span',this).eq(0).transition({
                top:'50%',
                rotate:'45deg'
            });
            
            $('span',this).eq(1).css({
                opacity:0
            });
            
            $('span',this).eq(2).transition({
                top:'50%',
                rotate:'-45deg'
            });
            
            $('#m_menu').animate({
                left:0
            },500);
            
            /*$('#m_header').css({
                position:'fixed'
            });*/
            
            click_num++;
            
        }else if(click_num==1) {
            
            $('span',this).eq(0).transition({
                top:0,
                rotate:0
            });
            
            $('span',this).eq(1).animate({
                opacity:1
            },500);
            
            $('span',this).eq(2).transition({
                top:'100%',
                rotate:0,
                marginTop:-1
            });
            
            var ww = $(window).width();
            
            $('#m_menu').animate({
                left:-ww
            },500);
            
            click_num--;
            
        }
        
        
        
    });
    
    var menu_click_num = 0;
    
    $('.sub_menu').click(function(){
        
        if(menu_click_num==0) {
            
            $(this).css({
                background:'#d22d34'
            });
            
            $('div',this).css({
                color:'#fff'
            });
            
            $('h3',this).transition({
                rotate:'90deg',
                color:'#fff',
                marginRight:3
            });
            
            $(this).siblings('.sub_bottom_menu').show();
            
            menu_click_num++;
            
        }else if(menu_click_num==1) {
            
            $(this).css({
                background:'#fff'
            });
            
            $('div',this).css({
                color:'#111'
            });
            
            $('h3',this).transition({
                rotate:0,
                color:'#111',
                marginRight:0
            });
            
            $(this).siblings('.sub_bottom_menu').hide();
            
            menu_click_num--;
        }
        
        
    });
    
    $('.sub_bottom_menu').hide();
    
    /* new 롤링 이벤트 효과 */
    var con_width = $('.news_con').width();
    var con_margin_right = parseInt($('.news_con').css('margin-right'));
    var plus = con_width + con_margin_right

    setTimeout(function () {
        
        $('#news_wrap').css({
            left:-plus
        });

        $('.news_con').eq(3).transition({
            scale: 1.15
        }, 0).delay(2900).transition({
            scale: 1
        }, 800);

    });

    setInterval(function () {

        $('#news_wrap').animate({
            left:-plus*2
        }, 500, function () {
            $('.news_con').eq(0).appendTo('#news_wrap');
            $('#news_wrap').css({
                left: -plus
            });
        });

        $('.news_con').eq(4).delay(600).transition({
            scale: 1.15
        }, 800).delay(1500).transition({
            scale: 1
        }, 800);

    }, 3300);
    
    
    /* 모바일 롤링 배너 */
    var m_con_width = $('.m_news_con').width();
    var m_con_margin_right = parseInt($('.m_news_con').css('margin-right'));
    var m_plus = m_con_width + m_con_margin_right

    setTimeout(function () {

        $('.m_news_con').eq(1).transition({
            scale: 1.15
        }, 0).delay(2900).transition({
            scale: 1
        }, 800);

    });

    setInterval(function () {

        $('#m_news_wrap').animate({
            left:-m_plus*2
        }, 500, function () {
            $('.m_news_con').eq(0).appendTo('#m_news_wrap');
            $('#m_news_wrap').css({
                left:-m_plus
            });
        });

        $('.m_news_con').eq(2).delay(600).transition({
            scale: 1.15
        }, 800).delay(1500).transition({
            scale: 1
        }, 800);

    }, 3300);
    
    
    
    /* product but 이벤트 효과 */
    $('.new_mask,.m_new_mask').hide();
    
    $('.best_pro_but,.m_best_but').click(function(){
        $('.new_mask,.m_new_mask').hide();
        $('.best_mask,.m_best_mask').show();
        $(this).siblings().removeClass('text_color');
        $(this).addClass('text_color');
        jQuery(function($){
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                loop: true
            });  
        });       
    });
    
    $('.new_pro_but,.m_new_but').click(function(){
        $('.new_mask,.m_new_mask').show();
        $('.best_mask,.m_best_mask').hide();
        $(this).siblings().removeClass('text_color');
        $(this).addClass('text_color');
        jQuery(function($){
            var mySwiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                spaceBetween: 0,
                centeredSlides: true,
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
                loop: true
            });  
        });       
    });
    
    
    
});//end
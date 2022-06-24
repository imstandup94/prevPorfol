$(document).ready(function(){

    
    function layout() {
        
        
        ww = $(window).width();
        wh = $(window).height();
        
        
        /* pc,note 크기 및 위치값 */
        $('#wrap').css({
            width:ww*3,
            height:wh*3,
            left:-ww,
            top:-wh
        });
        
        $('.center_align').css({
            width:ww*3,
            height:wh
        });
        
        $('section').css({
            width:ww,
            height:wh,
            overflow:'hidden'
        });
        
        $('header,#menu_wrap,#portfolio_work,#work_wrap').css({
            width:ww,
            zIndex:9999,
            top:0,
            left:0
        });
        
        $('#work,#profile').css({
            left:ww
        });
        
        $('#main').css({
            height:'52vw'
        });
        
        
        /* mobile,tab 크기 및 위치값 */
        $('#m_wrap').css({
            width:ww,
            height:'auto',
            top:0,
            left:0
        });
        
        $('#m_profile_mask,#m_work_wrap').css({
            width:ww,
            height:wh,
            float:'left',
            overflow:'hidden'
        });
        
        $('#m_work_wrap').css({
            zIndex:9999,
            top:0,
            left:0,
            position:'fixed'
        });
        
        $('#m_work_wrap').css({
            position:'fixed'
        });
        
        $('#m_main').css({
            height:'110vw'
        });
        
        
    }
    
    layout();
    
    $(window).resize(function(){
        
        ww = $(window).width();
        wh = $(window).height();
        
        layout();
        
    });
    
    /* back_but 이벤트 () */
    $('.back_but').click(function(){
        $('#wrap').animate({
            top:-wh,
            left:-ww
        });
    });
    
    
    
    /* 메뉴 이벤트 */
    
    $('#menu_wrap,#m_menu_wrap').hide();
    
    $('#wrap .menu,#m_wrap .m_menu').click(function(){
        
        $('#menu_wrap,#m_menu_wrap').fadeIn('500');
        
        //$('.menu_icon>.menu').hide();
        
    });
    
    $('#menu_wrap .close,#m_wrap .m_close').click(function(){
        
        $('#menu_wrap,#m_menu_wrap').fadeOut('500');
        
        $('.menu_icon>.menu').show();
        
    });
    
    
    
    /* pc, note : 메뉴 클릭시 페이지 이동 */
    $('.main_menu>li').eq(0).click(function(){
        $('#wrap').animate({
            top:-wh*2,
            left:-ww
        });
        $('#menu_wrap').delay(100).fadeOut('100');
    });
    
    $('.main_menu>li').eq(1).click(function(){
        $('#wrap').animate({
            top:-wh,
            left:-ww*2
        });
        $('#menu_wrap').delay(100).fadeOut('100');
    });
    
    $('.main_menu>li').eq(2).click(function(){
        $('#wrap').animate({
            top:0,
            left:-ww
        });
        $('#menu_wrap').delay(100).fadeOut('100');
    });
    
    $('.main_menu>li').eq(3).click(function(){
        $('#wrap').animate({
            top:-wh,
            left:0
        });
        $('#menu_wrap').delay(100).fadeOut('100');
    });
    
    
    /* mobile, note : 메뉴 클릭시 페이지 이동 */
    
    $('#m_menu>li').eq(0).click(function(){
        
        $('html,body').stop().animate({
            scrollTop:wh
        },500);
        
        $('#m_menu_wrap').delay(100).fadeOut('100');
    });
    
    $('#m_menu>li').eq(1).click(function(){
        
        $('html,body').stop().animate({
            scrollTop:wh*2
        },500);
        
        $('#m_menu_wrap').delay(100).fadeOut('100');
    });
    
    $('#m_menu>li').eq(2).click(function(){
        
        $('html,body').stop().animate({
            scrollTop:wh*3
        },500);
        
        $('#m_menu_wrap').delay(100).fadeOut('100');
    });
    
    $('#m_menu>li').eq(3).click(function(){
        
        $('html,body').stop().animate({
            scrollTop:wh*4
        },500);
        
        $('#m_menu_wrap').delay(100).fadeOut('100');
    });
    
    
    
    
    
    /* 포폴 pc,note 버전 이벤트 */
    $('#wrap .smile').hide();
    
    $('#portfolio_work .bg').hide();
    
    $('.arrow,.arrow_2').css({
        opacity:0
    });
    
    $('#wrap .smile').eq(0).show();
    
    $('#wrap .portfolio_close').click(function(){
        $('#portfolio_work').fadeOut('500');
    });
    
    /* 첫번째 동전 클릭시 맥심커피 */
    $('#portfolo .smile').eq(0).click(function(){
        $('#portfolo .shadow').eq(1).addClass('shadow_1');
        $('#portfolo .smile_wrap').eq(1).addClass('con_1');
        $('#portfolio_work>.bg').hide();
        $('#portfolio_work,.port_con_2').fadeIn('500');
        $('.arr_1').animate({opacity:1},500);
        $('#portfolo .smile').eq(1).delay('100').fadeIn('100').fadeOut('50').fadeIn('50').fadeOut('50').fadeIn('50');
        $('#portfolo .text_bg').delay(500).animate({ left:635,top:0 },10);
    });
    
    
    $('#portfolo .smile').eq(1).click(function(){
        $('#portfolo .shadow').eq(2).addClass('shadow_1');
        $('#portfolo .smile_wrap').eq(2).addClass('con_1');
        $('#portfolio_work>.bg').hide();
        $('#portfolio_work,.port_con_3').fadeIn('500');
        $('.arr_2').animate({opacity: 1},500);
        $('#portfolo .smile').eq(2).fadeIn('500');
        $('#portfolo .text_bg').delay(500).animate({ left:1095,top:0 },10);
    });
    
    $('#portfolo .smile').eq(2).click(function(){
        $('#portfolo .shadow').eq(3).addClass('shadow_1');
        $('#portfolo .smile_wrap').eq(3).addClass('con_1');
        $('#portfolio_work>.bg').hide();
        $('#portfolio_work,.port_con_1').fadeIn('500');
        $('.arr_3').animate({opacity:1},500);
        $('#portfolo .smile').eq(3).fadeIn('500');
        $('#portfolo .text_bg').delay(500).animate({ left:390,top:338 },10);
    });
    
    $('#portfolo .smile').eq(3).click(function(){
        $('#portfolo .shadow').eq(4).addClass('shadow_1');
        $('#portfolo .smile_wrap').eq(4).addClass('con_1');
        $('#portfolio_work>.bg').hide();
        $('#portfolio_work,.port_con_4').fadeIn('500');
        $('.arr_4').animate({opacity:1},500);
        $('#portfolo .smile').eq(4).fadeIn('500');
        $('#portfolo .text_bg').delay(500).animate({ left:817,top:338 },10);
    });
    
    $('#portfolo .smile').eq(4).click(function(){
        $('#portfolo .shadow').eq(5).addClass('shadow_1');
        $('#portfolo .smile_wrap').eq(5).addClass('con_1');
        $('#portfolio_work>.bg').hide();
        $('#portfolio_work,.port_con_5').fadeIn('500');
        $('.arr_5').animate({opacity:1},500);
        $('#portfolo .smile').eq(5).fadeIn('500');
        $('#portfolo .text_bg').delay(500).animate({ left:182,top:0 },10);
    });
    
    
    
    
    
    /* 작업물 클릭 이벤트 효과 */
    /* pc,note */
    $('#work_wrap,#m_work_wrap,#work_wrap>.bg,#m_work_wrap>.bg').hide();
    
    $('#wrap .work_con,#m_wrap .work_con').click(function(){
        $('#work_wrap,#m_work_wrap').fadeIn('500');
    });
    
    $('.work_close').click(function(){
        $('#work_wrap,#m_work_wrap').fadeOut('500');
    });
    
    $('#wrap .work_con').eq(0).click(function(){
        $('#work_wrap>.bg').hide();
        $('.work_con_1').fadeIn('500');
    });
    
    /*$('#wrap .work_con').eq(1).click(function(){
        $('#work_wrap,#m_work_wrap').hide();
    });*/
    
    $('#wrap .work_con').eq(2).click(function(){
        $('#work_wrap,#m_work_wrap').hide();
    });
    
    $('#wrap .work_con').eq(1).click(function(){
        $('#work_wrap>.bg').hide();
        $('.work_con_2').fadeIn('500');
    });
    
    $('#wrap .work_con').eq(4).click(function(){
        $('#work_wrap>.bg').hide();
        $('.work_con_3').fadeIn('500');
    });
    
    /* 맥날, 맥심 슬라이드 이벤트 효과 */
    var work_con_1 = $('#wrap .work_con_1').width();
    
    $('#wrap .work_arrow_1').eq(1).click(function(){
        $('#work_wrap .work_1_img_wrap').animate({left:-work_con_1},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    $('#wrap .work_arrow_1').eq(0).click(function(){
        $('#work_wrap .work_1_img_wrap').animate({left:0},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    
    /* 그림 슬라이드 이벤트 효과 */
    var con_mask_width = $('#wrap .con_mask').width();
    
    $('#wrap .work_arrow_3').eq(1).click(function(){
        $('#work_wrap .con_box').animate({left:-con_mask_width},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    $('#wrap .work_arrow_3').eq(0).click(function(){
        $('#work_wrap .con_box').animate({left:0},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    
    
    /* mobile,tab */
    $('#m_wrap .work_con').eq(0).click(function(){
        $('#m_work_wrap>.bg').hide();
        $('.work_con_1').fadeIn('500');
    });
    
    
    $('#m_wrap .work_con').eq(3).click(function(){
        $('#m_work_wrap>.bg').hide();
        $('.work_con_2').fadeIn('500');
    });
    
    $('#m_wrap .work_con').eq(4).click(function(){
        $('#m_work_wrap>.bg').hide();
        $('.work_con_3').fadeIn('500');
    });
    
    /* 맥날, 맥심커피 슬라이드 이벤트 효과 */
    var work_con_1_1 = $('#m_wrap .work_con_1').width();
    
    $('#m_wrap .m_work_arrow_1').eq(1).click(function(){
        $('#m_work_wrap .tab_img_wrap').animate({left:-work_con_1_1},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    $('#m_wrap .m_work_arrow_1').eq(0).click(function(){
        $('#m_work_wrap .tab_img_wrap').animate({left:0},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    
    /* 그림 슬라이드 이벤트 효과 (mobile, tab) */
    var con_mask_width_2 = $('#m_wrap .con_mask').width();
    
    $('#m_wrap .m_work_arrow_3').eq(1).click(function(){
        $('#m_work_wrap .con_box_2').animate({left:-con_mask_width_2},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    $('#m_wrap .m_work_arrow_3').eq(0).click(function(){
        $('#m_work_wrap .con_box_2').animate({left:0},500);
        $(this).css({opacity:0.5});
        $(this).siblings().css({opacity:1});
    });
    
    
    
    
    
    /* 메인 이벤트 */
    $('#main>div,#main>h1,#m_main>div,#m_main>h3').hide();
    
    
    $('.ground').delay(100).fadeIn('300');
    
    $('.small_grass_1').delay(200).fadeIn('100');
    $('.small_grass_2').delay(300).fadeIn('100');
    $('.small_grass_3').delay(400).fadeIn('100');
    $('.small_grass_4').delay(600).fadeIn('100');
    
    $('.water').delay(500).fadeIn('150');
    
    $('.lala_1').delay(550).fadeIn('50');
    $('.lala_2').delay(600).fadeIn('50');
    $('.lala_3').delay(650).fadeIn('50');
    $('.lala_4').delay(700).fadeIn('50');
    
    $('.profile_bg').delay(600).fadeIn('100')//.delay(500).addClass('main_ani_2');
    $('.profile').delay(700).fadeIn('100');
    
    $('.contact_bg').delay(800).fadeIn('100')//.delay(500).addClass('main_ani_2');
    $('.contact').delay(900).fadeIn('100');
    
    
    $('.big_grass_1').delay(1000).fadeIn('100');
    $('.big_grass_2').delay(1100).fadeIn('100');
    $('.big_grass_3').delay(1400).fadeIn('100');
    $('.big_grass_4').delay(1600).fadeIn('100');
    
    $('.portfolio_bg').delay(1200).fadeIn('100')//.delay(500).addClass('main_ani');
    $('.portfolio_1').delay(1300).fadeIn('100');
    $('.portfolio_2').delay(1500).fadeIn('100');
    
    
    $('.tree_1').delay(1700).fadeIn('100');
    $('.tree_2').delay(1800).fadeIn('100');
    $('.tree_3').delay(1900).fadeIn('100');
    
    
    $('.work_bg').delay(2000).fadeIn('100')//.delay(500).addClass('main_ani');
    $('.work').delay(2100).fadeIn('100');
    
    $('.mountain_1').delay(2200).fadeIn('80');
    $('.mountain_2').delay(2300).fadeIn('80');
    $('.mountain_3').delay(2400).fadeIn('60');
    $('.mountain_4').delay(2500).fadeIn('60');
    $('.mountain_5').delay(2600).fadeIn('100');
    
    $('.cloud_1').delay(2650).fadeIn('70');
    
    $('.sun').delay(2700).fadeIn('100');
    $('.sun_bg').delay(2800).fadeIn('50');
     
    $('.cloud_2').delay(2900).fadeIn('60');
    $('.cloud_3').delay(3000).fadeIn('100');
    
    $('.bird_1').delay(3100).fadeIn('100');
    $('.bird_2').delay(3200).fadeIn('100');
    $('.bird_3').delay(3340).fadeIn('100');
    $('.bird_4').delay(3400).fadeIn('100');
    
    $('#main>h1').delay(3500).fadeIn('70');
    
    
    
    $('#main>.profile_bg').delay(500).addClass('main_ani_2');
    $('#main>.contact_bg').delay(500).addClass('main_ani_2');
    $('#main>.portfolio_bg').delay(500).addClass('main_ani');
    $('#main>.work_bg').delay(500).addClass('main_ani');
    
    
    
    /* 메인 클릭이벤트 */
    $('#main>.work').click(function(){
        $('#wrap').animate({
            top:0,
            left:-ww
        },500);
    });
    
    
    $('#main>.portfolio_1').click(function(){
        $('#wrap').animate({
            top:-wh,
            left:-ww*2
        },500);
    });
    
    
    $('#main>.contact').click(function(){
        $('#wrap').animate({
            top:-wh,
            left:0
        },500);
    });
    
    $('#main>.profile').click(function(){
        $('#wrap').animate({
            top:-wh*2,
            left:-ww
        },500);
    });
    
    
    
    
});
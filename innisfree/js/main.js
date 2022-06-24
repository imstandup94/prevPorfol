$(document).ready(function(){
    
    
    /* layout 함수 (큰 부모 크기 지정) */
    function layout() {
        
        ww = $(window).width();
        wh = $(window).height();
        
        $('#wrap,#m_wrap').css({
            width:ww
        });
        
        $('#wrap>section').css({
            width:ww,
            height:wh
        });
        
        $('#m_menu_box').css({
            width:ww,
            height:wh
        });
        
    }
    
    layout();
    
    /* 반응형 */
    $(window).resize(function(){
        ww = $(window).width();
        wh = $(window).height();
        layout();
    });
    
    
    /* 마우스휠 이벤트 */
    $('#wrap>section,#wrap>footer').on('mousewheel',function(event,delta) {
        if(delta>0) {
            var a=$(this).prev().offset().top;
            $('html,body').stop().animate({'scrollTop':a});
            $('text_wrap').find('width_align').animate({
                'margin-top':-30,
                opacity:1
            },1000)
        }else if(delta<0) {
            var b=$(this).next().offset().top;
            $('html,body').stop().animate({'scrollTop':b});
        }
     });
    
    /* 메뉴 hover 이벤트 효과 */
    $('.top_menu').mouseenter(function(){
        $(this).css({
            'font-size':20,
            'font-weight':600
        });
    }).mouseleave(function(){
        $(this).css({
            'font-size':18,
            'font-weight':500
        });
    });
    
    /* section_2 이벤트 효과 */
    /*      ->section_2 small_con click시, 해당 img로 변경       */
    $('.small_con').eq(0).click(function(){
        $('#section_2').find('.left_box').css({
            background:'#ffda81'
        });
        $('#section_2').find('.but').css({
            background:'#f2ce2d',
            color:'#202020'
        });
        $('.section_2_img').attr({
            src:'img/section_2/img_1.png',
            alt:'하이칙스 브러쉬.img'
        });
        $('#section_2').find('.text_1').text('이니스프리 x 하이칙스 BRUSH SET');
        $('#section_2').find('.text_2').text('TYPE :  SUNNY SIDE UP(GREEN) / RED LIP(PINK)');
    });
    
    $('.small_con').eq(1).click(function(){
        $('#section_2').find('.left_box').css({
            background:'rgb(249, 233, 233)'
        });
        $('#section_2').find('.but').css({
            background:'rgb(208, 97, 94)',
            color:'#fff'
        });
        $('.section_2_img').attr({
            src:'img/section_2/img_2_1.png',
            alt:'제주 센트 피커 가든 컬렉션.img'
        });
        $('#section_2').find('.text_1').text('제주 센트 피커 가든 컬렉션 출시');
        $('#section_2').find('.text_2').text('TYPE :  May bloom / May grass');
    });
                
    $('.small_con').eq(2).click(function(){
        $('#section_2').find('.left_box').css({
            background:'rgb(245, 245, 245)'
        });
        $('#section_2').find('.but').css({
            background:'#f2ce2d',
            color:'#202020'
        });
        $('.section_2_img').attr({
            src:'img/section_2/img_3.png',
            alt:'팔레트.img'
        });
        $('#section_2').find('.text_1').text('마이 팔레트 X 올림피아 자그놀리');
        $('#section_2').find('.text_2').text('TYPE :  Blue / Yellow / Pink / Sky');
    });
                
    $('.small_con').eq(3).click(function(){
        $('#section_2').find('.left_box').css({
            background:'#e8ecef'
        });
        $('#section_2').find('.but').css({
            background:'rgb(53, 85, 113)',
            color:'#fff'
        });
         $('.section_2_img').attr({
            src:'img/section_2/img_4.png',
            alt:'스누피 핸드크림.img'
         });
         $('#seciton_2').find('.text_1').text('이니스프리 X 스누피 퍼퓸드 핸드크림');
         $('#section_2').find('.text_2').text('TYPE :  LOVE more / LAUGH a lot / DREAM big');
    });
    
    
    /*      small_con click시, 크기 커짐     */
    $('#section_2').find('.small_con').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
        $(this).addClass('small_con_border');
        $(this).siblings().removeClass('small_con_border');
    });
    
    
    /*      section_3의 화살표 클릭시 con 이동       */
    $('#section_3').find('.right_arrow').click(function() {
        $('#section_3').find('.con').first().appendTo('#pr_con_wrap');
    });
    
    $('#section_3').find('.left_arrow').click(function() {
        $('#section_3').find('.con').last().prependTo('#pr_con_wrap');
    });
    
    
    
    
    
    /*-------- m_wrap 이벤트 효과 --------*/
    
    /* 메뉴 클릭시 메뉴창 나오는 이벤트 */
    /*$('#m_menu_box').css({
        left:-ww
    });*/
    
    $('#m_menu_box').hide();
    
    $('#m_menu').click(function(){
        /*$('#m_menu_box').animate({
            left:0
        },500);*/
        $('#m_menu_box').slideDown(100);
    });
    
    $('#m_menu_box').find('#close').click(function(){
        /*$('#m_menu_box').animate({
            left:-ww
        },500);*/
        $('#m_menu_box').slideUp(100);
    });
    
    /* 메인 메뉴 클릭시 서브 메뉴 이벤트 */
    $('.sub_menu').hide();
    
    $('.main_wrap').click(function(){
        $('.sub_menu').hide();
        $('.sub_menu',this).show();
    });
    
    /* 모바일 메뉴 리사이즈 */
    $(window).on('resize',function() {
        var m_w = $(window).width();
        var m_h = $(window).height();
        $('#m_menu_box').css({
            width:m_w,
            height:m_h
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
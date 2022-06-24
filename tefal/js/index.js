$(document).ready(function(){
    
    /* 마우스휠 이벤트 */
    
    $('#wrap section').on('mousewheel',function(event,delta){
        
        if(delta>0) {
            
            var pre = $(this).prev().offset().top;
            
            $('html,body').stop().animate({
                scrollTop:pre
            },800);
            
        }else if(delta<0) {
            var next = $(this).next().offset().top;
            
            $('html,body').stop().animate({
                scrollTop:next
            },800);
        }
        
    });//end
    
    
    
    
    
    /* 영역 크기값 */
    
    function layout() {
        
        ww = $(window).width();
        wh = $(window).height();
        
        $('html,body').css({
            width:ww,
            height:'auto'
        });
    
        $('#wrap').css({
            width:ww,
            height:'auto'
        });
    
        $('header').css({
            width:ww,
            height:80
        });
    
        $('#section_wrap').css({
            width:ww,
            height:'auto'
        });
    
        $('section,article').css({
            width:ww,
            height:ww*0.52
        });
        
        var main_text1 = $('#main_text_1').width();
        var main_text2 = $('#main_text_2').width();
    
        $('#main_text_1').css({
            marginLeft:-main_text1/2
        });
    
        $('#main_text_2').css({
            marginLeft:-main_text2/2
        });
        
        var color_ch_w = $('.color_ch').width();
        var color_ch_h = $('.color_ch').height();
        
        $('.color_ch').css({
            marginTop:-color_ch_h/2,
            marginLeft:-color_ch_w/2
        });
    
        $('footer').css({
            width:ww,
            height:'auto'
        });
        
        
        /* 모바일, 테블릿 영역 크기 */
        
        $('#m_wrap>header').css({
            width:ww,
            height:80
        });
        
        $('#m_wrap>#m_section_wrap,#m_wrap>footer').css({
            width:ww,
            height:'auto'
        });
        
        $('#m_wrap section,#m_wrap article,#m_menu_wrap').css({
            width:ww,
            height:wh
        });
        
    }//layout_end
    
    
    layout();
    
    $(window).resize(function(){
        layout();
    });
    
    
    
    /* 메인 사진 페이드인 페이드 아웃 효과 */
    
    /* pc,note일 때, 메인 페이드인,아웃 */
    /* 로드될 때 두번째 이미지와 텍스트 나타남 */
    setTimeout(function(){
        
        $('.con_wrap').eq(1).animate({
            opacity:1
        },500,function(){
            $('#main_text_2').delay(500).transition({
                opacity:1,
                transform:'translateY(0)'
            });
        });
        $('#main_text_1').delay(1000).transition({
            opacity:0,
            transform:'translateY(-50px)'
        });
        
    },4000);
    
    /* 로드될 때 첫번째 이미지의 텍스트 나타남 */
    setTimeout(function(){
        
        $('#main_text_1').transition({
            opacity:1,
            transform:'translateY(0)'
        });
        
    },500);
    
    setInterval(function(){
        
        /* 두번째 이미지 사라짐 */
        $('.con_wrap').eq(1).animate({
            opacity:0
        },500,function(){
            $('#main_text_2').transition({
                opacity:0,
                transform:'translateY(-50px)'
            });
        },0);
        
        
        /* 두번째 이미지 사라지고 0.5초 뒤에 첫번째 이미지의 텍스트 나타남 */
        $('#main_text_1').delay(500).transition({
            opacity:1,
            transform:'translateY(0)'
        }).delay(4000).transition({
            opacity:0,
            transform:'translateY(-50px)'
        });
        
        
        /* 두번째 이미지 나타나고 0.5초 뒤에 두번째 이미지의 텍스트 나타남 */
        $('.con_wrap').eq(1).delay(4000).animate({
            opacity:1
        },500,function(){
            $('#main_text_2').delay(500).transition({
                opacity:1,
                transform:'translateY(0)'
            });
        });
        
    },9000);
    
    
    
    
    
    
    /* 모바일, 테블릿일 때 메인 페이드인,아웃 */
    
    
    setTimeout(function(){
        
        $('.m_con_wrap').eq(1).animate({
            opacity:1
        },500,function(){
            $('#m_main_text_2').delay(500).transition({
                opacity:1,
                transform:'translateY(0)'
            });
        });
        $('#m_main_text_1').delay(1000).transition({
            opacity:0,
            transform:'translateY(-50px)'
        });
        
    },4000);
    
    /* 로드될 때 첫번째 이미지의 텍스트 나타남 */
    setTimeout(function(){
        
        $('#m_main_text_1').transition({
            opacity:1,
            transform:'translateY(0)'
        });
        
    },500);
    
    setInterval(function(){
        
        /* 두번째 이미지 사라짐 */
        $('.m_con_wrap').eq(1).animate({
            opacity:0
        },500,function(){
            $('#m_main_text_2').transition({
                opacity:0,
                transform:'translateY(-50px)'
            });
        },0);
        
        
        /* 두번째 이미지 사라지고 0.5초 뒤에 첫번째 이미지의 텍스트 나타남 */
        $('#m_main_text_1').delay(500).transition({
            opacity:1,
            transform:'translateY(0)'
        }).delay(4000).transition({
            opacity:0,
            transform:'translateY(-50px)'
        });
        
        
        /* 두번째 이미지 나타나고 0.5초 뒤에 두번째 이미지의 텍스트 나타남 */
        $('.m_con_wrap').eq(1).delay(4000).animate({
            opacity:1
        },500,function(){
            $('#m_main_text_2').delay(500).transition({
                opacity:1,
                transform:'translateY(0)'
            });
        });
        
    },9000);
    
    
    
    
    
    
    /* 스크롤시 텍스트 효과 */
    
    var section_h = $('#wrap section').height();
    
    var sec = section_h-50
    
    function text_trans(i) {
        
        $('#wrap section').eq(i).find('.title_wrap').transition({
            opacity:1,
            transform:'translateY(0)'
        },1000);
        
        $('#wrap section').eq(i).find('p').transition({
            opacity:1,
            transform:'translateY(0)'
        },1000);
        
        $('#wrap section').eq(i).find('.but').transition({
            opacity:1,
            transform:'translateY(0)'
        },1000);
        
    }
    
    $(window).scroll(function(){
        
        var sct = $(window).scrollTop();
        
        /* section_2 */
        if(sct>=sec && sct<sec*2) {
            
            text_trans(1);
            
        }else if(sct>=sec*2 && sct<sec*3) {
            
            text_trans(2);
            
        }else if(sct>=sec*3 && sct<sec*4) {
            
            text_trans(3);
            
        }else if(sct>=sec*4 && sct<sec*5) {
            
            text_trans(4);
            
        }else if(sct>=sec*5 && sct<sec*6) {
            
            text_trans(5);
            
        }else if(sct>=sec*6 && sct<sec*7) {
            
            text_trans(6);
            
        }else if(sct>=sec*7 && sct<sec*8) {
            
            text_trans(7);
            
        }
        
    });//scroll_end
    
    
    
    
    /* ----모바일, 테블릿 영역---- */
    
    /* 모바일 스크롤시 텍스트 이벤트 */
    
    var m_section_h = $('#m_wrap section').height();
    
    var m_text_ani = m_section_h-100;
    
    $(window).scroll(function(){
        
        var m_sct = $(window).scrollTop();
        
        if(m_sct>=m_text_ani && m_sct<m_text_ani*2) {
            
            $('#m_wrap section').eq(1).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
            
        }else if(m_sct>=m_text_ani*2 && m_sct<m_text_ani*3) {
            $('#m_wrap section').eq(2).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }else if(m_sct>=m_text_ani*3 && m_sct<m_text_ani*4) {
            $('#m_wrap section').eq(3).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }else if(m_sct>=m_text_ani*4 && m_sct<m_text_ani*5) {
            $('#m_wrap section').eq(4).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }else if(m_sct>=m_text_ani*5 && m_sct<m_text_ani*6) {
            $('#m_wrap section').eq(5).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }else if(m_sct>=m_text_ani*6 && m_sct<m_text_ani*7) {
            $('#m_wrap section').eq(6).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }else if(m_sct>=m_text_ani*7 && m_sct<m_text_ani*8) {
            $('#m_wrap section').eq(7).find('.text_box').transition({
                opacity:1,
                transform:'translateY(0)'
            },1000);
        }
        
        
    });
    
    
    /* 모바일 메뉴 클릭시 메뉴 나타남 */
    
    $('#m_menu_wrap').css({
        left:-ww
    });
    
    $('#m_menu').click(function(){
        
        $('#m_menu_wrap').animate({
            left:0
        });
        
    });
    
    $('#close').click(function(){
        
        $('#m_menu_wrap').animate({
            left:-ww
        });
        
    });
    
    
});//end
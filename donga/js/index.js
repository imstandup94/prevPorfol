$(document).ready(function(){
    
    var ww = $(window).width();
    var wh = $(window).height();
    
    /* 객체 크기값 지 */
    function layout() {
        
        var ww = $(window).width();
        var wh = $(window).height();
        
        
        $('#wrap').css({
            width:ww,
            height:'auto',
            float:'left'
        });
        
        
        $('header').css({
            width:ww,
        });
        
        $('section,footer').css({
            width:ww,
            float:'left'
        });
        
        $('#main').css({
            width:ww,
            height:wh,
            float:'left'
        });
        
        $('#section_1').css({
            marginTop:wh
        });
        
        var embed_w = $('embed').width();
        var embed_h = $('embed').height();
        
        if(ww>=960){
            
            $('embed').css({
                marginLeft:-221.54,
                marginTop:-57.305
            });
            
        }else if(ww<960) {
            
            $('embed').css({
                marginLeft:-embed_w/2,
                marginTop:-embed_h/2
            });
            
        }
        
        /*$('embed').css({
            marginLeft:-embed_w/2,
            marginTop:-embed_h/2
        });*/
        
        $('#menu_wrap').css({
            width:ww,
            height:wh
        });
        
    }
    
    layout();
    
    $(window).resize(function(){
        
        layout();
        
    });
    
    
    /* 메인 애니메이션 끝나면 모든 요소 보이기 */
    
    $('.hide').hide();
    
    setTimeout(function(){
        
        $('.hide').fadeIn(500);
        
    },8000);
    
    
    
    /* 메인 이미지 바뀜 */
    
    $('.black_box>h1').delay(3500).fadeOut('500');
    
    $('#main_1').delay(1200).fadeOut(0); 
    $('#main_2').delay(2000).fadeOut(0); 
    $('#main_3').delay(2600).fadeOut(0); 
    $('#main_4').delay(3000).fadeOut(0); 
    $('#main_5').delay(3200).fadeOut(0); 
    
    
    $('.svg_wrap').hide();
    
    setTimeout(function(){
        $('.svg_wrap').show(0);
    },4000);
    
   
    $(window).scroll(function(){
        
        var sct = $(window).scrollTop();
        
        if(sct>wh) {
            
            $('header').css({
                background:'rgba(255,255,255,1)'
            });
            
            $('.fixed_bg').css({
                zIndex:1
            });
            
            $('#main').css({
                zIndex:0,
                opacity:0
            });
            
        }else if(sct<=wh) {
            
            $('.fixed_bg').css({
                zIndex:0
            });
            
            $('#main').css({
                zIndex:1,
                opacity:1
            });
            
            $('header').css({
                background:'rgba(255,255,255,0)'
            });
            
        }
        
        
    });
    
    
    
    
    /* 제품 hover시, 효과 */
    
    
    /* 제품 hover */
    
    
    
    $('#section_2 .con').mouseenter(function(){
        $(this).stop().transition({
            transform:'perspective(1250px) translateZ(75px)'
        },800,function(){
            $(this).transition({
                transform:'perspective(1250px) translateZ(75px) rotate(-4deg)'
            },50,function(){
                $(this).transition({
                    transform:'perspective(1250px) translateZ(75px) rotate(4deg)'
                },40,function(){
                    $(this).transition({
                        transform:'perspective(1250px) translateZ(75px) rotate(-4deg)'
                    },50,function(){
                        $(this).transition({
                            transform:'perspective(1250px) translateZ(75px) rotate(4deg)'
                        },40,function(){
                            $(this).transition({
                                transform:'perspective(1250px) translateZ(75px) rotate(-4deg)'
                            },50,function(){
                                $(this).transition({
                                    transform:'perspective(1250px) translateZ(75px) rotate(4deg)'
                                },40,function(){
                                    $(this).transition({
                                        transform:'perspective(1250px) translateZ(75px) rotate(0)'
                                    },50);
                                })
                            })
                        })
                    })
                })
            })
        })
    }).mouseleave(function(){
        
        $('#section_2 .con').transition({
            transform:'perspective(0) translateZ(0)'
        },800);
        
    });
    
    /* 제품 왼쪽 박스 z-index 설정 */
    $('#section_2 .left').find('.con').mouseenter(function(){
        
        $('#section_2 .left').stop().css({
            zIndex:999,
        });
        
        $('#section_2 .right').stop().css({
            zIndex:0
        });
        
    }).mouseleave(function(){
        
        $('#section_2 .left,#section_2 .right').stop().css({
            zIndex:2,
        });
        
    });
    
    
    
    
    
    /* 사회공헌 사진 클릭시 이미지 및 텍스트 바뀜 */
    
    $('.small_con img').click(function(){
        
        $(this).addClass('img_size');
        $(this).siblings().removeClass('img_size');
        
    });
    
    
    /* 첫번째 이미지 */
    $('.small_con img').eq(0).click(function(){
        
        $('.big_con .color_title').text('대학생 국토대장정');
        
        $('.big_con .text').text('은 남녀 각 72명씩, 총 144명의 대학생들이 20박 21일 동안 직접 우리 땅을 두 발로 걸어 완주하는 행사입니다. 본 행사는 ‘온실 속의 화초처럼 자란 대학생들에게 자신을 이기는 강인한 정신력을 기르고 남에 대한 배려와 동료애를 몸소 체험하도록 하자’는 강신호 회장의 의지로 시작되었습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big.jpg'
        });
        
    });
    
    
    /* 두번째 이미지 */
    $('.small_con img').eq(1).click(function(){
        
        $('.big_con .color_title').text('박카스배 전국시도학생 골프선수권 대회');
        
        $('.big_con .text').text('는 골프 꿈나무를 육성하기 위해 동아쏘시오홀딩스와 SBS골프채널이 주최하는 행사입니다. 본 대회는 대한골프협회에 선수등록이 되어있는 국내 초∙중∙고등학교 재학생들이 참가할 수 있으며 매년 전국적으로 주니어 골프 스타들을 배출하고 있습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big_2.jpg'
        });
        
    });
    
    /* 세번째 이미지 */
    $('.small_con img').eq(2).click(function(){
        
        $('.big_con .color_title').text('저소득층 키자니아 직업체험');
        
        $('.big_con .text').text('은 저소득층 어린이들이 평소에 접할 수 없는 직업 체험 기회를 제공하고 올바른 직업관 형성과 미래 진로에 도움을 주고자 기획된 프로그램입니다. 또한 키자니아 내에 ‘동아제약 가그린 치과’ 코너에서 어린이들이 구강 질환을 살펴보고 이를 예방해주는 올바른 칫솔질을 배우며 치과전용 전문 의료기기를 이용해 가상의 마네킹 환자의 충치와 치석을 치료하는 시간도 갖습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big_3.jpg'
        });
        
    });
    
    /* 네번째 이미지 */
    $('.small_con img').eq(3).click(function(){
        
        $('.big_con .color_title').text('풀려라 자원봉사');
        
        $('.big_con .text').text('는 자원봉사자들의 건강을 생각하며 이들의 활동을 응원하는 캠페인입니다. 특히 2018년부터 ‘어떤 버스’라는 2030세대의 봉사 커뮤니티를 중심으로 테마별 봉사활동을 통해 즐거운 나눔을 이어가고 있으며 자원봉사자들에게는 박카스, 모닝케어 등 동아제약의 주력 제품을 지원하며 이들과 상호 신뢰관계를 쌓아가고 있습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big_4.jpg'
        });
        
    });
    
    
    /* 다섯번째 이미지 */
    $('.small_con img').eq(4).click(function(){
        
        $('.big_con .color_title').text('캄보디아 헤브론 선교병원');
        
        $('.big_con .text').text('은 2007년 캄보디아 프놈펜에 설립되어 질병으로 고통받는 캄보디아인들에게 의술을 통한 선교활동을 하고 있습니다. 동아쏘시오홀딩스는 그동안 캄보디아에서 받은 사랑을 캄보디아 사회에 환원하고, 건강과 복지 향상에 이바지하고자 선교활동에 필요한 의약품 및 의료 물품, 교육, 연구, 진료 활동을 지원하고 있습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big_5.jpg'
        });
        
    });
    
    /* 여섯번째 이미지 */
    $('.small_con img').eq(5).click(function(){
        
        $('.big_con .color_title').text('미얀마 양곤국립약대 지원');
        
        $('.big_con .text').text('은 2014년부터 매년 수석문화재단에서 미얀마 양곤국립약대를 방문해 장학금을 전달하고 있습니다. 또한, 동아쏘시오그룹에서는 임직원들이 양곤국립약대 재학생들에게 약학 강의를 진행하고 있습니다.');
        
        $('.big_con .right').find('img').attr({
            src:'img/section_4_big_6.jpg'
        });
        
    });
    
    
    
    
    /* 메뉴 */
    
    $('#menu_wrap').css({
        top:-wh*2
    })
    
    $('#show_menu').click(function(){
            
        $('#menu_wrap').animate({
            top:0
        });
            
    });
    
    $('#menu_hide').click(function(){
        $('#menu_wrap').animate({
            top:-wh*2
        });
    });
    
    
    
    
    
    
    
    
    
});//ready_end
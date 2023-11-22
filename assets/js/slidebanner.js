// swiper 슬라이드
$(function(){
  var swiper = new Swiper('.slide1 ', {
     speed: 3000,//버튼을 슬라이드가 넘어가는 시간
     autoplay: {
         delay: 2500,//자동으로 넘어가기 전 머무르는 시간
         disableOnInteraction: false,
       },
       loop: true,//슬라이드 무한반복
       pagination: {//블릿 버튼
         el: '.slide1 .swiper-pagination',
         clickable: true,
       },
     });

  var swiper = new Swiper('.slide2 ', {
    speed: 3000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 1667,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
      },
      loop: true,//슬라이드 무한반복
      pagination: {//블릿 버튼
        el: '.slide2 .swiper-pagination',
        clickable: true,
      },
    });   

    // fade slider
    $('.fade').slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });

    // 탭 메뉴
    $(function(){
      $('.tabcontent > div').hide();
      $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
      }).filter(':eq(0)').click();
    });

    // 아코디언 메뉴
    $(".que").click(function() {
      $(this).next(".anw").stop().slideToggle(300);
     $(this).toggleClass('on').siblings().removeClass('on');
     $(this).next(".anw").siblings(".anw").slideUp(300); // 1개씩 펼치기
   });
   

   //sns 
   $(function(){
    // 	이미지 클릭시 해당 이미지 모달
      $(".img").click(function(){
        $(".modal").show();
        // 해당 이미지 가겨오기
        var imgSrc = $(this).children("img").attr("src");
        var imgAlt = $(this).children("img").attr("alt");
        $(".modalBox img").attr("src", imgSrc);
        $(".modalBox img").attr("alt", imgAlt);
      
      //.modal안에 button을 클릭하면 .modal닫기
      $(".modal button").click(function(){
        $(".modal").hide();
      });
      
      //.modal밖에 클릭시 닫힘
      $(".modal").click(function (e) {
        if (e.target.className != "modal") {
          return false;
        } else {
          $(".modal").hide();
        }
        });
      });
    });

    //map
    AOS.init({
      duration: 1200 //aos 나타나는 속도
    })
    
    //top button
    $(window).scroll(function() {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('.top').fadeIn();
      } else {
          $('.top').fadeOut();
      }
    });
  
    $( '.top' ).click( function() {
      $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
      return false;
    } );

    $(function() {

      $(document).ready(function() {
    
        var scrollOffset = $('.topmenu').offset();
    
        $(window).scroll(function() {
          if ($(document).scrollTop() > scrollOffset.top) {
            $('.topmenu').addClass('fixed');
            $('#about').addClass('margin');
            $('#program').addClass('margin');
            $('#cumunity').removeClass('margin');
            $('#event').removeClass('margin');
            $('#location').removeClass('margin');
          }
          else {
            $('.topmenu').removeClass('fixed');
            $('#about').removeClass('margin');
            $('#program').removeClass('margin');
            $('#cumunity').removeClass('margin');
            $('#event').removeClass('margin');
            $('#location').removeClass('margin');
          }
        });
      });
    });
  

    (function(){

	
      $.fn.smint = function( options ) {
    
        // 사용자 div에 클래스 추가
        $(this).addClass('smint')
    
        var settings = $.extend({
                'scrollSpeed '  : 500
                }, options);
    
    
        return $('.smint a').each( function() {
    
                
          if ( settings.scrollSpeed ) {
    
            var scrollSpeed = settings.scrollSpeed
    
          }
             $(this).on('click', function(e){
    
    
            // 사용자 div의 높이를 가져옵니다. 이것은 스크롤을 해제하는 데 사용되므로 emenu가 처음 스크롤 한 div의 내용과 겹치지 않습니다.
            var selectorHeight = $('.smint').height();   
    
                // 클릭하면 페이지 점프를 만드는 빈 hrefs 중지
            e.preventDefault();
    
            // 방금 클릭 한 버튼의 ID를 가져옵니다.
             var id = $(this).attr('id');
            
            // 버튼 ID에서 탐색 메뉴의 높이를 뺀 것과 일치하는 div 클래스의 상단에서 거리를 가져옵니다. 이것은 탐색이 처음에 내용과 겹치지 않음을 의미합니다.
            var goTo =  $('div.'+ id).offset().top -selectorHeight;
            
            // 페이지를 원하는 위치로 스크롤하십시오!
            $("html, body").animate({ scrollTop: goTo }, scrollSpeed);
          });	          
        });
      }
    })();
    
    $(document).ready(function () {
      $('.nav').smint({
          'scrollSpeed': 1000, //스크롤 속도
      });
    });
});
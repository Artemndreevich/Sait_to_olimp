$(document).ready(function() {

    // меню
    var menu = $('#menu');
    menu.hide().slideDown(2000);
    $('.plitka_to_text1').hide();
    $('.plitka_to_text2').hide();
    $('.plitka_to_text3').hide();
    $('.plitka_to_text4').hide();
    $('.plitka_to_text5').hide();

    $('#b1block').mouseover(function(){
        $('.plitka_to_text1').fadeIn(500);
        //$('.on-plitka-text1').hide();

       
    });
    
    $('#b1block,.on-plitka-text1').mouseout(function(){
        setTimeout(hidde1,500);
    });
    function hidde1(){
        $('.plitka_to_text1').fadeOut(100);
        
    }
    $('.on-plitka-text2,#b2block').mouseover(function(){
        $('.plitka_to_text2').fadeIn(500);
    });
    
    $('#b2block').mouseout(function(){
        setTimeout(hidde2,500);
    });
    function hidde2(){
        $('.plitka_to_text2').fadeOut(100);
    }
    $('.on-plitka-text3,#b3block').mouseover(function(){
        $('.plitka_to_text3').fadeIn(500);
    });
    
    $('#b3block').mouseout(function(){
        setTimeout(hidde3,1000);
    });
    function hidde3(){
        $('.plitka_to_text3').fadeOut(100);
    }
    $('.on-plitka-text4,#b4block').mouseover(function(){
        $('.plitka_to_text4').fadeIn(500);
    });
    
    $('#b4block').mouseout(function(){
        setTimeout(hidde4,500);
    });
    function hidde4(){
        $('.plitka_to_text4').fadeOut(100);
    }
    $('.on-plitka-text5,#b5block').mouseover(function(){
        $('.plitka_to_text5').fadeIn(500);
    });
    
    $('#b5block').mouseout(function(){
        setTimeout(hidde5,500);
    });
    function hidde5(){
        $('.plitka_to_text5').fadeOut(100);
    }



    var $page = $('html, body');
$('a[href="#main"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
});


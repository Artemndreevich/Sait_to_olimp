$(document).ready(function() {

    // меню
    var menu = $('#menu');
    menu.hide().slideDown(2000);
    $('.plitka_to_text1').hide();
    $('.plitka_to_text2').hide();
    $('.plitka_to_text3').hide();
    $('.plitka_to_text4').hide();
    $('.plitka_to_text5').hide();

    $('#b1block,.on-plitka-text1').mouseover(function(){
       $('.plitka_to_text1').fadeIn(500);

    });
    
    $('#b1block').mouseout(function(){
        setTimeout(hidde1,1000);
    });
    function hidde1(){
        
    }
    $('.on-plitka-text2,#b2block').mouseover(function(){
        $('.plitka_to_text2').fadeIn(500);
    });
    
    $('#b2block').mouseout(function(){
        setTimeout(hidde2,500);
    });
    function hidde2(){
    }
    $('.on-plitka-text3,#b3block').mouseover(function(){
        $('.plitka_to_text3').fadeIn(500);
    });
    
    $('#b3block').mouseout(function(){
        setTimeout(hidde3,1000);
    });
    function hidde3(){
    }
    $('.on-plitka-text4,#b4block').mouseover(function(){
        $('.plitka_to_text4').fadeIn(500);
    });
    
    $('#b4block').mouseout(function(){
        setTimeout(hidde4,500);
    });
    function hidde4(){
    }
    $('.on-plitka-text5,#b5block').mouseover(function(){
        $('.plitka_to_text5').fadeIn(500);
    });
    
    $('#b5block').mouseout(function(){
        setTimeout(hidde5,500);
    });
    function hidde5(){
    }



    var $page = $('html, body');
$('a[href="#main"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.help-inform1').hide();
$('.help-inform2').hide();
$('.help-inform3').hide();
$('.help-inform4').hide();
$('.help-inform5').hide();
$('.help-inform6').hide();
$('.help-inform7').hide();
$('.help-inform8').hide();
$('.help-inform9').hide();
$('.help-inform10').hide();

$('#sun').mouseover(function(){
    $('.help-inform1').fadeIn(400);
});
$('#sun').mouseout(function(){
    $('.help-inform1').fadeOut(400);
});


$('#mercury').mouseover(function(){
    $('.help-inform2').fadeIn(400);
});
$('#mercury').mouseout(function(){
    $('.help-inform2').fadeOut(400);
});


$('#vener').mouseover(function(){
    $('.help-inform3').fadeIn(400);
});
$('#vener').mouseout(function(){
    $('.help-inform3').fadeOut(400);
});


$('#earthh').mouseover(function(){
    $('.help-inform4').fadeIn(400);
});
$('#earthh').mouseout(function(){
    $('.help-inform4').fadeOut(400);
});


$('#marss').mouseover(function(){
    $('.help-inform5').fadeIn(400);
});
$('#marss').mouseout(function(){
    $('.help-inform5').fadeOut(400);
});


$('#Jupiter').mouseover(function(){
    $('.help-inform6').fadeIn(400);
});
$('#Jupiter').mouseout(function(){
    $('.help-inform6').fadeOut(400);
});


$('#saturN').mouseover(function(){
    $('.help-inform7').fadeIn(400);
});
$('#saturN').mouseout(function(){
    $('.help-inform7').fadeOut(400);
});
$('#uraN').mouseover(function(){
    $('.help-inform8').fadeIn(400);
});
$('#uraN').mouseout(function(){
    $('.help-inform8').fadeOut(400);
});
$('#neptuN').mouseover(function(){
    $('.help-inform9').fadeIn(400);
});
$('#neptuN').mouseout(function(){
    $('.help-inform9').fadeOut(400);
});
$('#sun').mouseover(function(){
    $('.help-inform10').fadeIn(400);
});
$('#sun').mouseout(function(){
    $('.help-inform10').fadeOut(400);
});



});


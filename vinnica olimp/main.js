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
// ССЫЛКИ

var $page = $('html, body');
$('a[href="#p1"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$('a[href="#p2"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$('a[href="#p3"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});
$('a[href="#p4"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


var button = $('#bbb');
var photo=$('#photo_helper');
var  textdiv=$('#helper');
var tru = $('.true');
var fals= $('.false');
var z42 = $('.z42');
var help =$('#forhelp');
/*photo.hide();
    textdiv.hide();
    button.hide();*/
$(button).click(function(){
    photo.fadeOut(700);
    textdiv.fadeOut(700);
    button.fadeOut(700);
});/*
tru.click(function(){
 //   textdiv.html('<p id="forhelp">   </p> ');
 help.html('<h2 class="text"> Ви дали правильну відповідь  </h2> ');
 photo.fadeIn(700);
 textdiv.fadeIn(700);
 button.fadeIn(700);
});*/
$('#dozt').click(function(){
    textdiv.html('<p id="forhelp"> <span class="grenn" > Вірно</span> <br> Ви можете перейти на  <a class="go" href="rest.html" title="Артем.Дозвілля" target="_blanc">Артем.Дозвілля</a> . Там Ви знайдете , чим можна зайнятися , коли нічого робити</p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn++;
});
$('#dozf').click(function(){
    textdiv.html('<p id="forhelp"> <span class="redd" > Невірно</span> <br>Артем.Дозвілля - один з сервісів нашог банку. Ви можете перейти на цю <a class="go" target="_blanc" title="Артем.Дозвілля" href="rest.html">Артем.Дозвілля</a> . Там Ви знайдете , чим можна зайнятися , коли нічого робити</p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn--;
});
$('#twof').click(function(){
    textdiv.html('<p id="forhelp"> <span class="grenn" > Вірно</span> <br>А й справді,  якщо десять разів перемножити 2 на себе , то вйде не 1000, а 1024. А ось і посилання на Вікіпедію   <a class="go"  target="noname" href="https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D1%96%D0%BD%D1%8C"> Вікіпедію</a>, де ви можете почитати про степінь </p>' );
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn++;
});
$('#twot').click(function(){
    textdiv.html('<p id="forhelp"> <span class="redd" > Невірно</span> <br>Адже якщо перемножити 2 на себе 10 разів, вийде 1024, а не 1000 А ось і посилання на Вікіпедію   <a class="go"  target="noname" href="https://uk.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BF%D1%96%D0%BD%D1%8C"> Вікіпедію</a>, де ви можете почитати про степінь </p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn--;
});
$('#pdff').click(function(){
    textdiv.html('<p id="forhelp"> <span class="grenn" > Вірно</span> <br>Це розширення </p>' );
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn++;
});
$('#pdft').click(function(){
    textdiv.html('<p id="forhelp"> <span class="redd" > Невірно</span> <br>Це розширення, адже там стоїть крапка. </p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn--;
});
$('#hdf').click(function(){
    textdiv.html('<p id="forhelp"> <span class="grenn" > Вірно</span> <br> Адже це по-суті більше схоже на жарт </p>' );
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn++;
});
$('#hdt').click(function(){
    textdiv.html('<p id="forhelp"> <span class="redd" > Невірно</span> <br>У жорсткого  диску немає ядрів, а блок живлення грає ключову роль, у компьютері, без нього  не можна запустити нічого </p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn--;
});
$('#zipt').click(function(){
    textdiv.html('<p id="forhelp"> <span class="grenn" > Вірно</span> <br> Це досить старий вірус, про нього також написана стяття на порталі <a class="go" target="noname" title="Артем.Дозвілля" href="zip42.html">Артем.Дозвілля</a> . Там Ви знайдете про нього багато інформації , а також дещо інше</p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn++;
});
$('#zipf').click(function(){
    textdiv.html('<p id="forhelp"> <span class="redd" > Невірно</span> <br>Це -таки вірус, про нього також написана стяття на порталі <a class="go" target="noname" title="Артем.Дозвілля" href="zip42.html">Артем.Дозвілля</a> . Там Ви знайдете про нього багато інформації , а також дещо інше</p>');
    photo.fadeIn(700);
    textdiv.fadeIn(700);
    button.fadeIn(700);
    percent_dovn--;

});
$('#actionn').click(function(){
     if(percent_dovn == -5 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix-5").fadeIn(1000).css("z-index",'20');


    }
    if(percent_dovn == -4 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix-4").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn == -3 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix-3").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn == -2 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix-2").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn == -1 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix-1").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn ==  0){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix0").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn == 1 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix1").fadeIn(1000).css("z-index",'20');


    }
    if(percent_dovn == 2 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Мало</span> <br>Ви набрали замало балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix2").fadeIn(1000).css("z-index",'20');

    }


    if(percent_dovn==3 ){
        textdiv.html('<p id="forhelp"> <span class="redd" > Малувато</span> <br>Ви набрали невелику кількість балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix3").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn==4){
        textdiv.html('<p id="forhelp"> <span class="redd" > Багато</span> <br>Ви набрали багато балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix4").fadeIn(1000).css("z-index",'20');

    }
    if(percent_dovn==5){
        textdiv.html('<p id="forhelp"> <span class="redd" > Багато</span> <br>Ви набрали багато балів, а саме '+percent_dovn+ '</p>');
        photo.fadeIn(700);
        textdiv.fadeIn(700);
        button.fadeIn(700);
        $("#fix5").fadeIn(1000).css("z-index",'20');

    }
    
});
});


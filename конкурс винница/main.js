$(document).ready(function() {

    // меню
    var menu = $('#menu');
    menu.hide().slideDown(2000);
    $('.plitka_to_text').hide();
    $('#b1block').mouseover(function(){
        $('.plitka_to_text').html('rsdgrdg <span class="important_span">ghghfd</span>')
        $('.plitka_to_text').fadeIn(500);
    });
    
    $('#b1block').mouseout(function(){
        setTimeout(hide,1000);
    });
    function hide(){
        $('.plitka_to_text').fadeOut(100);
    }
});
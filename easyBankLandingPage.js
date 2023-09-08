$('.hamburger').click(function () { 
    $('header div ul').addClass('ham');
    // $('header div ul').animate({top: '0'});
    
});
$('.close').click(function () { 
    // $('header div ul').animate({top: '-100%'}, '0.7s');
    $('header div ul').removeClass('ham');
    // $('header div ul').css('position', 'relative');
});
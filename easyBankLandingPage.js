$('.hamburger').click(function () { 
    $('header div ul').css('right', '0');
    $('header div ul li').css('right', '0');
});
$('.close').click(function () { 
    $('header div ul').css('right', '-100%');
});
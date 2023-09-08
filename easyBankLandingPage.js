$('.hamburger').click(function () { 
    $('header div ul').css('top', '0');
});
$('.close').click(function () { 
    $('header div ul').css('top', '-100%');
    // $('header div ul').css('position', 'relative');
});
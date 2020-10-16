$('#menu-btn').click(function() {
    if ($('#menu').css('display') == "block") {
        $('#menu').hide();
    } else {
        $('#menu').show();
    }

});

$('#menu-btn').hover(function() {
    $(this).css("color", "white");
}, function() {
    $(this).css("color", "gray");
});
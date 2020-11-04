$('#menu-btn').click(function() {
    if ($('#menu').css('display') == "block") {
        $('#menu').hide();
    } else {
        $('#menu').show();
    }

});

function gotoResume(){
   window.location = "/resume.html";
}
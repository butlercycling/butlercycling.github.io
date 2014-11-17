$(document).ready(function(){

        var menutog = function () {
            if ($("#menu-toggle").hasClass("active")){
                $(".nav-links").css("visibility", "hidden");
            }
            else {
                $(".nav-links").css("visibility", "visible");
            }
            $("#menu-toggle").toggleClass("active");

        } 
        if ($(document).width() < 900) {
            $(".nav-links").before('<i id="menu-toggle" class="fa fa-bars"></i>');
            $('#menu-toggle').on('click', menutog);
        }
        $(window).resize(function() {
            if ($(document).width() < 900 && !$('#menu-toggle').length) {
                $(".nav-links").before('<i id="menu-toggle" class="fa fa-bars"></i>');
                $('#menu-toggle').on('click', menutog);
            }
            else if ($(document).width() > 900) {
                $('#menu-toggle').remove();
                $(".nav-links").css("visibility", "");
            }
        });
});

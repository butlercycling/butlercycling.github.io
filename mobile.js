$(document).ready(function(){

        var toggle_nav = function () {
            $("#mainnav ul").toggleClass("active");
        }
        var init_mobile_nav = function () {
            if ($(document).width() <= 900 && !$('#menu-toggle').length) {
                $("#mainnav ul").before('<i id="menu-toggle" class="fa fa-bars"></i>');
                $('#menu-toggle').on('click', toggle_nav);
                $('nav ul a').on('click', toggle_nav);
            }
            else if ($(document).width() > 900) {
                $('#menu-toggle').remove();
                $('nav ul a').off('click', toggle_nav);
                $("#mainnav ul").css("visibility", "");
            }
        }
        init_mobile_nav();
        $(window).resize(init_mobile_nav);
});

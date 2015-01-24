$(document).ready(function(){

       $("nav a, .down-arrow a").on("click", function() {
            var h = this.hash
            if (h == ""){
                   h = "#home";
            }
            var pos = $(h).offset().top;
            $('html, body').animate({scrollTop:pos}, 'slow',function(){
                           window.location.hash = h;
            });
            return false;
        });

        $(document).scroll(function(){
            var t = $("#team").offset().top-36;
            var diff = $(window).scrollTop();
            console.log(t+" "+diff);
            if (diff >= t) {
                $("nav").addClass('topnav');
            }
            else if (diff < t) {
              $("nav").removeClass('topnav');
            }
        });
});

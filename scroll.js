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
            var diff = $(window).scrollTop();
            if (diff < 60 && diff >= 0) {
                $("nav").css('zoom', ((100-(diff/3))/100));
            }
            else if (diff > 0) {
              $("nav").css('zoom', .8);
            }
        });	
});

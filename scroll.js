$(document).ready(function(){
        $("nav a").on("click", function() { 
               var pos = $(this.hash).offset().top; 
               $('html, body').animate({scrollTop:pos}, 'slow');
               return false; 
        });	
});

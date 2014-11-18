$(document).ready(function(){
    $('#roster-left li').on('click', function() {
                                          $('.selected').removeClass('selected');
                                          $(this).addClass('selected');
                                          $("#roster-right h3").html($(this).html());
                                          $("#roster-right .bio span").html("No Bio");
                                          var fname = $(this).html().toLowerCase().replace(/ /g, '');
                                          console.log(fname);
                                          $.ajax( "data/"+fname+".txt" )
                                                    .success(function(data) {
                                                        $("#roster-right .bio span").html(data);
                                                    })
                                                    .fail(function() {
                                                        $("#roster-right .bio span").html("");
                                                        console.log("error: couldn't load "+fname+".txt");
                                                    });
                                        
    });
});

$(document).ready(function(){
    $('#roster-left li').on('click', function() {
                                          $('.selected').removeClass('selected');
                                          $(this).addClass('selected');
                                          var fname = $(this).children('span').html().toLowerCase().replace(/ /g, '');
                                          $.ajax( "data/"+fname+".txt" )
                                                    .success(function(data) {
                                                        $("#roster-right .bio p").html(data);
                                                    })
                                                    .fail(function() {
                                                        $("#roster-right .bio p").html("");
                                                        console.log("error: couldn't load "+fname+".txt");
                                                    })
                                                    .always(function() {
                                                        $("#roster-right h3").html($(this).html());
                                                    });
    });
});

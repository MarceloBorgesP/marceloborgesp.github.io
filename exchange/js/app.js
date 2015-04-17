var main = function() {
	//$( ".col-xs-10" ).load("content.html");
	$(".overlap").hide();

	$( ".col-xs-10" ).load( "countries/ireland.html");

	var country;
    //loads country's page after the link is clicked
    $(".list-group-item").click(function(){

        $(this).css({ "background-color": "#FF7E62"});

        $("#"+country).css({ "background-color": "#EEEEEE"});


        country = $(this).attr('id');

        if(!$(this).hasClass("city")) {
            $('.city').addClass('hide');
        }

        if(country=='scotland') {
            $('#edinburgh').toggleClass('hide').css({ "background-color": "#B5B1B1"});
            $('#glasgow').toggleClass('hide').css({ "background-color": "#B5B1B1"});
            
        } 
        else {
            $( ".col-xs-10" ).load("countries/" + country + ".html");
        }

    });

    };

$(document).ready(main);
	
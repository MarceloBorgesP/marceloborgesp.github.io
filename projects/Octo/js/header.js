
var count = 0;    
    $("#arrow").click(function() {
	if(count==0) {
		$("#li-quem-somos").append("<ul class='quem-somos animated fadeIn'><li><a href='quem-somos.html#missao'>Missão</a></li><li><a href='quem-somos.html#visao'>Visão</a></li><li><a href='quem-somos.html#valores'>Valores</a></li> </ul>");
		$('#arrow').toggleClass("fa-caret-square-o-down");
        $('#arrow').toggleClass("fa-caret-square-o-up");
        count = 1;
	} else {
		$(".quem-somos").remove();
        $('#arrow').toggleClass("fa-caret-square-o-down");
        $('#arrow').toggleClass("fa-caret-square-o-up");
		count = 0;
	}
});

$("#a-contato").click(function () {
        $('#menu').css( "display" , "none" );
        $('header').css( "height" , "0" );
        $('button').addClass('fa-bars');
        $('button').removeClass('fa-times');
        header = false;
});


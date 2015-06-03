var main = function () {
  	$("header").load("header/header.html");
  	$("footer").load("footer/footer.html");

};

$(document).ready(main);

function year () {
	var d = new Date();
	var n = d.getFullYear();

	document.getElementById('year').innerHTML = '' + n;
};

year();

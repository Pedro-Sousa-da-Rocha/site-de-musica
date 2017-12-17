$(document).ready(function () {
	$(window).scroll(function () {
		$('.navbar-inverse').toggleClass("navbar-inverse-non-trasparent", ($(window).scrollTop() > 500));
		//Troca a classe da barra de navegação quando o scroll passa de 500px; 
     });
});

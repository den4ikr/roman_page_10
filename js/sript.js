$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header__list").toggleClass("active");
		$("body").toggleClass("lock");
		$(".main__header-title").toggleClass("active");
		$(".main__header-btn").toggleClass("active");
	})
})
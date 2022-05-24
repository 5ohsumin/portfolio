
$(function(){
	var n=0;
	$(".slider_moving li").eq(n).addClass("current");


	$(".pagination li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		$(this).addClass("current");
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});

	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
		}
		else{
			n=3;
		}
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});
	$(".right").click(function(e){
		e.preventDefault();
		if(n < 3){
			n=n+1;
		}
		else{
			n=0;
		}
		$(".slider_moving li").removeClass("current");
		$(".slider_moving li").eq(n).addClass("current");
	});

	/*
	$(".menu").hover(
		function(){
			$(".menu").addClass("over");
		},
		function(){
			$(".menu").removeClass("over");
		}
	);
	*/
	$("nav > ul > li").hover(
		function(){
			$(".menu").addClass("over");
		},
		function(){
			$(".menu").removeClass("over");
		}
	);
	$("nav > ul > li").focusin(function(){
		$(".menu").addClass("over");
		$(this).addClass("over");
	});
	$("nav > ul > li").focusout(function(){
		$(".menu").removeClass("over");
		$(this).removeClass("over");
	});
});

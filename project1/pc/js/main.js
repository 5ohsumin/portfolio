$(function(){
	$("nav > ul > li").hover(
		function(){
			$(".top").addClass("over");
		},
		function(){
			$(".top").removeClass("over");
		}
	);
	$("nav > ul > li").focusin(function(){
		$(".top").addClass("over");
		$(this).addClass("over");
	});
	$("nav > ul > li").focusout(function(){
		$(".top").removeClass("over");
		$(this).removeClass("over");
	});

	var n=0;
	var t=0;
	var pos=0;
	var timer=0;
	var winHalf;

	$(window).scroll(function(){
		clearTimeout(timer);

		timer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t < $("#page1").offset().top-winHalf){
				n=0;
			}
			else if(t < $("#page2").offset().top-winHalf){
				n=1;
			}
			else if(t < $("#page3").offset().top-winHalf){
				n=2;
			}
			else{
				n=3;
			}
			// console.log("n : "+n);

			$("#fp-nav li").removeClass("active");
			$("#fp-nav li").eq(n).addClass("active");
		}, 100);
	});
	$(window).resize(function(){
		winHalf=$(window).height()/2;
		$(window).trigger("scroll");
	});
	$(window).trigger("resize");

	$("#fp-nav li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		if(n == 0){
			pos=0;
		}
		else{
			pos=$("#page"+n).offset().top;
		}

		$("html").animate({scrollTop:pos}, 800);
	});
});
$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(".menu").addClass("active");
		},
		function(){
			$(".menu").removeClass("active");
		}
	);
	$("#gnb > ul > li:first-child > a").focusin(function(){
		$(".menu").addClass("active");
	});
	$("#gnb li:last-child li:last-child a").focusout(function(){
		$(".menu").removeClass("active");
	});
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parent().parent().removeClass("active");
	});
  var swiper=new Swiper(".mainSwiper", {
		speed: 1200,
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		// loop: true, // modified
		autoplay: {
			delay: 5000,
		},

		pagination: {
			el: ".swiper-pagination",
		},
	});

	var listN=0;

	$(".notice .title li").eq(listN).addClass("active");
	$(".notice .list div").eq(listN).addClass("active");

	$(".notice .title li").click(function(){
		listN=$(this).index();
		$(".notice .title li").removeClass("active");
		$(".notice .title li").eq(listN).addClass("active");
		$(".notice .list div").removeClass("active");
		$(".notice .list div").eq(listN).addClass("active");
	});


	var familyPos=0;
	var bannerWidth=164;

	$(".prev").click(function(e){
		e.preventDefault();
		rightMoving();
	});
	$(".next").click(function(e){
		e.preventDefault();
		leftMoving();
	});
	function leftMoving(){
		familyPos-=bannerWidth;
		$(".site_wrapper ul").animate({left:familyPos}, 500, function(){
			$(this).append($(".site_wrapper ul li:first-child"));
			familyPos+=bannerWidth;
			$(this).css({left:familyPos});
		});
	}
	function rightMoving(){
		$(".site_wrapper ul").prepend($(".site_wrapper ul li:last-child"));
		familyPos-=bannerWidth;
		$(".site_wrapper ul").css({left:familyPos});
		familyPos+=bannerWidth;
		$(".site_wrapper ul").animate({left:familyPos}, 500);
	}
});

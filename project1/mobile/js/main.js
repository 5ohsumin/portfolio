$(function(){
	$("#header .tab").click(function(e){
		e.preventDefault();
		$("body").toggleClass("fixed");
		$(".menu").toggleClass("active");
		$(".tab").toggleClass("active");

		if($(".tab").hasClass("active") == false){
			$("#gnb ul ul").hide();
			$("#gnb > ul > li").removeClass("active");
		}
	});

	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});

	var swiper=new Swiper("#main .swiper-container", {
		pagination: {
			el: "#main .swiper-pagination",
			type: "fraction"
		},
		on: {
			init: function(){
				setTimeout(function(){
					$(".main_text").addClass("active");
				}, 1000);
			}
		}
	});



	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		slidesPerView: 1.5, // modified
		spaceBetween: 10, // modifed
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		breakpoints: { // added
			640: {
				slidesPerView: 3.5,
				spaceBetween: 10
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 10
			}
		}
	});

	var n=0;
	var pos=0;
	$(".controller li").eq(n).addClass("active");
	$(".gallery1 li").eq(n).addClass("active");
	$(".controller li").click(function(e){
		e.preventDefault();
		$(".controller li").removeClass("active");
		$(this).addClass("active");

		n=$(this).index();
		$(".gallery1 li").removeClass("active");
		$(".gallery1 li").eq(n).addClass("active");

		pos=n*(-1)*150;
		$(".gallery2 ul").css({left:pos});
	});

	$("#page6 .box").click(function(){
		$("#page6 .box").removeClass("active");
		$(this).addClass("active");
	});


});

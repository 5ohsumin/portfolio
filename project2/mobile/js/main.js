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
			type: "progressbar"
		},
			navigation: {
				nextEl: "#main .swiper-button-next",
				prevEl: "#main .swiper-button-prev"
			},
		on: {
			init: function(){
				setTimeout(function(){
					$(".main_text").addClass("active");
				}, 1000);
			}
		},
				slideChange: function(){
					var currentSlider=sub_swiper.activeIndex;
					currentSlider+=1;
					$(".main_slider .num").text(currentSlider);
				}

	});
	// var sub_swiper=new Swiper("#main .swiper-container", {
	// 	slidesPerView: 1.5,
	// 	spaceBetween: 10,
	// 	pagination: {
	// 		el: "#main .swiper-pagination",
	// 		type: "progressbar"
	// 	},
	// 	navigation: {
	// 		nextEl: "#main .swiper-button-next",
	// 		prevEl: "#main .swiper-button-prev"
	// 	},
	// 	breakpoints: {
	// 		640: {
	// 			slidesPerView: 3.5,
	// 			spaceBetween: 10
	// 		},
	// 		920: {
	// 			slidesPerView: 5,
	// 			spaceBetween: 10
	// 		}
	// 	},
	// 	on: {
	// 		init: function(){
	// 			var subSliderLength=$("#main .swiper-slide").length;
	// 			$("#main .tot").text("/ "+subSliderLength);
	// 		},
	// 		slideChange: function(){
	// 			var currentSlider=sub_swiper.activeIndex;
	// 			currentSlider+=1;
	// 			$("#main .num").text(currentSlider);
	// 		}
	// 	}
	// });




	var sub_swiper=new Swiper("#sub_slider .swiper-container", {
		effect: "flip",
		grabCursor: true,
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},
		navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
	});

	var sub_swiper=new Swiper("#sub_slider2 .swiper-container", {
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

});

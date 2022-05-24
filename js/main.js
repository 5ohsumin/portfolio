$(function(){
	// 1) 페이지 이동 관련
	var scrollT=0;
	var pageN=0;
	var targetY=0;
	var winHalf;
	var categoryFlag=false;
    var count=1;
	var total=4;


	$(".floating_menu li").eq(pageN).addClass("active");
	$("#header .menu li").eq(pageN).addClass("active");
	$("#start .controller li").eq(pageN).addClass("active");

	$(window).scroll(function(){
		scrollT=$(window).scrollTop();

		if(scrollT <= $("#page1").offset().top-winHalf){
			pageN=0;
		}
		else if(scrollT <= $("#page2").offset().top-winHalf){
			pageN=1;
		}
		else if(scrollT <= $("#page3").offset().top-winHalf){
			pageN=2;
		}
		else if(scrollT <= $("#page4").offset().top-winHalf){
			pageN=3;
		}
		else{
			pageN=4;
		}
		// console.log("pageN : "+pageN);

		$(".floating_menu li").removeClass("active");
		$(".floating_menu li").eq(pageN).addClass("active");
		$("#header .menu li").removeClass("active");
		$("#header .menu li").eq(pageN).addClass("active");
		$("#start .controller li").removeClass("active");
		$("#start .controller li").eq(pageN).addClass("active");

		if(pageN == 1 || pageN == 3){
			$("#start .controller").addClass("dark");
			$("#header .menu").addClass("dark");
			$(".fix_logo").addClass("dark");
			$(".fix_tab").addClass("dark");
			$(".fix_copy").addClass("dark");
			$(".fix_contact").addClass("dark");
		}
		else{
			$("#start .controller").removeClass("dark");
			$("#header .menu").removeClass("dark");
			$(".fix_logo").removeClass("dark");
			$(".fix_tab").removeClass("dark");
			$(".fix_copy").removeClass("dark");
			$(".fix_contact").removeClass("dark");
		}

		if(categoryFlag){
			return;
		}
		else{
			if(pageN == 0){
				$("#start").addClass("active");
			}
			else{
				$("#page"+pageN).addClass("active");

				if(pageN == 4){
					categoryFlag=true;
				}
			}
		}
	});

	// 2) 화면 크기 조정 관련
	$(window).resize(function(){
		winHalf=$(window).height()/2;
	});

	$(window).trigger("resize");
	$(window).trigger("scroll");

	// 3) 탭 이동 관련
	$(".fix_tab").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active")){
			$("body").removeClass("fixed");
			$(this).removeClass("active");
			$(".floating_menu").removeClass("active");
		}
		else{
			$("body").addClass("fixed");
			$(this).addClass("active");
			$(".floating_menu").addClass("active");
		}
	});
	$("#header .menu li, #start .controller li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("html").animate({"scrollTop":targetY}, 300);
	});
	$(".floating_menu li").click(function(e){
		e.preventDefault();
		pageN=$(this).index();

		if(pageN == 0){
			targetY=0;
		}
		else{
			targetY=$("#page"+pageN).offset().top;
		}

		$("body").removeClass("fixed");
		$(".fix_tab").removeClass("active");
		$(".floating_menu").removeClass("active");
		$("html").delay(400).animate({"scrollTop":targetY}, 300);
	});

	// 4) 비디오 구현 관련

	var videoN=0;
	var videoPath="";
	var videoUrl=["video1", "video2", "video3"];
	var svgOffset=[21, 49, 77];
	var videoTotal=videoUrl.length; // 3
	var video=document.getElementById("my_video");
	video.muted=true;


	function videoInterface(){
		video.pause();
		videoPath="video/"+videoUrl[videoN]+".mp4"; // video/video1.mp4
		$(".media video").attr({src:videoPath});
		$(".media video").hide().css({opactiy:0});
		video.play();

		setTimeout(function(){
			// $(".media video").show().animate({opacity:1}, 300);
			$(".media video").fadeIn(300);
		}, 500);
	}
	function controllerInterface(){
		$("#start .visual_wrap .controller_v").removeClass("active");
		$("#start .visual_wrap .controller_v .count li").removeClass("active");
		$("#start .visual_wrap .controller_v .count li").eq(videoN).addClass("active");
		$("#start .visual_wrap .controller_v svg").css({left:svgOffset[videoN]});

		setTimeout(function(){
			$("#start .visual_wrap .controller_v .num").html("<span>"+(videoN+1)+"</span> / "+videoUrl.length);
			$("#start .visual_wrap .controller_v").addClass("active");
		}, 80);
	}

	videoInterface();
	controllerInterface();

	video.addEventListener("ended", function(){
		if(videoN < (videoTotal-1)){
			videoN++;
		}
		else{
			videoN=0;
		}

		videoInterface();
		controllerInterface();
	});
	$(".controller_v .prev").click(function(e){
		e.preventDefault();

		if(videoN > 0){
			videoN--;
		}
		else{
			videoN=(videoTotal-1);
		}

		videoInterface();
		controllerInterface();
	});
	$(".controller_v .next").click(function(e){
		e.preventDefault();

		if(videoN < (videoTotal-1)){
			videoN++;
		}
		else{
			videoN=0;
		}

		videoInterface();
		controllerInterface();
	});



    $("#project1").addClass("active");

	$(".project .title").click(function(e){
		var portY;
		e.preventDefault();
		$(".project").removeClass("active");
		$(this).parents(".project").addClass("active");
		portY=$(this).parents(".project").offset().top;
		$("html").animate({scrollTop : portY}, 800);
	});

	if(isMobile){
		$("#project1 .project1").attr({href: "./project1/mobile/index.html"});
		$("#project2 .project2").attr({href: "./project2/mobile/index.html"});
	}
	else{
		$("#project1 .project1").attr({href: "./project1/pc/index.html"});
		$("#project2 .project2").attr({href: "./project2/pc/index.html"});
	}
});
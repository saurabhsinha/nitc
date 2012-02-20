$(function(){
			$('#slides').slides({
				preload: true,
				preloadImage: 'images/loading.gif',
				play: 3000,
				pause: 2500,
				hoverPause: true,
				effect:'prev',
			});
		});
$(function(){
	$("ul.dropdown li").hover(function(){
		$(this).addClass("hover");
		$('ul:first',this).css('visibility', 'visible');
		}, function(){
			$(this).removeClass("hover");
			$('ul:first',this).css('visibility', 'hidden');
			});
	$("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");
});

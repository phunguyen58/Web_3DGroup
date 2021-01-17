$(document).ready(
	function(){




		//sticky
		$(".about-section").waypoint(
			function(direction){
				if(direction == "down"){
					$("nav").addClass("sticky");
				}else{
					$("nav").removeClass("sticky");
				}
			},{
				offset: "600px"
			}
		)

		//Scroll Smooth
		$('a').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    event.preventDefault();
	});	
	}
)
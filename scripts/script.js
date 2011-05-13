
		$(document).ready(function() {
		
			//going on hover function//
			$('#goingson').click(function(){
				$('#greyout').fadeIn();
				$('#goingsonclick').fadeIn();
			});
			$('#goingsonclick').click(function(){
				$('#greyout').fadeOut();
				$('#goingsonclick').fadeOut();
			});
			
			$('#goingson').hover(function() {
				$('#gohover').fadeIn('fast');
				$('#gounhover').fadeOut('fast');
				
			}, function() {
				$('#gohover').fadeOut('fast');
				$('#gounhover').fadeIn('fast');
			});
			
			
			
			//mission function//
			
			$('#mission').click(function(){
				$('#greyout').fadeIn();
				$('#missionclick').fadeIn();
			});
			$('#missionclick').click(function(){
				$('#greyout').fadeOut();
				$('#missionclick').fadeOut();
			});
			
			$('#mission').hover(function() {
				$('#missionhover').fadeIn('fast');
				$('#missionunhover').FadeOut('fast');
				
			}, function() {
				$('#missionhover').fadeOut('fast');
				$('#missionunhover').fadeIn('fast');
			});
			
			//watch function//
			
			$('#watch').click(function(){
				$('#greyout').fadeIn();
				$('#watchclick').fadeIn();
				
			});
			$('#watchclick').click(function(){
				$('#greyout').fadeOut();
				$('#watchclick').fadeOut();
			});
			
			$('#watch').hover(function() {
				$('#watchhover').fadeIn('fast');
				$('#watchunhover').FadeOut('fast');
				
			}, function() {
				$('#watchhover').fadeOut('fast');
				$('#watchunhover').fadeIn('fast');
			});
		/*	
			//email function//
			$('#email').click(function(){
			$('#emailfancy').fadeIn("slow");
				$('#emailgrey').fadeIn("fast");
			$('#email').fadeOut("slow");
		});*/
		
		/*	$('#pow').click(function(){
				$('#emailfancy').fadeOut("slow");
				$('#emailgrey').fadeOut("slow");
				$('#email').fadeIn("slow");
			}); */
			
		/*	$('#emailgrey').click(function(){
				$('#emailfancy').fadeOut("slow");
				$('#emailgrey').fadeOut("slow");
				$('#email').fadeIn("slow");
			});
			*/
	/*		$('#email').hover(function() {
				$('#emailhover').fadeIn('fast');
				$('#emailunhover').FadeOut('fast');
				
			}, function() {
				$('#emailhover').fadeOut('fast');
				$('#emailunhover').fadeIn('fast');
			});*/

			//help functions//
		$('#help').hover(function() {
		$('#helphover').fadeIn('fast');
				$('#helpunhover').FadeOut('fast');
				
			}, function() {
				$('#helphover').fadeOut('fast');
				$('#helpunhover').fadeIn('fast');
			});
			
			//allies functions//
			
			$('#allies').click(function(){
				$('#greyout').fadeIn();
				$('#alliesclick').fadeIn();
			});
			$('#alliesclick').click(function(){
				$('#greyout').fadeOut();
				$('#alliesclick').fadeOut();
			});
			
			
			$('#allies').hover(function() {
				$('#allieshover').fadeIn('fast');
				$('#alliesunhover').FadeOut('fast');
				
			}, function() {
				$('#allieshover').fadeOut('fast');
				$('#alliesunhover').fadeIn('fast');
			});
			
			//contact functions//
			$('#contact').hover(function() {
				$('#contacthover').fadeIn('fast');
				$('#contactunhover').FadeOut('fast');
				
			}, function() {
				$('#contacthover').fadeOut('fast');
				$('#contactunhover').fadeIn('fast');
			});
			
			$('#twitter').hover(function() {
				$('#twitterhover').fadeIn('fast');
				$('#twitterunhover').FadeOut('fast');
				
			}, function() {
				$('#twitterhover').fadeOut('fast');
				$('#twitterunhover').fadeIn('fast');
			});
			
			$('#facebook').hover(function() {
				$('#facebookhover').fadeIn('fast');
				$('#facebookunhover').FadeOut('fast');
				
			}, function() {
				$('#facebookhover').fadeOut('fast');
				$('#facebookunhover').fadeIn('fast');
			});
			
		});*/
		//email submit starts here . . . //

			$('#emailform').submit(function() {
			               $("#message").html("<span class='error'>Signing you up...</span>");
			               $.ajax({
			                   url: 'scripts/store-address.php',
			                   data: 'ajax=true&email=' + escape($('#email').val()),
			                   success: function(msg) {
			                       $('#message').html(msg);
			                   }
			               });
			               return false;
			           });
			       });
			 
			

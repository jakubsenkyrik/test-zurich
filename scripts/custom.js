
// A "strict" version with one-sec intervals

function delayedElements() {
	window.setTimeout(showHeading, 1000);
	window.setTimeout(showContent, 2000);
	window.setTimeout(showTagline, 3000);
	window.setTimeout(showLogo, 4000);
	window.setTimeout(showCTA, 5000);
}

function showHeading() {
	$(".heading").show();
}

function showContent() {
	$(".content").show();
}

function showTagline() {
	$(".tagline").show();
}

function showLogo() {
	$(".logo").show();
}

function showCTA() {
	$(".cta").show();
}

delayedElements()


//  A "smooth" version utilising fadein below

/*	$( ".heading" ).fadeIn( 1000, function() {
    	$( ".content" ).fadeIn( 1000, function() {
    		$( ".tagline" ).fadeIn( 1000, function() {
    			$( ".logo" ).fadeIn( 1000, function() {
		    		$( ".cta" ).fadeIn( 1000 );
    			});
    		});
    	});
	});	*/

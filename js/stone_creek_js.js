jQuery(document).ready(function() {
	cta_text();	
});


function cta_text() {
	jQuery("#cta_row img").each(function() {
		var imageCaption = jQuery(this).attr("alt");
		if (imageCaption != '') {
		    // var imgWidth = jQuery(this).width();
		    // var imgHeight = jQuery(this).height();
		    // var halfheight = (imgHeight / 2);
		    // var position = jQuery(this).position();
		    // var positionTop = (position.top + halfheight);
		    jQuery("<span class='img-caption'>" + imageCaption + "</span>").css({
		        // "position": "absolute",
		        // "top": positionTop + "px",
		        // "left": "0",
		        // "right": "0",
		        // "text-align": "center",
		        // "width": imgWidth + "px"
		    }).insertAfter(this);
		}
	});
}

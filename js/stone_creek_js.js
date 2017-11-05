jQuery(document).ready(function() {
	cta_text();	
	footer_col_height();
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

function footer_col_height() {
	var last_col_height = jQuery('div.x-column.x-md.x-1-4.last').height();
	var new_col_height = (last_col_height + 83);
	jQuery('div.x-column.x-md.x-1-4:nth-child(2)').css({
		"height": new_col_height + "px"
	});jQuery('div.x-column.x-md.x-1-4:nth-child(3)').css({
		"height": new_col_height + "px"
	});
	console.log(new_col_height);
}

jQuery(document).ready(function() {
	cta_text();	
	footer_col_height();

	jQuery("a[href='#bottom']").click(function() {
	  jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "slow");
	  return false;
	});

});

jQuery( window ).resize(function() {
	cta_height();
});

jQuery( window ).load(function() {
	
  wrap_cta() ;
});
function cta_text() {
	jQuery("#cta_row img").each(function() {
		var imageCaption = jQuery(this).attr("alt");
		if (imageCaption != '') {
		    jQuery("<span class='img-caption'>" + imageCaption + "</span>").css({
		    }).insertAfter(this);
		}
	});
}

function footer_col_height() {
	var last_col_height = jQuery('div.x-column.x-md.x-1-4:nth-child(2)').height();
	var new_col_height = (last_col_height + 83);
	// jQuery('div.x-column.x-md.x-1-4:nth-child(2)').css({
	jQuery('div.x-column.x-md.x-1-4.last').css({
		"height": new_col_height + "px"
	});jQuery('div.x-column.x-md.x-1-4:nth-child(3)').css({
		"height": new_col_height + "px"
	});
}

function wrap_cta() {
	jQuery(".vt_col_1").each(function() {
		jQuery(this).wrapAll( "<div class='cta_vt' />");
	});
	cta_height();
}

function cta_height() {
	jQuery(".cta_vt").each(function() {
		var vt_img = jQuery(".vt_image");
		var vt_img_height = (vt_img).height();
		jQuery(this).css({
			"height": vt_img_height + "px"
		});
	});
}




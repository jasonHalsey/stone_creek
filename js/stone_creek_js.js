jQuery(document).ready(function() {
	cta_text();	
	footer_col_height();
	// header_height() ;

	jQuery("a[href='#bottom']").click(function() {
	  jQuery("html, body").animate({ scrollTop: jQuery(document).height() }, "slow");
	  return false;
	});
});

jQuery( window ).resize(function() {
	cta_height();
	header_height();
	footer_col_height();
});

jQuery( window ).load(function() {	
  header_height();
  wrap_cta();
  footer_col_height();
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

function header_height() {
	var header_height = jQuery('.x-navbar').height();
	jQuery('div.el1.x-section.head_email_form').css('margin-top',header_height);
	jQuery('div.el1.x-section.email_box').css('margin-top',header_height);
	jQuery('#rev_slider_3_1_forcefullwidth').css('margin-top',header_height);
	jQuery('.forcefullwidth_wrapper_tp_banner').css('margin-top',header_height);
	
	console.log('header_height = ' + header_height);
}

function footer_col_height() {
	var last_col_height = jQuery('div.x-column.x-md.x-1-4:nth-child(2)').height();
	console.log(last_col_height);
	var new_col_height = (last_col_height + 52);
	// var new_col_height = (last_col_height + 83);
	

	if (Modernizr.mq('only screen and (min-width: 1200px)')) {
		jQuery('div.x-column.x-md.x-1-4.last').css({
			"height": new_col_height + "px"
		});

		jQuery('div.x-column.x-md.x-1-4:nth-child(3)').css({
			"height": new_col_height + "px"
		});

	}else if (Modernizr.mq('only screen and (max-width: 1199px)')) {
		jQuery('div.x-column.x-md.x-1-4.last').css("height","inherit");

		jQuery('div.x-column.x-md.x-1-4:nth-child(3)').css("height","inherit");
	}
}

function wrap_cta() {
	jQuery(".vt_col_1").each(function() {
		jQuery(this).wrapAll( "<div class='cta_vt' />");
	});
	cta_height();
}

function cta_height() {
	if (Modernizr.mq('only screen and (min-width: 1200px)')) {
		jQuery(".cta_vt").each(function() {
			var vt_img = jQuery(".vt_image");
			var vt_img_height = (vt_img).height();
			jQuery(this).css({
				"height": vt_img_height + "px"
			});
		});
	};
}




<?php

// =============================================================================
// FUNCTIONS.PHP
// -----------------------------------------------------------------------------
// Overwrite or add your own custom functions to X in this file.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Enqueue Parent Stylesheet
//   02. Additional Functions
// =============================================================================

// Enqueue Parent Stylesheet
// =============================================================================

add_filter( 'x_enqueue_parent_stylesheet', '__return_true' );



// Halsey Design Functions
// =============================================================================

/*  Remove Admin Bar
/* ------------------------------------ */ 
add_filter('show_admin_bar', '__return_false');


function wpb_adding_scripts() {

	wp_register_script('stone', get_stylesheet_directory_uri() . '/js/stone_creek_js.js');
	wp_register_script('map', get_stylesheet_directory_uri() . '/js/custom_map.js');

	wp_enqueue_script('stone');
	wp_enqueue_script('map');

}
add_action( 'wp_footer', 'wpb_adding_scripts' ); 

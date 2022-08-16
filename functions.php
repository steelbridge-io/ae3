<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {

  wp_register_style('animate-css', 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', array(), '', 'all');
  wp_enqueue_style('animate-css');
  wp_enqueue_style( 'custom-css', get_stylesheet_directory_uri() . '/assets/scss/custom.css', array(), '', 'all');
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);

  wp_enqueue_script('custom-js', get_stylesheet_directory_uri() . '/assets/js/custom.js', array(), '', 'true');
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );

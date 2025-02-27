<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


if ( ! function_exists( 'twentytwentytwo_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'twentytwentytwo_support' );

if ( ! function_exists( 'twentytwentytwo_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'twentytwentytwo-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'twentytwentytwo-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'twentytwentytwo_styles' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

<?php

add_action(
  'rest_api_init',
  function () {

    if ( ! function_exists( 'use_block_editor_for_post_type' ) ) {
      require ABSPATH . 'wp-admin/includes/post.php';
    }

    // Surface all Gutenberg blocks in the WordPress REST API
    $post_types = get_post_types_by_support( [ 'editor' ] );
    foreach ( $post_types as $post_type ) {
      if ( use_block_editor_for_post_type( $post_type ) ) {
        register_rest_field(
          $post_type,
          'blocks',
          [
            'get_callback' => function ( array $post ) {
              return parse_blocks( $post['content']['raw'] );
            },
          ]
        );
      }
    }
  }
);


require get_template_directory() . '/gus-component/gus-button/gus-button.php';

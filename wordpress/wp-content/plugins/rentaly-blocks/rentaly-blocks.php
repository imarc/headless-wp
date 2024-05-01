<?php
/**
 * Plugin Name:       Rentaly Blocks
 * Description:       Blocks created for the headless Rentaly site
 * Requires at least: WordPress 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rentaly-blocks
 *
 * @package           create-block
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * This function also registers all assets so they can be enqueued through the block editor in the corresponding context.
 */

function rentaly_blocks_rentaly_blocks_block_init() {
	register_block_type( __DIR__ . '/build/featured-rentals' );
	register_block_type( __DIR__ . '/build/homepage-hero' );
}

add_action('init', 'rentaly_blocks_rentaly_blocks_block_init');

<?php

if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit();
}

delete_option('ivrss_title');
delete_option('ivrss_scrollercount');
delete_option('ivrss_scrollerheight');
delete_option('ivrss_random');
delete_option('ivrss_type');
delete_option('ivrss_speed');
delete_option('ivrss_waitseconds');
 
// for site options in Multisite
delete_site_option('ivrss_title');
delete_site_option('ivrss_scrollercount');
delete_site_option('ivrss_scrollerheight');
delete_site_option('ivrss_random');
delete_site_option('ivrss_type');
delete_site_option('ivrss_speed');
delete_site_option('ivrss_waitseconds');

global $wpdb;
$wpdb->query("DROP TABLE IF EXISTS {$wpdb->prefix}ivrss_plugin");
<?php

/*
 * Plugin Name:       Hello World Plugin
 * Description:       Handle the basics with this plugin.
 */

// Admin Notices

add_action("admin_notices", "hw_show_success_message");

function hw_show_success_message()
{
    echo "<div class='notice notice-success is-dismissible'><p>Hello, World! - Success Message</p></div>";
}

function hw_show_error_message()
{
    echo "<div class='notice notice-error is-dismissible'><p>Hello, World! - Warning Message</p></div>";
}

function hw_show_warn_message()
{
    echo "<div class='notice notice-warning is-dismissible'><p>Hello, World! - Error Message</p></div>";
}

function hw_show_info_message()
{
    echo "<div class='notice notice-info is-dismissible'><p>Hello, World! - Error Message</p></div>";
}

// Admin Dashboard Widget

add_action("wp_dashboard_setup", "hw_hello_world_dashboard_widget");

function hw_hello_world_dashboard_widget()
{
    wp_add_dashboard_widget("hw_hello_world", "HW - Hello World Widget", "hw_custom_admin_widget");
}

function hw_custom_admin_widget()
{
    echo "This is Hello World Custom Admin Widget.";
}

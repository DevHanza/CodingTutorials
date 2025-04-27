<?php

/*
 * Plugin Name:  Shortcode Plugin
 * Description:  Simple plugin to add a shortcode.
 */


// Normal Shortcode
add_shortcode("sp_message", "sp_show_static_message");

function sp_show_static_message()
{
    return "<p style='color:red; font-size: 24px; font-weight: bold;'>I'm a Shortcode Message</p>";
}

// Parameterized Shortcode

add_shortcode("sp_student", "sp_handle_student_data");

function sp_handle_student_data($attributes)
{

    $attributes = shortcode_atts(
        array(
        "name" => "Default Student", 
        "email" => "Default Email"
    ),
        $attributes,
        "sp_student"
    );

    return "
    <div>
        <h3>Student Data</h3>
        <p>Name: {$attributes['name']}</p>
        <p>Email: {$attributes['email']}</p>
    </div>
    ";
}

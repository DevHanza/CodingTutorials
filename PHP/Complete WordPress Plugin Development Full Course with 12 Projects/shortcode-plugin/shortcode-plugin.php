<?php

/*
 * Plugin Name:  Shortcode Plugin
 * Description:  Simple plugin to add a shortcode.
 */


// Basic Shortcode
add_shortcode("sp_message", "sp_show_static_message");

function sp_show_static_message()
{
    return "<p style='color:red; font-size: 24px; font-weight: bold;'>I'm a Shortcode Message</p>";
}

// Shortcode with Parameters

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

// Shortcode with DB Operation: Method #1

add_shortcode("sp-list-posts", "sp_handle_list_posts");

function sp_handle_list_posts() {
    global $wpdb;

    $table_prefix = $wpdb->prefix; // wp_
    $table_name = $table_prefix . "posts";

    /*
    * Get post whose 
    * post_type = post
    * post_status = publish
    */

    $posts = $wpdb->get_results(
        "SELECT post_title from {$table_name} WHERE post_type = 'post' 
        AND post_status = 'publish'"
    );

    if(count($posts) > 0) {
        $outputHTML = "<ul>";

        foreach ($posts as $post) {
            $outputHTML .= '<li>'.$post->post_title.'</li>';
        }

        $outputHTML.= "</ul>";

        return $outputHTML;
    }
    return "No Posts Found.";
}


// Shortcode with DB Operation: Method #2

add_shortcode("sp-list-posts-2", "sp_handle_list_posts_wp_query_class");


function sp_handle_list_posts_wp_query_class($attributes) {

    $attributes = shortcode_atts(array(
        "number" => 5
    ), $attributes, "sp-list-posts-2");

    $query = new WP_Query(array(
        "post_per_page" => $attributes['number'],
        "post_status" => "publish"
    ));

    if ($query-> have_posts()){
        $outputHTML = "<ul>";

        while($query->have_posts()) {
            $query->the_post();
            $outputHTML .= "<li class='my_class'><a href='".get_the_permalink() ."'>" . get_the_title() . "</a></li>";
        }

        $outputHTML .= "</ul>";

        return $outputHTML;
    }

    return "No Posts Found.";


}















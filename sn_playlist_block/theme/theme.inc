<?php


function template_preprocess_playlist_thumbnail_row(&$vars){
  $options = $vars['options'];
  $row = $vars['row'];
  $view = $vars['view'];
  $video_thumb_fields = array('image', 'video_link', 'thumbnail_title', 'thumbnail_description');
    
  foreach ($video_thumb_fields as $thumbnail_component) {
    $vars[$thumbnail_component] = $view->style_plugin->get_field($view->row_index, $options[$thumbnail_component]);
  }
  $vars['href'] = $vars['video_link'];
  
  if (substr($vars['href'], 0, 6) == '/video') {
    /* remove first slash */
    $vars['href'] = substr($vars['href'],1);
  } else if ( substr($vars['href'], 0, 6) != 'video/' ) {
    $vars['href'] = 'video/' . $vars['href'];
  }
}



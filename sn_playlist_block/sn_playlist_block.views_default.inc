<?php

/**
 * Implementation of hook_views_default_views().
 */
function sn_playlist_block_views_default_views() {
  $views = array();

  // Exported view: sn_playlist_block_playlist
  $view = new view;
  $view->name = 'sn_playlist_block_playlist';
  $view->description = 'Displays a video playlist';
  $view->tag = 'video';
  $view->view_php = '';
  $view->base_table = 'node';
  $view->is_cacheable = FALSE;
  $view->api_version = 2;
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */
  $handler = $view->new_display('default', 'Defaults', 'default');
  $handler->override_option('relationships', array(
    'field_gallery_videos_nid' => array(
      'id' => 'field_gallery_videos_nid',
      'table' => 'node_data_field_gallery_videos',
      'field' => 'field_gallery_videos_nid',
    ),
  ));
  $handler->override_option('fields', array(
    'path' => array(
      'label' => 'Path',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'absolute' => 0,
      'exclude' => 1,
      'id' => 'path',
      'table' => 'node',
      'field' => 'path',
      'override' => array(
        'button' => 'Override',
      ),
      'relationship' => 'field_gallery_videos_nid',
    ),
    'title' => array(
      'label' => 'Title',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'exclude' => 1,
      'id' => 'title',
      'table' => 'node',
      'field' => 'title',
      'relationship' => 'field_gallery_videos_nid',
    ),
    'field_video_vms_thumbnails_value' => array(
      'label' => '(VMS) Thumbnails',
      'alter' => array(
        'alter_text' => 0,
        'text' => '<img width="136" height="96" onclick="frames[\'snTeamArticlePlayer2009122124746\'].playVideo(\'video/teams/bulls/2010/08/25/0825LuvabullsTryoutsPt1mov-1399892\', videoPlaylist2009122124746);" src="[field_video_vms_thumbnails_value]" />
',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'label_type' => 'widget',
      'format' => 'default',
      'multiple' => array(
        'group' => 1,
        'multiple_number' => '1',
        'multiple_from' => '0',
        'multiple_reversed' => 0,
      ),
      'exclude' => 1,
      'id' => 'field_video_vms_thumbnails_value',
      'table' => 'node_data_field_video_vms_thumbnails',
      'field' => 'field_video_vms_thumbnails_value',
      'relationship' => 'field_gallery_videos_nid',
    ),
    'field_video_teaser_value' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'label_type' => 'none',
      'format' => 'default',
      'multiple' => array(
        'group' => TRUE,
        'multiple_number' => '',
        'multiple_from' => '',
        'multiple_reversed' => FALSE,
      ),
      'exclude' => 1,
      'id' => 'field_video_teaser_value',
      'table' => 'node_data_field_video_teaser',
      'field' => 'field_video_teaser_value',
      'relationship' => 'field_gallery_videos_nid',
    ),
    'field_video_vms_video_id_value' => array(
      'label' => '',
      'alter' => array(
        'alter_text' => 1,
        'text' => '<div class="vidPlaylistThumbnails"><a href="video/[path]" class="vidPlayerBlockLink" id="imglink_[field_video_vms_video_id_value]"><img width="136" height="96" src="[field_video_vms_thumbnails_value]" /></a><a href="[path]" class="vidPlayerTextBlockLink" id="txtlink_[field_video_vms_video_id_value]">[title]</a>[field_video_teaser_value]<div class="playOverlay"></div></div>',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'label_type' => 'none',
      'format' => 'default',
      'multiple' => array(
        'group' => TRUE,
        'multiple_number' => '',
        'multiple_from' => '',
        'multiple_reversed' => FALSE,
      ),
      'exclude' => 0,
      'id' => 'field_video_vms_video_id_value',
      'table' => 'node_data_field_video_vms_video_id',
      'field' => 'field_video_vms_video_id_value',
      'relationship' => 'field_gallery_videos_nid',
      'override' => array(
        'button' => 'Override',
      ),
    ),
    'field_show_video_info_value' => array(
      'label' => 'show_video_info',
      'alter' => array(
        'alter_text' => 0,
        'text' => '',
        'make_link' => 0,
        'path' => '',
        'link_class' => '',
        'alt' => '',
        'prefix' => '',
        'suffix' => '',
        'target' => '',
        'help' => '',
        'trim' => 0,
        'max_length' => '',
        'word_boundary' => 1,
        'ellipsis' => 1,
        'html' => 0,
        'strip_tags' => 0,
      ),
      'empty' => '',
      'hide_empty' => 0,
      'empty_zero' => 0,
      'link_to_node' => 0,
      'label_type' => 'widget',
      'format' => 'default',
      'multiple' => array(
        'group' => TRUE,
        'multiple_number' => '',
        'multiple_from' => '',
        'multiple_reversed' => FALSE,
      ),
      'exclude' => 1,
      'id' => 'field_show_video_info_value',
      'table' => 'node_data_field_show_video_info',
      'field' => 'field_show_video_info_value',
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('arguments', array(
    'nid' => array(
      'default_action' => 'not found',
      'style_plugin' => 'default_summary',
      'style_options' => array(),
      'wildcard' => 'all',
      'wildcard_substitution' => 'All',
      'title' => '',
      'breadcrumb' => '',
      'default_argument_type' => 'fixed',
      'default_argument' => '',
      'validate_type' => 'none',
      'validate_fail' => 'not found',
      'break_phrase' => 0,
      'not' => 0,
      'id' => 'nid',
      'table' => 'node',
      'field' => 'nid',
      'validate_user_argument_type' => 'uid',
      'validate_user_roles' => array(
        '2' => 0,
        '3' => 0,
        '4' => 0,
        '5' => 0,
      ),
      'override' => array(
        'button' => 'Override',
      ),
      'relationship' => 'none',
      'default_options_div_prefix' => '',
      'default_argument_fixed' => '',
      'default_argument_user' => 0,
      'default_argument_php' => '',
      'validate_argument_node_type' => array(
        'poll' => 0,
        'audio' => 0,
        'carousel' => 0,
        'carousel_image' => 0,
        'feed_page' => 0,
        'gallery_image' => 0,
        'image' => 0,
        'image_batch' => 0,
        'full_screen' => 0,
        'page' => 0,
        'standing_item' => 0,
        'stats_importer' => 0,
        'stats_item' => 0,
        'top_story_image' => 0,
        'top_story_slider' => 0,
        'league_video' => 0,
        'gallery_video' => 0,
        'video' => 0,
        'story' => 0,
        'game_event' => 0,
        'game_schedule_importer' => 0,
        'schedule_icon' => 0,
      ),
      'validate_argument_node_access' => 0,
      'validate_argument_nid_type' => 'nid',
      'validate_argument_vocabulary' => array(
        '5' => 0,
        '4' => 0,
        '1' => 0,
        '2' => 0,
        '3' => 0,
      ),
      'validate_argument_type' => 'tid',
      'validate_argument_transform' => 0,
      'validate_user_restrict_roles' => 0,
      'validate_argument_node_flag_name' => '*relationship*',
      'validate_argument_node_flag_test' => 'flaggable',
      'validate_argument_node_flag_id_type' => 'id',
      'validate_argument_user_flag_name' => '*relationship*',
      'validate_argument_user_flag_test' => 'flaggable',
      'validate_argument_user_flag_id_type' => 'id',
      'validate_argument_php' => '',
    ),
  ));
  $handler->override_option('filters', array(
    'type' => array(
      'operator' => 'in',
      'value' => array(
        'league_video' => 'league_video',
        'video' => 'video',
      ),
      'group' => '0',
      'exposed' => FALSE,
      'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'type',
      'table' => 'node',
      'field' => 'type',
      'override' => array(
        'button' => 'Override',
      ),
      'relationship' => 'field_gallery_videos_nid',
    ),
    'status' => array(
      'operator' => '=',
      'value' => '1',
      'group' => '0',
      'exposed' => FALSE,
      'expose' => array(
        'operator' => FALSE,
        'label' => '',
      ),
      'id' => 'status',
      'table' => 'node',
      'field' => 'status',
      'override' => array(
        'button' => 'Override',
      ),
      'relationship' => 'none',
    ),
  ));
  $handler->override_option('access', array(
    'type' => 'none',
  ));
  $handler->override_option('cache', array(
    'type' => 'time',
    'results_lifespan' => '60',
    'output_lifespan' => '60',
  ));
  $handler->override_option('header_format', '2');
  $handler->override_option('header_empty', 0);
  $handler->override_option('footer_format', '2');
  $handler->override_option('footer_empty', 0);
  $handler->override_option('use_ajax', TRUE);
  $handler->override_option('items_per_page', 20);
  $handler->override_option('use_pager', '0');
  $handler->override_option('pager_element', 3);
  $handler->override_option('style_plugin', 'list');
  $handler = $view->new_display('sn_playlist_block', 'Playlist Block with Player', 'sn_playlist_block_1');
  $handler->override_option('block_description', '');
  $handler->override_option('block_caching', -1);
  $handler->override_option('sn_playlist_iframe_height', 200);
  $handler->override_option('sn_playlist_iframe_width', 300);
  $handler->override_option('sn_playlist_player_height', 170);
  $handler->override_option('sn_playlist_player_width', 300);
  $handler = $view->new_display('block', 'Playlist Block', 'block_1');
  $handler->override_option('block_description', '');
  $handler->override_option('block_caching', -1);

  $views[$view->name] = $view;

  return $views;
}

<?php

function sn_playlist_block_views_plugins() {
  $views_path = drupal_get_path('module', 'views');
  $this_path = drupal_get_path('module', 'sn_playlist_block');

  return array(
    'display' => array(
      // Parents are not really displays, just needed so the files can
      // be included.
      'parent' => array(
        'no ui' => TRUE,
        'handler' => 'views_plugin_display',
        'path' => "$views_path/plugins",
        'parent' => '',
      ),
      'block' => array(
        'no ui' => TRUE,
        'handler' => 'views_plugin_display_block',
        'path' => "$views_path/plugins",
        'parent' => 'parent',
      ),
      'sn_playlist_block' => array(
        'title' => t('Playlist Block'),
        'help' => t('Create a block to display only video playlists'),
        'path' => "$this_path/includes",
        'handler' => 'views_sn_display_playlist_block',
        'parent' => 'block',
        'theme'=> 'views_view',
        'uses hook block' => TRUE,
        'use ajax' => TRUE,
        'use pager' => TRUE,
        'use more' => TRUE,
        'accept attachments' => TRUE,
        'admin' => t('SN Video block'),
        'help topic' => 'SN video block'
      )
    ),
    'row' => array(
      'video_playlist_thumbnail' => array(
        'title' => t('Video Playlist Thumbnail'),
        'help' => t('Renders selected fields into a video thumbnail which will play in an optionally attached player'),
        'handler' => 'sn_playlist_block_video_thumbnail_row_plugin',
        'path' => "$this_path/includes",
        'theme' => 'playlist_thumbnail_row',
        'theme path' => "$this_path/theme",
        'theme file' => "theme.inc",
        'uses fields' => TRUE,
        'uses options' => TRUE,
        'type' => 'normal', 
        'help topic' => 'video playlist thumbnail',
      ),
    ),
    'style' => array(
      'sn_video_player_style' => array(
        'title' => t('Video Player'),
        'help' => t('Player to play videos in.'),
        'path' => "$this_path/includes",
        'handler' => 'sn_video_player_style',
        'theme' => 'sn_playlist_block_iframe',
        'theme file' => 'theme.inc',
        'theme path' => "$this_path/theme",
        'uses row plugin' => FALSE,
        'uses fields' => TRUE,
        'uses options' => TRUE,
        'even empty' => TRUE,
        'type' => 'normal',
      ),
    ),
  );
}


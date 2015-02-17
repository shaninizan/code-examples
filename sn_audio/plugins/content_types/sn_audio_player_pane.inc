<?php

$plugin = array(
  'single' => TRUE,  // Just do this one, it is needed.
  'title' => t('Audio Player'),  // Title to show up on the pane screen.
  'description' => t('Embeddable audio player.'), // Description to show up on the pane screen.
  'category' => t('Audio'), // A category to put this under.
  'edit form' => 'sn_audio_edit_form', // A function that will return the settings form for the pane.
  'render callback' => 'sn_audio_render', // A function that will return the renderable content.
  'defaults' => array( // Array of defaults for the settings form.
    'audio_file' => '',
  ),
  'all contexts' => TRUE, // This is NEEDED to be able to use substitution strings in your pane.
);

/**
 * An edit form for the pane's settings.
 */
function sn_audio_edit_form($form, &$form_state) {
  $form['override_title']['#type'] = 'hidden';
  $form['override_title_text']['#type'] = 'hidden';
  $form['override_title_markup']['#type'] = 'hidden';
  $form['help']['#markup'] = "";
  $form['audio_file'] = array(
    '#type' => 'media',
    '#tree' => TRUE,
    '#title' => t('Audio File'),
    '#description' => t('Audio must be mp3 format.'),
    '#media_options' => array(
      'global' => array(
        'file_extensions' => 'mp3',
        'max_filesize' => '50 MB',
        'file_directory' => 'audio',
        'types' => array('audio'),
        'schemes' => array('public://'),
      ),
    ),
    '#attached' => array('css' => array(
      drupal_get_path('module', 'sn_audio') . '/css/sn-audio-edit.css',
    )),
    '#required' => TRUE,
  );
  return $form;
}

/**
 * Submit function.
 */
function sn_audio_edit_form_submit(&$form, &$form_state) {
  $file = file_load($form_state['values']['audio_file']);
  $file->status = FILE_STATUS_PERMANENT;
  $url = file_create_url($file->uri);
  $file->field_audio_path[LANGUAGE_NONE][0]['value'] = $url;
  
  //$file->field_published_date[LANGUAGE_NONE][0]['value'] = $file->timestamp;

  file_save($file);
  cache_clear_all('sn_podcast');

  foreach (array_keys($form_state['plugin']['defaults']) as $key) {
    if (isset($form_state['values'][$key])) {
      $form_state['conf'][$key] = $form_state['values'][$key];
    }
  }
}

/**
 * Render the pane.
 */
function sn_audio_render($subtype, $config, $args, $contexts) {
  $fid = $config['audio_file'];
  $file = file_load($fid);
  $title = $file->field_audio_title[LANGUAGE_NONE][0]['safe_value'];
  $description = $file->field_audio_description[LANGUAGE_NONE][0]['safe_value'];
  $url = file_create_url($file->uri);
  $file_extension = substr($file->filename, -3);

  drupal_add_css(drupal_get_path('module', 'sn_audio') . '/css/jplayer.blue.monday.css');
  drupal_add_js(drupal_get_path('module', 'sn_audio') .'/js/jquery.jplayer.js');
  drupal_add_js('jQuery(document).ready(function(){
      jQuery("#jplayer-'. $fid['fid'] .'").jPlayer({
        ready: function () {
          jQuery(this).jPlayer("setMedia", {
            title: "'. $title .' - '. $description .'",
            '. $file_extension .': "'. $url .'"
          });
        },
        cssSelectorAncestor: "#jp_container_'. $fid['fid'] .'",
        swfPath: "'.drupal_get_path('module', 'sn_audio').'/js/",
        supplied: "'. $file_extension .'"
      });
    });',
    array('type' => 'inline', 'scope' => 'footer', 'weight' => 5)
  );

  $block = new stdClass();
  $block->content = theme('audio_player', array('fid' => $fid['fid'], 'title' => $title));
  return $block;
}

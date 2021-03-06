<?php
/**
 * @file
 * sn_audio.file_default_displays.inc
 */

/**
 * Implements hook_file_default_displays().
 */
function sn_audio_file_default_displays() {
  $export = array();

  $file_display = new stdClass();
  $file_display->api_version = 1;
  $file_display->name = 'audio__preview__file_field_file_table';
  $file_display->weight = 0;
  $file_display->status = TRUE;
  $file_display->settings = '';
  $export['audio__preview__file_field_file_table'] = $file_display;

  return $export;
}

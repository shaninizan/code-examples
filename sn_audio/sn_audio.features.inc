<?php
/**
 * @file
 * sn_audio.features.inc
 */

/**
 * Implements hook_views_api().
 */
function sn_audio_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_ctools_plugin_api().
 */
function sn_audio_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "file_entity" && $api == "file_default_displays") {
    return array("version" => "1");
  }
}

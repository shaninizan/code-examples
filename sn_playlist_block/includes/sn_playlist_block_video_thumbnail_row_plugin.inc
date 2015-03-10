<?php
/**
 * @file
 * Contains the base row style plugin.
 */

/**
 * The basic 'fields' row plugin
 *
 * This displays fields one after another, giving options for inline
 * or not.
 *
 * @ingroup views_row_plugins
 */
class sn_playlist_block_video_thumbnail_row_plugin extends views_plugin_row {

  function option_definition() {
    $options = parent::option_definition();

    return $options;
  }

  /**
   * Provide a form for setting options.
   */
  function options_form(&$form, &$form_state) {
    $options = $this->get_excluded_field_labels(false);
    array_unshift($options, 'None');

    if (empty($this->options['inline'])) {
      $this->options['inline'] = array();
    }

    $form['image'] = array(
      '#default_value' => $this->options['image'],
      '#type' => 'select',
      '#title' => t('Source (src) for image'),
      '#options' => $options,
      '#description' => t('Select a field whose value will be used for an image\'s (img) source (src)'),
    );

    $form['video_link'] = array(
      '#default_value' => $this->options['video_link'],
      '#type' => 'select',
      '#title' => t('Video link'),
      '#options' => $options,
      '#description' => t('Choose which field should be used for the link (a[href]) to the video.  This will be passed to a video player as the video source if javascript is avaiable or it will redirect the user to the relavent video page'),
    );

    $form['thumbnail_title'] = array(
      '#default_value' => $this->options['thumbnail_title'],
      '#type' => 'select',
      '#title' => 'Thumbnail Tile',
      '#options' => $options,
      '#descritopn' => t('The field that has the title for the thumbnail'), 
    );

    $form['thumbnail_description'] = array(
      '#default_value' => $this->options['thumbnail_description'],
      '#type' => 'select',
      '#title' => t('Thumbnail Description'),
      '#options' => $options,
      '#description' => t('Field containing the descriton of the video'),
    );

  }

  /* Returns an array of the fields and labels that have (or don't have) the 
   * 'exclude' option set.
   * Takes a boolean value as an argument.  If the boolean is set to true it 
   * will return exluded fields.  If set to false it will return non-excluded 
   * values
   */

  function get_excluded_field_labels($excluded = true){
    $options = array();
    foreach ($this->display->handler->get_handlers('relationship') as $relationship => $handler) {
      if ($label = $handler->label()) {
        $relationships[$relationship] = $label;
      }
      else {
        $relationships[$relationship] = $handler->ui_name();
      }
    }

    foreach ($this->display->handler->get_handlers('field') as $id => $handler) {
      if($handler->options['exclude'] == $excluded){
        if ($label = $handler->label()) {
          $options[$id] = $label;
        }
        else {
          $options[$id] = $handler->ui_name();
        }
        if (!empty($handler->options['relationship']) && !empty($relationships[$handler->options['relationship']])) {
          $options[$id] = '(' . $relationships[$handler->options['relationship']] . ') ' . $options[$id];
        }
      }
    }
    return $options;

  }

  /**
   * Perform any necessary changes to the form values prior to storage.
   * There is no need for this function to actually store the data.
   */
  function options_submit($form, &$form_state) {
  }
  
  function pre_render($result){
    $module_path = drupal_get_path('module', 'sn_playlist_block');

    drupal_add_js($module_path . '/js/snPlayListBlockInit.js', 'header');
    drupal_add_css($module_path. '/css/snPlayList.css', 'module');
    $view->set_css_js = 1;
  }

}
    


<?php
class views_sn_display_playlist_block extends views_plugin_display_block {

  function init(&$view, &$display) {
    parent::init($view, $display);
  }

  function option_definition() {
    $options = parent::option_definition();

	$options['sn_player_size'] = array('default' => 'small');
    return $options;
  }  

  function options_summary(&$categories, &$options) {
    // It is very important to call the parent function here:
    parent::options_summary($categories, $options);
    $categories['sn_playlist_block_iframe'] = array(
      'title' => t('Playlist Block settings'),
    );
    $options['sn_playlist_iframe'] = array(
      'category' => 'sn_playlist_block_iframe',
      'title' => t('Iframe Setting'),
      'value' => $this->get_option('sn_playlist_iframe_width') . 'x' . $this->get_option('sn_playlist_iframe_height')
    );
    $options['sn_playlist_player'] = array(
      'category' => 'sn_playlist_block_iframe',
      'title' => t('Player Settings'),
      'value' => $this->get_option('sn_playlist_player_width') . 'x' . $this->get_option('sn_playlist_player_height')
    );
    $options['sn_playlist_player_videoID'] = array(
      'category' => 'sn_playlist_block_iframe',
      'title' => t('VideoID field'),
      'value' => $this->get_option('sn_playlist_player_videoID'),
    );
    $options['sn_playlist_use_player'] = array(
      'category' => 'sn_playlist_block_iframe',
      'title' => t('Use External Player'),
      'value' => ($this->get_option('sn_playlist_use_player') ? 'Yes' : 'No'),
    );
}

function execute() {
  // Add block specific js on a per call basis.
  $module_path = drupal_get_path('module', 'sn_playlist_block');
  drupal_add_js($module_path . '/js/snPlayListBlockInit.js', 'module');
  drupal_add_css($module_path. '/css/snPlayList.css', 'module');

  if ($this->get_option('sn_playlist_use_player')){
      $css_class = $this->get_option('css_class');
      $this->set_option('css_class',"$css_class use_external_player");

    //Add Declaration for external player
    $external_player = $this->get_option('sn_playlist_use_player');
    drupal_add_js('Drupal.behaviors.snPlayListBlockInit = function(context) {
      $(".use-external-player a.vidPlayerBlockLink").bind("click", {iframe: "' . $external_player . '"}, renderPlaylistBlockLinks);
      $(".use-external-player a.vidPlayerTextBlockLink").bind("click", {iframe: "' . $external_player . '"}, renderPlaylistBlockLinks);
  }', 'inline');

  }
  // Prior to this being called, the $view should already be set to this
  // display, and arguments should be set on the view.
  $rendered = $this->view->render();
  $executed_view = $this->view;

  //Prepare video player only if we are using the internal player
  if(!$this->get_option('sn_playlist_use_player')){
    $iframe_dimensions = array(
      'width' => $this->get_option('sn_playlist_iframe_width'),
      'height' => $this->get_option('sn_playlist_iframe_height')
    );
    $player_dimensions= array(
      'width' => $this->get_option('sn_playlist_player_width'),
      'height' => $this->get_option('sn_playlist_player_height')
    );

    $videoID_field = $this->get_option('sn_playlist_player_videoID');

    if(!$videoID_field){
      //To allow legacy views to keep executing properly
      $videoID_field = 'field_video_vms_video_id_value';
    }

    $videoID_alias = $executed_view->field['field_video_vms_video_id_value']->field_alias;

    $player = theme('sn_playlist_block_iframe', $iframe_dimensions, $player_dimensions, $executed_view, $videoID_alias);
  }


  $info['content'] =  $player . $rendered;
  $info['subject'] = filter_xss_admin($this->view->get_title());
  if (!empty($this->view->result) || $this->get_option('empty') || !empty($this->view->style_plugin->definition['even empty'])) {
    return $info;
  }
}

  function preview() {
    // Add block specific js on a per call basis.
    $module_path = drupal_get_path('module', 'sn_playlist_block');
    drupal_add_js($module_path . '/js/snPlayListBlockInit.js', 'module');
    drupal_add_css($module_path. '/css/snPlayList.css', 'module');
    
    // Prior to this being called, the $view should already be set to this
    // display, and arguments should be set on the view.
    $iframe_dimensions = array(
      'width' => $this->get_option('sn_playlist_iframe_width'),
      'height' => $this->get_option('sn_playlist_iframe_height')
      );
    $player_dimensions= array(
      'width' => $this->get_option('sn_playlist_player_width'),
      'height' => $this->get_option('sn_playlist_player_height')
      );

    $videoID_field = $this->get_option('sn_playlist_player_videoID');

    if(!$videoID_field){
      //To allow legacy views to keep executing properly
      $videoID_field = 'field_video_vms_video_id_value';
    }

    $rendered = $this->view->render();
    $executed_view = $this->view;

    $videoID_alias = $executed_view->field['field_video_vms_video_id_value']->field_alias;

    $info['content'] = theme('sn_playlist_block_iframe', $iframe_dimensions, $player_dimensions, $executed_view, $videoID_alias) . $rendered;
    if (!empty($this->view->result) || $this->get_option('empty') || !empty($this->view->style_plugin->definition['even empty'])) {
      return $info['content'];
    }
  }

  /**
   * Provide the default form for setting options.
   */
  function options_form(&$form, &$form_state) {
    // It is very important to call the parent function here:
    parent::options_form($form, $form_state);

    switch ($form_state['section']) {
      case 'sn_playlist_iframe':
        $form['#title'] .= t('Iframe Settings');
        $form['sn_playlist_iframe_width'] = array(
          '#type' => 'textfield',
          '#title' => t('Iframe Width'),
          '#description' => t('Set the width of the Iframe.'),
          '#default_value' => $this->get_option('sn_playlist_iframe_width'),
        );
        $form['sn_playlist_iframe_height'] = array(
          '#type' => 'textfield',
          '#title' => t('Iframe Height'),
          '#description' => t('Set the height of the Iframe.  This value will be overriden if the playlist is set to show "no title or description" to match the "Player" height.'),
          '#default_value' => $this->get_option('sn_playlist_iframe_height'),
        );
        break;
      case 'sn_playlist_player':
        $form['#title'] .= t('Player Settings');
        $form['sn_playlist_player_width'] = array(
          '#type' => 'textfield',
          '#title' => t('Player Width'),
          '#description' => t('Set the width of the Flash Player.'),
          '#default_value' => $this->get_option('sn_playlist_player_width'),
        );
        $form['sn_playlist_player_height'] = array(
          '#type' => 'textfield',
          '#title' => t('Player Height'),
          '#description' => t('Set the height of the Flash Player.'),
          '#default_value' => $this->get_option('sn_playlist_player_height'),
        );
        break;
      case 'sn_playlist_player_videoID':
        $options = $this->view->display_handler->get_field_labels();
        $form['#title'] .= t('Video ID field');
        $form['sn_playlist_player_videoID'] = array(
          '#type' => 'select',
          '#title' => 'Video ID',
          '#description' => 'field which contains the video ID',
          '#options' => $options,
          '#default_value' => $this->get_option('sn_playlist_player_videoID'),
        );
        break;
      case 'sn_playlist_use_player':
        $form['#title'] .= t('Use detached a player?');
        $form['sn_playlist_use_player'] = array(
          '#type' => 'textfield',
          '#description' => 'JQuery selector of the iframe-player to use',
          '#title' => 'JQuery Selector:'
        );

    }
  }

  /**
   * Perform any necessary changes to the form values prior to storage.
   * There is no need for this function to actually store the data.
   */
  function options_submit(&$form, &$form_state) {
    // It is very important to call the parent function here:
    parent::options_submit($form, $form_state);
    switch ($form_state['section']) {
      case 'sn_playlist_iframe':
        $this->set_option('sn_playlist_iframe_width', intval($form_state['values']['sn_playlist_iframe_width']));
        $this->set_option('sn_playlist_iframe_height', intval($form_state['values']['sn_playlist_iframe_height']));
        break;
      case 'sn_playlist_player':
        $this->set_option('sn_playlist_player_width', intval($form_state['values']['sn_playlist_player_width']));
        $this->set_option('sn_playlist_player_height', intval($form_state['values']['sn_playlist_player_height']));
        break;
      case 'sn_playlist_player_videoID':
        $this->set_option('sn_playlist_player_videoID', $form_state['values']['sn_playlist_player_videoID']);
      case 'sn_playlist_use_player':
        $this->set_option('sn_playlist_use_player', $from_state['values']['sn_playlist_use_player']);
    }
  }

}

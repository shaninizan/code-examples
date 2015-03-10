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
}

  function execute() {
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

    $rendered = $this->view->render();
    $executed_view = $this->view;
    $info['content'] = theme('sn_playlist_block_iframe', $iframe_dimensions, $player_dimensions, $executed_view) . $rendered;
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

    $rendered = $this->view->render();
    $executed_view = $this->view;
    $info['content'] = theme('sn_playlist_block_iframe', $iframe_dimensions, $player_dimensions, $executed_view) . $rendered;
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
    }
  }

}

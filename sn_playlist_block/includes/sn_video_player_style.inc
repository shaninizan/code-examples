<?php



class sn_video_player_style extends views_plugin_style {


  function options(){}

  function options_form(&$form, &$form_state){
    $options = $this->display->handler->get_field_labels();
    $form['videoID'] = array(
      '#title' => 'VideoID to initialize player',
      '#type' => 'select',
      '#options' => $options,
      '#default_value' => $this->options['videoID'] ? $this->options['videoID'] : null,
    );
    $form['sn_playlist_iframe_width'] = array(
      '#type' => 'textfield',
      '#title' => t('Iframe Width'),
      '#description' => t('Set the width of the Iframe.'),
      '#default_value' => $this->options['sn_playlist_iframe_width'],
    );
    $form['sn_playlist_iframe_height'] = array(
      '#type' => 'textfield',
      '#title' => t('Iframe Height'),
      '#description' => t('Set the height of the Iframe.  This value will be overriden if the playlist is set to show "no title or description" to match the "Player" height.'),
      '#default_value' => $this->options['sn_playlist_iframe_height'],
    );
    $form['sn_playlist_player_width'] = array(
      '#type' => 'textfield',
      '#title' => t('Player Width'),
      '#description' => t('Set the width of the Flash Player.'),
      '#default_value' => $this->options['sn_playlist_player_width'],
    );
    $form['sn_playlist_player_height'] = array(
      '#type' => 'textfield',
      '#title' => t('Player Height'),
      '#description' => t('Set the height of the Flash Player.'),
      '#default_value' => $this->options['sn_playlist_player_height'],
    );

  }

function render(){
  $iframe_dimensions = array(
    'width' => $this->options['sn_playlist_iframe_width'],
    'height' => $this->options['sn_playlist_iframe_height']
  );
  $player_dimensions= array(
    'width' => $this->options['sn_playlist_player_width'],
    'height' => $this->options['sn_playlist_player_height']
  );
  
  $field_name =$this->options['videoID'];
  $field_alias = $this->view->field[$field_name]->field_alias;

  $player = theme('sn_playlist_block_iframe', $iframe_dimensions, $player_dimensions, $this->view, $field_alias);
  return $player;
}


}

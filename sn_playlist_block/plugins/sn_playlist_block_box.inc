<?php

/**
 * Video playlist box.
 */
class sn_playlist_block_box extends boxes_box {
  /**
   * Implementation of boxes_box::options_defaults().
   */
  public function options_defaults() {
    return array(
      'filter_type' => 'taxonomy',
      'taxonomy' => '', 
      'nid' => '',
      'show_thumbnail' => 1,
      'show_title' => 1,
      'show_teaser' => 1,
      'footer' => '',
      'target' => '',
      'iframe_width' => '300',
      'iframe_height' => '250',
      'player_width' => '300',
      'player_height' => '170',
      'video_player_size' => 'small',
      'show_description' => 1,
      'playlist_style' => 'list',
      'max_rows' => '',
      'max_columns' => '',
      'paging' => '',
      'thumbnail_group_width' => '250'       
    );
  }

  /**
   * Implementation of boxes_box::options_form().
   */
  public function options_form() {
    $form = array();

    GLOBAL $base_url;
    $image_path =$base_url . '/' . drupal_get_path('module', 'sn_playlist_block') . '/images/';

    if (isset($this->options['nid']) && is_numeric($this->options['nid'])) {
      $node = node_load($this->options['nid']);
      $this->options['nid'] = $node->title . ' [nid:' . $node->nid . ']';
    }

    $form['filter_type'] = array(
      '#type' => 'radios',
      '#title' => 'Playlist type',
      '#description' => t('select the playlist type'),
      '#options' => array('taxonomy' => t('Taxonomy'), 'nid' => t('Node')),
      '#default_value' => ($this->options['filter_type'] ? $this->options['filter_type'] : 'nid'),
    );

    $form['taxonomy'] = array(
      '#type' => 'textfield',
      '#title' => 'Taxonomy Playlist',
      '#default_value' => $this->options['taxonomy'],
      '#description' => t('The taxonomy term, tag, or channel this block will filter to.'),
      '#autocomplete_path' => 'sn_playlist_block/autocomplete/taxonomy',
      '#id' => 'sn_playlist_taxonomy',
    );

    $form['nid'] = array(
      '#type' => 'textfield',
      '#title' => t('Node Playlist'),
      '#default_value' => $this->options['nid'],
      '#description' => t('The video playlist node this block should show. Start typing video playlist title and select the correct node.'),
      '#autocomplete_path' => 'sn_playlist_block/autocomplete',
      '#id' => 'sn_playlist_nid',
    );

    $form['footer'] = array(
      '#type' => 'textfield',
      '#title' => t('Footer Link Text'),
      '#default_value' => $this->options['footer'],
      '#description' => t('**Only available for Taxonomy playlists. Text that will appear and link to the Playlist Node or Playlist Channel'),
      '#default_value' => $this->options['footer'],
    );
    $form['target'] = array(
      '#type' => 'textfield',
      '#title' => t('Iframe ID'),
      '#description' => t('HTML ID of the iframe to use as a player if this block does not render one'),
      '#default_value' => $this->options['target'],
    );

    $form['video_player_size'] = array(
      '#type' => 'radios',
      '#title' => t('Video Player size'),
      '#default_value' => $this->options['video_player_size'],
      '#attributes' => array(
        'onclick' => 'setPlayerDimensions(this.id)',
      ),
      '#options' => array(
        'small' => t('Small (300x170)<br/><strong>Select this for a Sidebar block</strong>'),
        'medium' => t('Medium (416x234)'),
        'large' => t('Large (576x324)'),
      ),
    );

    $form['playlist_style'] = array(
      '#type' => 'radios',
      '#title' => t('Playlist Style'),
      '#default_value' => $this->options['playlist_style'],
      '#attributes' => array(
        'onclick' => 'setPlayerStyle(this.id)',
      ),
      '#options' => array(
        /* Fixed horizontal/vertical labels, but machine values and image names are still inverted. This will need to be fixed if/when this feature goes through redesign*/
        'list' => t('Horizontal list below video player<br />').theme('image',$image_path.'list.gif', $alt = 'Horizontal list layout', $title = '', $attributes = NULL, $getsize = FALSE),
        'horizontal_list_left' => t('Vertical list with video player on the left<br /><strong>Use with a small or medium sized video player.</strong><br />').theme('image',$image_path.'horizontal_left.gif',$image_path.'carousel.gif', $alt = 'Vertical list with video player on the left layout', $title = '', $attributes = NULL, $getsize = FALSE),
        'horizontal_list_right' => t('Vertical list with video player on the right<br /><strong>Use with a small or medium sized video player.</strong><br />').theme('image',$image_path.'horizontal_right.gif', $alt = 'Vertical list with video player on the right layout', $title = '', $attributes = NULL, $getsize = FALSE),
        'carousel' => t('Carousel below video player<br />').theme('image',$image_path.'carousel.gif', $alt = 'carousel layout', $title = '', $attributes = NULL, $getsize = FALSE),        
        'sidebar' => t('Vertical list below video player<br /><strong>Select this for a Sidebar block</strong><br/>').theme('image',$image_path.'sidebar.gif', $alt = 'Sidebar layout with vertical list below video player', $title = '', $attributes = NULL, $getsize = FALSE),
      ),
    );

    $form['show_thumbnail'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show Thumbnails'),
      '#default_value' => $this->options['show_thumbnail'],
    );

    $form['show_title'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show Thumbnail Titles'),
      '#default_value' => $this->options['show_title'],
    );

    $form['show_teaser'] = array(
      '#type' => 'checkbox',
      '#title' => t('Show Thumbnail Teasers'),
      '#default_value' => $this->options['show_teaser'],
    );


    return $form;
  }

  /**
   * Implementation of boxes_box::options_form().
   */
  public function render() {

    if(isset($this->options['nid']) && !isset($this->options['filter_type'])){
      $this->options['filter_type'] = 'nid';
    }

    $args = array();

    // Prepare the view and display based on the 'filter type' (node or 
    // taxonomy) of the block playlist 
    switch ($this->options['filter_type']) {
    case 'taxonomy':
      if(isset($this->options['taxonomy'])){
        $term = $this->options['taxonomy'];
        $term = str_replace(" ", "-", $term);
        $args = array(trim($term, '"'));
      }

      $view = sn_site_guarantee_get_view('video_playlist_taxonomy');
      $display = 'sn_playlist_block_1';
      break;

    case 'nid':
      $nid = $this->options['nid'];
      if (!empty($nid) && is_numeric($nid)) {
        $args = array($nid);
      }
      $view = sn_site_guarantee_get_view('sn_playlist_block_playlist');
      $display = "sn_playlist_block_1";

      break;
    }

    if(!empty($args) && isset($view)){
      $view->set_display($display);
      $handler = $view->display_handler;

      // Set congifurations for style_plugin plus add a class to define the 
      // style type.
      if (isset($this->options['playlist_style'])) {
        switch ($this->options['playlist_style']) {
        case 'carousel':
          $handler->set_option('style_plugin','jcarousel');
          $handler->set_option('style_options',array(
            'wrap' => '0',
            'skin' => 'default',
            'visible' => '',
            'scroll' => '',
            'auto' => '0',
            'animation' => '',
            'easing' => '',
            'start' => '1',
            'autoPause' => 1,
            'vertical' => 0,
          ));
          $handler->set_option('css_class', $this->options['playlist_style']);
          break;
        case 'sidebar':
          $handler->set_option('css_class', $this->options['playlist_style'] . "_video_list");
          break;

        default:
          $handler->set_option('css_class', $this->options['playlist_style']);
          break;
        };
      }

      // Set a class to define the player size in html class
      if (isset($this->options['video_player_size'])) {
        $class = $handler->get_option('css_class');
        $video_size = $this->options['video_player_size'];
        $handler->set_option('css_class', $class . " video_size_$video_size");
      };


      // Set the specs for the iframe and player height/width
      $player_specs = array('iframe_width', 'iframe_height', 'player_width', 'player_height',);
      foreach ($player_specs as $spec) {
        if (isset($this->options[$spec]) && is_numeric($this->options[$spec])) {
          $handler->override_option('sn_playlist_' . $spec, $this->options[$spec]);
        }
      }

      // Prepare to modify the display of the thumbnails
      $row_options = $handler->get_option('row_options');

      // +++++++++++++++++++++++++++++++
      // Override for node-type view
      //
      // This is temporay patch until we update the old view to use the new row 
      // style video_playlist_thumbnail.
      if ( $this->options['filter_type'] == 'nid'){
        //Set the row plugin to the playlist_thumbnail pluging style
        $handler->override_option('row_plugin', 'video_playlist_thumbnail');

        $row_options = array(
          'image' => 'field_video_vms_thumbnails_value',
          'video_link' => 'field_video_vms_video_id_value',
          'thumbnail_title' => 'title',
          'thumbnail_description' => 'field_video_teaser_value',
        );

        $all_fields = &$handler->get_option('fields');
        foreach ($row_options as $option => &$field) {
          $all_fields[$field]['alter']['alter_text'] = 0; 
          $all_fields[$field]['exclude'] = 0;; 
        }
        
        $handler->override_option('fields', $all_fields);
      }// End of override for node-type filter
      // ++++++++++++++++++++++++++++++++++

      // Configure the thumbnails display
      if(!$this->options['show_title']){
        $row_options['thumbnail_title'] = 0;
      }

      if(!$this->options['show_thumbnail']){
        $row_options['image'] = 0;
      }
      if(!$this->options['show_teaser']){
        $row_options['thumbnail_description'] = 0;
      }
      $handler->override_option('row_options',$row_options );

      //Set the footer
      if($this->options['footer']){
        $handler->set_option('use_more',1);
        $handler->set_option('use_more_text',$this->options['footer']);
      }
  
      // Set the ID for the external player
      if($this->options['target']){
        $handler->set_option('sn_playlist_use_player',check_plain($this->options['target']));
      }

      $views_content = $view->execute_display( $display, $args);

      $content =$views_content['content'];

      $content = '<div class="boxes-sn-playlist '.$this->options['playlist_style'] .'">' . $content . '</div>';

      return array(
        'delta' => $this->delta,
        'title' => $title,
        'subject' => $title,
        'content' => $content,
      );
    }elseif(!is_object($view) && !method_exists($view, "set_display")){
      watchdog('error', "The view to generate the playlist block of type @type could not be found", array('@type' => $this->options['filter_type'])); 
    }
  }


  /**
   * Override of boxes_box::save
   */
  public function save() {

    preg_match('/^(?:\s*|(.*) )?\[\s*nid\s*:\s*(\d+)\s*\]$/', $this->options['nid'], $matches);
    $this->options['nid'] = '';
    if (!empty($matches)) {
      // Explicit [nid:n].
      list(, $title, $nid) = $matches;
      if (is_numeric($nid)) {
        $this->options['nid'] = $nid;
      }
    }

    if (isset($this->options['video_player_size'])) {
      switch ($this->options['video_player_size']) {
      case 'small':
        $this->options['iframe_width'] = 300;
        $this->options['iframe_height'] = 250;
        $this->options['player_width'] = 300;
        $this->options['player_height'] = 170;	  
        break;
      case 'medium':
        $this->options['iframe_width'] = 426;
        $this->options['iframe_height'] = 314;
        $this->options['player_width'] = 416;
        $this->options['player_height'] = 234;	  
        break;
      case 'large':
        $this->options['iframe_width'] = 586;
        $this->options['iframe_height'] = 404;
        $this->options['player_width'] = 576;
        $this->options['player_height'] = 324;	  
        break;
      default:
        $this->options['iframe_width'] = 300;
        $this->options['iframe_height'] = 250;
        $this->options['player_width'] = 300;
        $this->options['player_height'] = 170;	  
        break;
      };
    }


    parent::save();
  }

}



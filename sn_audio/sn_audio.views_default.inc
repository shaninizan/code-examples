<?php
/**
 * @file
 * sn_audio.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function sn_audio_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'administration_audio';
  $view->description = 'Admin page for Audio Files';
  $view->tag = 'default';
  $view->base_table = 'file_managed';
  $view->human_name = 'Administration: Audio';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Administration: Audio';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'administer files';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '50';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['pager']['options']['quantity'] = '9';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'field_audio_title' => 'field_audio_title',
    'filename' => 'filename',
    'field_audio_description' => 'field_audio_description',
    'edit' => 'edit',
    'delete' => 'delete',
  );
  $handler->display->display_options['style_options']['default'] = '-1';
  $handler->display->display_options['style_options']['info'] = array(
    'field_audio_title' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'filename' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_audio_description' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'edit' => array(
      'align' => 'views-align-center',
      'separator' => '',
      'empty_column' => 0,
    ),
    'delete' => array(
      'align' => 'views-align-center',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Field: File: Audio Title */
  $handler->display->display_options['fields']['field_audio_title']['id'] = 'field_audio_title';
  $handler->display->display_options['fields']['field_audio_title']['table'] = 'field_data_field_audio_title';
  $handler->display->display_options['fields']['field_audio_title']['field'] = 'field_audio_title';
  $handler->display->display_options['fields']['field_audio_title']['label'] = 'Title';
  /* Field: File: Name */
  $handler->display->display_options['fields']['filename']['id'] = 'filename';
  $handler->display->display_options['fields']['filename']['table'] = 'file_managed';
  $handler->display->display_options['fields']['filename']['field'] = 'filename';
  $handler->display->display_options['fields']['filename']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['filename']['alter']['ellipsis'] = FALSE;
  /* Field: File: Audio Description */
  $handler->display->display_options['fields']['field_audio_description']['id'] = 'field_audio_description';
  $handler->display->display_options['fields']['field_audio_description']['table'] = 'field_data_field_audio_description';
  $handler->display->display_options['fields']['field_audio_description']['field'] = 'field_audio_description';
  $handler->display->display_options['fields']['field_audio_description']['label'] = 'Description';
  /* Field: File: Upload date */
  $handler->display->display_options['fields']['timestamp']['id'] = 'timestamp';
  $handler->display->display_options['fields']['timestamp']['table'] = 'file_managed';
  $handler->display->display_options['fields']['timestamp']['field'] = 'timestamp';
  $handler->display->display_options['fields']['timestamp']['date_format'] = 'medium';
  /* Field: File: Edit link */
  $handler->display->display_options['fields']['edit']['id'] = 'edit';
  $handler->display->display_options['fields']['edit']['table'] = 'file_managed';
  $handler->display->display_options['fields']['edit']['field'] = 'edit';
  $handler->display->display_options['fields']['edit']['label'] = 'Edit';
  $handler->display->display_options['fields']['edit']['element_label_colon'] = FALSE;
  /* Field: File: Delete link */
  $handler->display->display_options['fields']['delete']['id'] = 'delete';
  $handler->display->display_options['fields']['delete']['table'] = 'file_managed';
  $handler->display->display_options['fields']['delete']['field'] = 'delete';
  $handler->display->display_options['fields']['delete']['label'] = 'Delete';
  $handler->display->display_options['fields']['delete']['element_label_colon'] = FALSE;
  /* Sort criterion: File: Upload date */
  $handler->display->display_options['sorts']['timestamp']['id'] = 'timestamp';
  $handler->display->display_options['sorts']['timestamp']['table'] = 'file_managed';
  $handler->display->display_options['sorts']['timestamp']['field'] = 'timestamp';
  $handler->display->display_options['sorts']['timestamp']['order'] = 'DESC';
  /* Filter criterion: File: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'file_managed';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'audio' => 'audio',
  );
  /* Filter criterion: File: Audio Title (field_audio_title) */
  $handler->display->display_options['filters']['field_audio_title_value']['id'] = 'field_audio_title_value';
  $handler->display->display_options['filters']['field_audio_title_value']['table'] = 'field_data_field_audio_title';
  $handler->display->display_options['filters']['field_audio_title_value']['field'] = 'field_audio_title_value';
  $handler->display->display_options['filters']['field_audio_title_value']['operator'] = 'contains';
  $handler->display->display_options['filters']['field_audio_title_value']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['operator_id'] = 'field_audio_title_value_op';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['label'] = 'Title';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['operator'] = 'field_audio_title_value_op';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['identifier'] = 'field_audio_title_value';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    30037204 => 0,
    200153887 => 0,
    83071100 => 0,
    106088603 => 0,
  );
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_filter'] = 1;
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_items'] = '10';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_field'] = 'field_audio_title';
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_raw_suggestion'] = 1;
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_raw_dropdown'] = 1;
  $handler->display->display_options['filters']['field_audio_title_value']['expose']['autocomplete_dependent'] = 0;

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['path'] = 'admin/structure/audio';
  $handler->display->display_options['menu']['type'] = 'normal';
  $handler->display->display_options['menu']['title'] = 'Audio';
  $handler->display->display_options['menu']['description'] = 'Administer Audio Files';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'management';
  $handler->display->display_options['menu']['context'] = 0;
  $handler->display->display_options['menu']['context_only_inline'] = 0;  
  $translatables['administration_audio'] = array(
    t('Master'),
    t('Administration: Audio'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('Title'),
    t('Name'),
    t('Description'),
    t('Upload date'),
    t('Edit'),
    t('Delete'),
    t('Page'),
  );
  $export['administration_audio'] = $view;

  return $export;
}

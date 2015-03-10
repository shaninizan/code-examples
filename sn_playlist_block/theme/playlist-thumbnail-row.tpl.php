<?php if ($image || $thumbnail_title || $thumbnail_description): ?>
<div class="vidPlaylistThumbnails">
  <?php if ($image): ?>
  <a href="<?php print $href ?>" class="vidPlayerBlockLink" id="imglink_<?php print $href ?>">
    <img width="136" height="96" src="<?php print $image ?>" />
  </a>
  <?php endif; //image ?>

  <?php if ($thumbnail_title): ?>
  <a href="<?php print $href ?>" class="vidPlayerTextBlockLink" id="txtlink_<?php print $href?>"><?php print $thumbnail_title ?></a>
  <?php endif; //title ?>

  <?php if ($thumbnail_description): ?>
  <div class="playOverlay"><?php print $thumbnail_description ?></div>
  <?php endif; //description ?>
</div>
<?php endif; ?>

<div id="jplayer-<?php print $variables['fid']; ?>" class="jp-jplayer"></div>
<div id="jp_container_<?php print $variables['fid']; ?>" class="jp-audio">
  <div class="jp-type-single">
    <div class="jp-gui jp-interface">
      <ul class="jp-controls">
        <li><a href="javascript:;" class="jp-play" title="Play <?php print $variables['title']; ?> audio" alt="Play <?php print $variables['title']; ?> audio" accesskey="p" role="button">Play <?php print $variables['title']; ?> audio</a></li>
        <li><a href="javascript:;" class="jp-pause" title="Pause audio" alt="Pause audio" accesskey="a" role="button">Pause audio</a></li>
        <li><a href="javascript:;" class="jp-stop" title="Stop audio" alt="Stop audio" accesskey="s" role="button">Stop audio</a></li>
        <li><a href="javascript:;" class="jp-mute" title="Mute audio" alt="Mute audio" accesskey="m" role="button">Mute audio</a></li>
        <li><a href="javascript:;" class="jp-unmute" title="Unmute audio" alt="Unmute audio" accesskey="u" role="button">Unmute audio</a></li>
      </ul>
      <div class="jp-progress">
        <div class="jp-seek-bar">
          <div class="jp-play-bar"></div>
        </div>
      </div>
      <div class="jp-volume-bar">
        <div class="jp-volume-bar-value"></div>
      </div>
      <div class="jp-time-holder">
        <div class="jp-current-time"></div>
        <div class="jp-duration"></div>
      </div>
    </div>
    <div class="jp-details">
      <ul>
        <li><span class="jp-title" role="heading"></span></li>
      </ul>
    </div>
    <div class="jp-no-solution">
      <span>Update Required</span>
      To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
    </div>
  </div>
</div>

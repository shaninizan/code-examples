(function ($, Drupal) {

  Drupal.behaviors.etowahAudio = {
    attach: function (context, settings) {
      var wait,
        currentState = 'xs',
        windowWidth;

      $(window).resize(function() {
        //We are preventing our functions from firing rapidly on the page reload.

        //Clear out our time to reset it
        clearTimeout(wait);
        wait = setTimeout(function(){
          windowWidth = $(window).width();
          jQuery(document).trigger('etowah-audio', true);
        }, 200);
      }).resize();

      jQuery(document).unbind('etowah-audio');
      jQuery(document).bind('etowah-audio', function() {

        $('.pane-etowah-audio-player-pane').each(function() {
          var player = $(this),
              audioContainerWidth = player.parent().width();

          if(audioContainerWidth < 560) {
            //XS Layout
            player.removeClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');
            player.addClass('audio-player__xs');

            currentState = 'xs';
          } else if(audioContainerWidth > 560 && audioContainerWidth < 700) {
            //Tiny layout
            player.removeClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');
            player.addClass('audio-player__tiny audio-player__xs');

            currentState = 'tiny';
          } else if(audioContainerWidth >= 700 && audioContainerWidth < 920) {
            //Small Layout
            player.removeClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');
            player.addClass('audio-player__sm audio-player__tiny audio-player__xs');

            currentState = 'sm';
          }else if (audioContainerWidth >= 920 && audioContainerWidth < 1120) {
            //Medium layout
            player.removeClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');
            player.addClass('audio-player__med audio-player__sm audio-player__tiny audio-player__xs');

            currentState = 'med';
          } else if(audioContainerWidth >= 1120) {
            //Large layout
            player.removeClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');
            player.addClass('audio-player__large audio-player__med audio-player__sm audio-player__tiny audio-player__xs');

            currentState = 'large';
          }

        });

      });
    } //End Attatch
  }; // End Behavior
})(jQuery, Drupal);

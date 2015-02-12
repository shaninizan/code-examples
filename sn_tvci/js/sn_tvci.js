jQuery(document).ready(function($) {
  if(typeof(tvci) !== "undefined") {
    var game_status = tvci.game_status;
    var enabled = tvci.enabled;
    var tvci_breakpoint = tvci.breakpoint;
    var screen_width =  Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      
    if(game_status == 2 && enabled == 'enabled') {
      if (tvci_breakpoint <= screen_width ) {
         hidepage();
         window.location = tvci.tvc_page;
      }
    } else if(game_status == 2 && enabled == 'tvci') {
      if (tvci_breakpoint <= screen_width ) {
         hidepage();
         var referrer = document.referrer + '';
         var hostname = window.location.hostname + '';
         if (referrer.search(hostname) != -1) {
           showpage();
           return;
         } else {
           window.location.replace(tvci.interstitial);
         }
      }
    }
    if(Drupal.settings.splashify && (game_status != 2 || enabled == 'disabled')) {
      splashify();
    }
  } else if(Drupal.settings.splashify) {
    splashify();
  }
});
function splashify() {
  var jsmode = Drupal.settings.splashify.js_mode;

  // Prevents a flicker before the splash page shows up.
  if (jsmode == 'redirect') {
    hidepage();
  }

  var now = new Date();
  var nowtimeSeconds = now.getTime() / 1000;
  var referrer = document.referrer + '';
  var hostname = window.location.hostname + '';
  var splash = jQuery.jStorage.get("splash", 0);
  var splashalways = Drupal.settings.splashify.js_splash_always;
  var what_urls = Drupal.settings.splashify.js_mode_settings.urls;
  var referrer_check = Drupal.settings.splashify.js_disable_referrer_check;

  // This updates the referer string by taking out the url parameter from the
  // url...which is included from google search results (as an example).
  if(referrer.indexOf('?') != -1) {
    referrer = referrer.substr(0,referrer.indexOf('?'));
  }

  // Stop the splash page from show up if on the splash page. Also prevent
  // the splash from showing up from internal links (dependent on the
  // referrer check settings).
  if ((referrer.search(hostname) != -1 && !referrer_check) || jQuery.inArray(window.location.pathname, what_urls) > -1) {
    showpage();
    return;
  }

  // Determine if we should display the splash page.
  var displaysplash = false;
  if (!splash || splash < nowtimeSeconds || splashalways=='1') {
    displaysplash = true;
  }

  // Display the splash page?
  if(displaysplash){
    var expireAfter = Drupal.settings.splashify.js_expire_after;
    var last_url = jQuery.jStorage.get('splashlasturl', '');
    var url = '';
    var new_url_index = 0;

    // Set when the splash variable should expire next.
    jQuery.jStorage.set("splash", nowtimeSeconds + expireAfter);

    // Determine the url we are working with, which is based on the mode.
    if(Drupal.settings.splashify.js_mode_settings.system_splash !== ''){
      // Display the system splash page.
      url = Drupal.settings.splashify.js_mode_settings.system_splash;
    } else if(Drupal.settings.splashify.js_mode_settings.mode == 'sequence'){
      // Display the splash pages in sequence.
      var last_url_index = jQuery.inArray(last_url, what_urls);
      if(last_url_index > -1 && last_url_index+1 < Drupal.settings.splashify.js_mode_settings.total_urls){
        new_url_index = last_url_index + 1;
      }
      url = what_urls[new_url_index];
    } else if(Drupal.settings.splashify.js_mode_settings.mode == 'random'){
      // Display a random splash page.
      new_url_index = Math.floor(Math.random() * Drupal.settings.splashify.js_mode_settings.total_urls);
      url = what_urls[new_url_index];
    }

    jQuery.jStorage.set('splashlasturl', url);

    // Display the splash page.
    if(jsmode == 'redirect'){
      // Redirect.
      window.location.replace(url);
    } else if(jsmode == 'colorbox'){
      // Open a ColorBox.
      jQuery.colorbox({
        transition:'elastic',
        iframe:true,
        href:url,
        width:Drupal.settings.splashify.js_mode_settings.size_width,
        height:Drupal.settings.splashify.js_mode_settings.size_height
      });
    } else if(jsmode == 'window'){
      // Open a popup window.
      window.open(url, 'splash', Drupal.settings.splashify.js_mode_settings.size);
    }
  } else if(jsmode == 'redirect') {
      showpage();
  }
}
function showpage() {
  jQuery('html').show();
}

function hidepage() {
  jQuery('html').hide();
}

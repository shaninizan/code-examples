$(document).ready(function(){
  if($('[name^="snTeamPlaylistPlayer"]')[0]){
    if(document.domain != 'www.domainname.com'){
      document.domain = 'domainname.com';
    }
  }
 });
blnPlaylistFirstRun = true;

Drupal.behaviors.snPlayListBlockInit = function(context) {
	$('a.vidPlayerBlockLink').click(renderPlaylistBlockLinks);
	$('a.vidPlayerTextBlockLink').click(renderPlaylistBlockLinks);
};

function renderPlaylistBlockLinks(target) {
  var domId = $(this).attr('id');
  var vidId = domId.replace('imglink_', '').replace('txtlink_', '').replace(/^/video//i, '');

  if (typeof target.data != 'undefined' && typeof target.data.iframe != 'undefined') {
    var snVideoBlockplayer = $('iframe#' + target.data.iframe);
  }
  else {
    var snVideoBlockplayer = $(this).closest('.block.block-views').find('iframe.snPlaylistBlockPlayer');
    if(!$(snVideoBlockplayer[0]).is('iframe')){
      var snVideoBlockplayer = $(this).closest('.boxes-sn-playlist').find('iframe.snPlaylistBlockPlayer');
    }
    if(!$(snVideoBlockplayer[0]).is('iframe')){
        var snVideoBlockplayer = $(this).closest('div.quicktabs_main').find('iframe.snPlaylistBlockPlayer');
    }
    if(!$(snVideoBlockplayer[0]).is('iframe')){
      var snVideoBlockplayer = $(this).closest('.views-processed').find('iframe.snPlaylistBlockPlayer');
    }
    //begin looking out for a parent .view;
    if(!$(snVideoBlockplayer[0]).is('iframe')){
      var snVideoBlockplayer = $(this).closest('.view').find('iframe.snPlaylistBlockPlayer');
    }
  }
  try {
    snVideoBlockplayer[0].contentWindow.playVideo(vidId, [vidId]);
  }
  catch (e) {
    if (location.href.indexOf('teamsites') > -1) {
      alert(e);
    }
  }
	return false;
}
}
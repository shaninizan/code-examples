var nbaSearch = function(window, document, $){
  return{
    changeChannel: function(target) {
      var filter = target.val().toString() || 'all';
      var channel = Drupal.settings.search.channel;
      nbaSearch.doSearch('0',channel,filter);
    }, //end changeChannel callback function

    clickPager: function(target) {
      var thisPage = $(this).attr('data-page').toString() || 1;
      var channel = Drupal.settings.search.channel;
      var filter = Drupal.settings.search.filter;
      nbaSearch.doSearch(thisPage,channel,filter);
    }, //end clickPage callback function

    node_uts_sort: function (a,b) {
       return b.mediaDateUts - a.mediaDateUts;
    },

    doSearch: function (currentPage,channel,filter) {
      Drupal.settings.search.filter = filter;
      team = Drupal.settings.team.NAME;
      if (team == 'Hornets') {
        team = team + ',Bobcats';
      } else if (team == 'Trail Blazers') {
        team = 'blazers';
      } else if (team == '76ers') {
        team = 'sixers';
      }
      
      Drupal.settings.search.channel = channel;
      itemsPerPage = Drupal.settings.search.itemsPerPage;
      var start = currentPage * itemsPerPage + 1;
      var end = itemsPerPage + 1;
   
      switch (filter) {
        case 'stories':
          type = 'article';
          order = 'relevance';
          break;
        case 'video':
          type = 'advvideo';
          order = 'recent';
          break;
        default:
          type = 'mixed';
          order = 'relevance';
      }
      var searchUrl = Drupal.settings.search.url;
      var preq = searchUrl+'?type='+type+'&start='+start+'&npp='+(itemsPerPage+1)+'&sort='+order+'&hide=true&output=jsonp';

      query = '&text='+channel+'&site='+team;
      $.ajax({url: preq+query, dataType: 'jsonp', cache: true, jsonpCallback: 'nbaProcessSearchResults', success: mycallback});

      var mycallback = function(data) {
        // results come chunked by type in subarrays - combine together:
        var more_nodes = data.results[0];
        for (var n=0,len = more_nodes.length;n < len; n++) {
          uts = more_nodes[n].mediaDateUts;
          date = nbaSearch.timeConverter(uts);
          more_nodes[n].date = date;
          id = nbaSearch.cleanId(more_nodes[n].id);
          more_nodes[n].hash = id.hashCode();
          if (more_nodes[n].mediaType == 'advvideo') {
            more_nodes[n].id = id;
            more_nodes[n].icon = 'videos';
          }
          if (more_nodes[n].mediaType == 'article') {
            more_nodes[n].icon = 'news';
          }
        }
        if (typeof Drupal.settings.search.nodes == 'undefined') {
          Drupal.settings.search.nodes = [];
        }
        Drupal.settings.search.nodes =  Drupal.settings.search.nodes.concat(more_nodes);
    
        // Split results in half, insert an ad in the middle 
        adSplit = Math.floor(itemsPerPage/2);
        //ensure ad gets inserted after full row.
        if (adSplit%2 !== 0) adSplit ++;
        var nodesAbove = [];
        nodesAbove = more_nodes.slice(0,adSplit);
        var nodesBelow = [];
        nodesBelow = more_nodes.slice(adSplit,Math.min(itemsPerPage,more_nodes.length)); 
        
        // Only show ad if we have at least 1 or more below
        var ad = '';
        if (nodesBelow.length > 0) {
          ad = 'div-gpt-ad-search-results'+(currentPage+1);
          var nAlen = nodesAbove.length;
          nodesAbove[nAlen] = {};
          nodesAbove[nAlen].ad = ad;
        }
        data.nodes = [];
        data.nodes = nodesAbove.concat(nodesBelow);
        
        var source   = $("#search-results-template").html();
        var template = Handlebars.compile(source);
        if (currentPage > 0) {
          $("#video-archive").append(template(data));
        } else {
          $("#video-archive").html(template(data));
        }
        // Broadcast search results event.
        jQuery(document).trigger('search_results_loaded', true);
        if (ad !== '') {
          Drupal.behaviors.etowahGoogleTagConfig.generateCustomAd(ad);
        }
        showMore = (more_nodes.length > itemsPerPage) ? 1 : 0;
        pager = nbaSearch.generatePager(currentPage,showMore);
        $("#pagination").html(pager);
        if (currentPage > 0) {
          try {
            $('html,body').animate({scrollTop: $('#result-' + more_nodes[0].hash).offset().top - 60}, 1000);
          }
          catch(e){
          }
        }
        $('#pager-button').click(nbaSearch.clickPager);
      };
      window.nbaProcessSearchResults = mycallback;
    }, // end doSearch function

    cleanId: function(id) {
      var cleanIdRegex = '';
      if (id.match('video/teams/bobcats')) {
        cleanIdRegex = new RegExp('^\/video\/teams\/bobcats(.*)\/index.html');
        id =  '/'+Drupal.settings.team.NAME+'/video'+id.replace(cleanIdRegex,"$1");
        return id;
      } else if (id.match('video/channels') || id.match('video/games/') ) {
        id = id.replace('index.html','');
        cleanIdRegex = new RegExp('^\/teams\/'+Drupal.settings.team.NAME+'(.*)');
        id =  '/'+Drupal.settings.team.NAME+id.replace(cleanIdRegex,"$1");
        return id;
      } else {
        cleanIdRegex = new RegExp('^\/video\/teams\/'+Drupal.settings.team.NAME+'(.*)\/index.html');
        id =  '/'+Drupal.settings.team.NAME+'/video'+id.replace(cleanIdRegex,"$1");
        return id;
      }
    },

    timeConverter: function(UNIX_timestamp){
      var a = new Date(UNIX_timestamp*1000);
      var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      var year = a.getFullYear();
      var month = months[a.getMonth()];
      var date = a.getDate();
      var time =  month+' '+date+', '+year;
      return time;
    }, // end timeCoverter function

    generatePager: function(currentPos,showMore) {

      var html = '';
      if (showMore > 0) {
        var next = currentPos*1 + 1;
        html += '<div class="more-search-posts-button-wrapper">';
        html += '<a href="javascript:;" id="pager-button" class="button-primary button-primary--center" data-page="' + next + '">';
        html += '<div class="button-primary__text">More</div><div class="button-primary__arrow button-primary__arrow--right"></div></a></div>';
      }
      return html;
    } //end generatePager function
  }; //end nbaSearch object
}(window, document, jQuery);

String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

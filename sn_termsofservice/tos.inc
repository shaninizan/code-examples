<style>
    #block-panels-mini-mini-panel-footer.tos {margin-bottom: 50px;}
    #policy_wrapper {position:fixed; bottom:0px; left:0px; width:100%; height:70px; background:#fff; border-top:15px solid #ed174b; font-family:arial; z-index:1000;}
    #policy_wrapper #close_button {
      background: none repeat scroll 0 0 #006bb7; border-radius: 25px; color: #fff; display: block; float: right; font-size: 20px; height: 40px;line-height: 40px; margin: -45px 20px 15px 25px; text-align: center; text-decoration: none; width: 40px;
    }
    
    @media screen and (max-width:770px) and (min-width:511px) {
      #policy_wrapper {height: 100px;}
      #block-panels-mini-mini-panel-footer.tos {margin-bottom: 75px;}
      #policy_wrapper #close_button {
        margin-top: -55px
      }
    }
    @media screen and (max-width:510px) and (min-width:440px) {
      #policy_wrapper {height: 115px;}
      #block-panels-mini-mini-panel-footer.tos {margin-bottom: 100px;}
      #policy_wrapper #close_button {
        margin-top: -70px;
      }
    }
    @media screen and (max-width:439px) {
      #policy_wrapper {height: 185px;}
      #block-panels-mini-mini-panel-footer.tos {margin-bottom: 125px;}
      #policy_wrapper #close_button {
        margin: 10px auto; text-align: center; float: none;
      }
    }
    
    #policy_wrapper.close_wrapper {display:none;}
    #policy_wrapper .text {padding:5px; border-top: 2px solid #ccc; }
    #policy_wrapper .text p {margin: 0 10%;font-size: 14px; line-height: 20px; width: 70%}
 </style>

<div id="policy_wrapper" class="close_wrapper">
	<div class="text">
        <p>Our sites use cookies and similar technologies.  By using our sites, you are agreeing to our revised <a href="http://www.oursite.com/news/privacy_policy.html" target="_blank">Privacy Policy</a> and <a href="http://www.oursite.com/news/termsofuse.html " target="_blank">Terms of Service</a>, including our <a href="http://www.oursite.com/news/privacy_policy.html#cookies" target="_blank">cookie policy.</a></p>
  </div>
	<a href="javascript:close_policy_wrapper();" class="icon-close" id="close_button"></a>
</div>


<script>
function getCookie (name) {
	if(name == "path" || name == "expires" || name == "domain" || name == "version") {
		name = "badCookieName";
	}
	 var arg = name + "=";
	  var alen = arg.length;
	  var clen = document.cookie.length;
	  var i = 0;
	  while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
		  return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
	
	  }
	  return null;
}

//check for policy cookie
window.onload=function(){
	if(!getCookie('cookie_policy')){
  	jQuery('#policy_wrapper').removeClass('close_wrapper');
		jQuery('#block-panels-mini-mini-panel-footer').addClass('tos');
	}
};

function close_policy_wrapper (){
	document.cookie="TOScookieName=accept; expires=Wed, 1 Jan 2020 12:00:00 GMT; path=/";
	jQuery('#policy_wrapper').addClass('close_wrapper');
	jQuery('#block-panels-mini-mini-panel-footer').removeClass('tos');
};

</script>
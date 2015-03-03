/* Begin Terms of Service */
(function _nbaTermsOfService() {
	if(!getCookie('TOScookieName')){
	  if(window.addEventListener){
	    window.addEventListener("load", TOScontent, false);
	  } else {
			//For browsers prior to IE9 addEventListener event did not exist
			window.attachEvent(load, TOScontent);
		}
	}
})();
function TOScontent() {
  var toscode = '<style>';
  toscode += '  #tos {margin-bottom: 50px;}';
  toscode += '  #policy_wrapper {position:fixed; bottom:0px; left:0px; width:100%; height:70px; background:#fff; border-top:15px solid #ed174b; font-family:arial; z-index:1000;}';
  toscode += '  #policy_wrapper #close_button';
  toscode += '{ background: url("http://www.oursite.com/path/to/close.png") no-repeat scroll 0 0 transparent; border-radius: 25px; color: #fff; display: block; float: right; font-size: 20px; height: 40px;line-height: 40px; margin: -45px 20px 15px 25px; text-align: center; text-decoration: none; width: 40px; }';
  toscode += '  @media screen and (max-width:770px) and (min-width:511px) {';
  toscode += '     #policy_wrapper {height: 100px;}';
  toscode += '     #tos {margin-bottom: 75px;}';
  toscode += '     #policy_wrapper #close_button { margin-top: -55px}';
  toscode += '  }';
  toscode += '  @media screen and (max-width:510px) and (min-width:440px) {';
  toscode += '     #policy_wrapper {height: 115px;}';
  toscode += '     #tos {margin-bottom: 100px;}';
  toscode += '     #policy_wrapper #close_button { margin-top: -70px;}';
  toscode += '   }';
  toscode += '   @media screen and (max-width:439px) {';
  toscode += '     #policy_wrapper {height: 185px;}';
  toscode += '     #tos {margin-bottom: 125px;}';
  toscode += '     #policy_wrapper #close_button {margin: 10px auto; text-align: center; float: none;}';
  toscode += '  }';
  toscode += '  #policy_wrapper.close_wrapper {display:none;}';
  toscode += '  #policy_wrapper .text {padding:5px; border-top: 2px solid #ccc; }';
  toscode += '  #policy_wrapper .text p {margin: 0 10%;font-size: 14px; line-height: 20px; width: 70%}';
  toscode += '</style>';
  toscode += '<div id="tos">';
  toscode += '  <div id="policy_wrapper">';
  toscode += '    <div class="text">';
  toscode += '      <p>Our sites use cookies and similar technologies.  By using our sites, you are agreeing to our revised <a href="http://www.oursite.com/news/privacy_policy.html" target="_blank">Privacy Policy</a> and <a href="http://www.oursite.com/news/termsofuse.html " target="_blank">Terms of Service</a>, including our <a href="http://www.oursite.com/news/privacy_policy.html#cookies" target="_blank">cookie policy.</a></p>';
  toscode += '  </div>';
  toscode += '  <a href="javascript:close_policy_wrapper();" id="close_button"></a>';
  toscode += '  </div>'; 
  toscode += '</div>'; 
  
  document.body.insertAdjacentHTML('beforeend',toscode);
}

function getCookie(name) {
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
						  return this.getCookieVal(j);
						i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
	
	  }
	  return null;
}
function close_policy_wrapper (){
	document.cookie="TOScookieName=accept; expires=Wed, 1 Jan 2020 12:00:00 GMT; path=/";
	document.getElementById('policy_wrapper').setAttribute('class','close_wrapper');
}
function getCookieVal(offset) {
  var endstr = document.cookie.indexOf (";", offset);
  if (endstr == -1) { endstr = document.cookie.length; }
  return unescape(document.cookie.substring(offset, endstr));
}
/* end Terms of Service */

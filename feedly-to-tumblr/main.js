/* bookmarklet = 
javascript:(function(){ var scriptLoc = '//travisnine.github.io/feedly-to-tumblr/main.js'; var scriptEl = document.createElement('script'); scriptEl.src = scriptLoc; document.body.appendChild(scriptEl); })();
*/

window.f2t = {};
window.f2t.init = 
	function() {
		var newDiv = window.document.createElement('div');
		newDiv.innerHTML = ''
			+ '<div id="f2tDiv" style="padding: 10px;z-index: 99999;position: fixed;background-color: wheat;width: 100%;">'
			+ 'Hello from f2t!'
			+ '</div>'
		;
		window.document.body.insertBefore(newDiv,window.document.body.firstChild);
	};

window.f2t.init();

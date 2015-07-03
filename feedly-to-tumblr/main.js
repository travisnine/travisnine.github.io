/* bookmarklet = 
javascript:(function(){ var scriptLoc = '//travisnine.github.io/feedly-to-tumblr/main.js'; var scriptEl = document.createElement('script'); scriptEl.src = scriptLoc; document.body.appendChild(scriptEl); })();
*/

//vars
window.f2t = {};
window.f2t.logElement = {innerHTML:'',innerText:''};

//funcs
window.f2t.log = 
	function(sTextToLog) {
		window.f2t.logElement.innerText = sTextToLog;
	};
window.f2t.keyupHandler =
	function(keyEvt) {
		// TODO: Sort through list with keys
	};
window.f2t.init = 
	function() {
		var newDiv = window.document.createElement('div');
		newDiv.innerHTML = ''
			+ '<div id="f2tDiv" style="padding:10px;z-index:1000000;position:fixed;background-color:wheat;width:100%;">'
			+ 'Hello from f2t!'
			+ '</div>'
		;
		window.document.body.insertBefore(newDiv,window.document.body.firstChild);
		window.f2t.logElement = document.getElementById('f2tDiv');
		window.addEventListener('keyup',window.f2t.keyupHandler,true);
	};

window.f2t.init();
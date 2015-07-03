window.f2t = {};
window.f2t.init = 
	function() {
		var newDiv = window.document.createElement('div');
		var newDiv.innerHTML = ''
			+ '<div id="f2tDiv" style="padding: 10px;">'
			+ 'Hello from f2t!'
			+ '</div>'
		;
		window.document.insertBefore(newDiv,window.document.firstChild);
	};

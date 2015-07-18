window.kUyF0G9Cl9uAkscKtPap = {};
window.kUyF0G9Cl9uAkscKtPap.debug = [];
window.kUyF0G9Cl9uAkscKtPap.sourceText = document.getElementById('sourceText');
window.kUyF0G9Cl9uAkscKtPap.destText = document.getElementById('destText');
window.kUyF0G9Cl9uAkscKtPap.regExExtract =
	function(txtBox,e) {
		if (e.keyCode == 13) {
			var regExToExtract = new RegExp(txtBox.value,'gi'); txtBox.value = '';
			var sIn = window.kUyF0G9Cl9uAkscKtPap.sourceText.value;
			var tbOut = window.kUyF0G9Cl9uAkscKtPap.destText;
			tbOut.value = '';
			var match = null;
			while (match = regExToExtract.exec(sIn)) {
				tbOut.value += match[0] + '\n';
			};
		};
	};

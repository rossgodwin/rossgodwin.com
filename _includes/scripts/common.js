(function () {
	var SOURCES = window.TEXT_VARIABLES.sources;
	
	window.Lazyload.js(SOURCES.jquery, function() {
		$(document).ready(function() {
			
			// Closes the sidebar menu
			$(".page-header-menu-toggler").click(function(e) {
				$(".page-header-navigation").toggleClass("active");
			});
		});
	});
	
	window.Lazyload.js(SOURCES.highlightjs, function() {
		document.querySelectorAll('pre code').forEach((block) => {
			hljs.highlightBlock(block);
		});
	});
})();

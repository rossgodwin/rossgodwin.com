/**
 * Check if element is visible within the viewport.
 * https://stackoverflow.com/questions/44923021/unsupported-pseudo-in-viewport
 * 
 * @param el
 * @returns {Boolean}
 */
function isInViewport(el) {
	if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
	var rect = el.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};

/**
 * 
 * @param galleries
 */
function initPhotoGalleries(galleries, baseUrl) {
	if (baseUrl == null || baseUrl === 'undefined') {
		baseUrl = '';
	}
	
	$.each(galleries, function(i, gallery) {
		if (gallery.type == 'dynamic') {
			$("#" + gallery.id).on('click', function() {
				var d = [];
				
				$.each(gallery.images, function(i, image) {
	            	var o = new Object();
					o.src = baseUrl + image.url;
					o.thumb = baseUrl + image.thumbnail_url;
					if (image.html_content) {
						o.subHtml = image.html_content
					}
					
					d.push(o);
	            });
				
				$(this).lightGallery({
					dynamic: true,
					dynamicEl: d
				})
			});
		} else if (gallery.type == 'thumbnails') {
			$("#" + gallery.id).lightGallery({
				thumbnail: true
			});
			$("#" + gallery.id).justifiedGallery();
		}
	});
};
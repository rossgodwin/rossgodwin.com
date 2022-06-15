/**
 * 
 * @param charts
 */
function animatePieCharts(charts) {
	if (typeof $.fn.easyPieChart != 'undefined') {
		$.each(charts, function(i, chart) {
			$("." + chart.id).each(function() {
				var $t = $(this);
				if (isInViewport($t)) {
					var n = $t.parent().width();
					var size = $t.attr("data-barSize");
					
					if (n < size) {
						size = n;
					}

					$t.css("height", size);
					$t.css("width", size);
					$t.css("line-height", size + "px");

					$t.find("i").css({
						"line-height": size + "px",
						"font-size": size / 3
					});

					var animate = 1300;
					var lineCap = $t.attr("data-lineCap");
					var lineWidth = $t.attr("data-lineWidth");
					var barColor = $t.attr("data-barColor");
					var trackColor = $t.attr("data-trackColor");
					var scaleColor = $t.attr("data-scaleColor");

					if ($t.attr("data-enableOnStep") === "true") {
						$t.easyPieChart({
							animate: animate,
							lineCap: lineCap,
							lineWidth: lineWidth,
							size: size,
							barColor: barColor,
							trackColor: trackColor,
							scaleColor: scaleColor,
							onStep: function(from, to, percent) {
								$(this.el).find('.' + chart.data-text-id).text(Math.round(percent));
							}
						});
					} else {
						$t.easyPieChart({
							animate: animate,
							lineCap: lineCap,
							lineWidth: lineWidth,
							size: size,
							barColor: barColor,
							trackColor: trackColor,
							scaleColor: scaleColor,
						});
					}
				}
			});
		});
	}
};
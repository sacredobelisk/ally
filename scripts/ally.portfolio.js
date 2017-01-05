(function($) {

	/**
	 * @param options
	 */
	$.fn.portfolio = function(options) {

		var settings = {
			classes : {
				hover : "hover"
			}
		};

		var options = $.extend(settings, options);

		return this.each(function(i, e) {
			var obj = $(this);

			return new Portfolio(obj, options);
		});
	};

	/**
	 * 
	 */
	function Portfolio(ele, settings) {
		this.element = $(ele);
		this.settings = settings;

		init.call(this);

		registerEvents.call(this);
	}

	/**
	 * 
	 */
	function init() {
		var obj = this;

		$("#thumbs li").each(function(i, e) {
			$(e).append("<span class=\"overlay\"></span>");
		});
	}

	/**
	 * 
	 */
	function registerEvents() {
		var obj = this;

		$(document).delegate("#thumbs li", "mouseover", function(event) {
			var ele = $(event.currentTarget);
			ele.addClass(obj.settings.classes.hover);
			ele.siblings("." + obj.settings.classes.hover).removeClass(obj.settings.classes.hover);

			var src = ele.find("img").attr("src").replace("thumbs", "large");

			$("#large img").attr("src", src);
		});

		$($("#thumbs li")[0]).mouseover();
	}
})(jQuery);

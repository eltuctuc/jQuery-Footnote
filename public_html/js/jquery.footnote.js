(function($) {

	$.fn.footnote = function(options) {

		var settings = $.extend({}, $.fn.footnote.defaults, options);

		return this.each(function(index) {
			var ol = $('<ol>')
					.addClass('footnotes-list')
					.appendTo($(this));

			$('a', $(this)).each(function(index) {
				var $this = $(this);
				
				var a = $('<a>')
						.attr('href', '#footnote-' + index)
						.addClass('footnote')
						.html(index + 1);

				$('<sup>')
						.html(a)
						.insertAfter($this);

				$this.after($this.html());

				$('<li>')
						.attr('id', 'footnote-' + index)
						.addClass('footnote-item')
						.append($this)
						.appendTo(ol);
			});
		});
	};

	$.fn.footnote.defaults = {};
}(jQuery));
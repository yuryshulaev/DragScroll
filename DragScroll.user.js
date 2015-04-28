// ==UserScript==
// @name        DragScroll
// @include     *
// @version     1
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// ==/UserScript==

(function ($) {
	var dragging = false;
	var initialLeft, initialTop, initialX, initialY;
	var scrollable = $(window);

	scrollable.contextmenu(function (e) {
		return false;
	});

	scrollable.mousedown(function (e) {
		if (e.which !== 3) {
			return true;
		}

		dragging = true;
		initialLeft = $(this).scrollLeft();
		initialTop = $(this).scrollTop();
		initialX = e.clientX;
		initialY = e.clientY;
		return false;
	});

	scrollable.mousemove(function (e) {
		if (!dragging) {
			return true;
		}
		
		$(this).scrollLeft(initialLeft - (e.clientX - initialX));
		$(this).scrollTop(initialTop - (e.clientY - initialY));
		return false;
	});

	scrollable.mouseup(function (e) {
		if (e.which !== 3) {
			return true;
		}
		
		dragging = false;
		return false;
	});
})(jQuery.noConflict(true));

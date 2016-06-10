$(function () {

  "use strict";

  // Scroll to top
  $('.navbar > .nav-scroll-top').on('click', function (e) {
        $("html, body").animate({scrollTop: 0}, 200);
        return false;
  });

  // Show inline page
	$('.inline-page-button').on('click', function (e) {
			var view_id = $(e.currentTarget).data('view-id');
			$('.inline-page').addClass('hidden');
			$("[class~='inline-box']").addClass('hidden');
			$("[class~='inline-box'][id*=main-]").removeClass('hidden');
			$('#' + view_id).removeClass('hidden');
			$("html, body").animate({scrollTop: $('#' + view_id).offset().top - $('header.main-header').height() - 10}, 200);
	    return false;
	});

  // Show inline box
	$('.inline-box-button').on('click', function (e) {
			var view_id = $(e.currentTarget).data('view-id');
			$('.inline-box').addClass('hidden');
			$('#' + view_id).removeClass('hidden');
	    return false;
	});

});

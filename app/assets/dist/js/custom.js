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
			$('.inline-box').addClass('hidden');
			$("[class~='inline-box'][id*=main-]").removeClass('hidden');
			$('#' + view_id).removeClass('hidden');
			$("html, body").animate({scrollTop: $('#' + view_id).offset().top - $('header.main-header').height() - 10}, 200);
	    return false;
	});

  // Show inline box
	$('.inline-box-button').on('click', function (e) {
			var view_id = $(e.currentTarget).data('view-id'),
				ref_id = $(e.currentTarget).data('ref-id');
			$('#' + ref_id).addClass('hidden');
			$('#' + view_id).removeClass('hidden');
	    return false;
	});

    $('.date-picker').datepicker({
      autoclose: true
    });

    $('input').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue',
    });

    $(".select2").select2();

    $("[data-toggle=popover]").popover({
    	html: true,
		content: function() {
          return $('#popover-content').html();
        }
	});

	$('#customers-receipts-name').on('keydown', function(e) {
	    if (e.which == 13 && $('#customers-receipts-name').val() == "john") {
	    	$('#customers-receipts-phone').val('09121234567');
	    	$('#customers-receipts-email').val('john@gmail.com');
	    	$('#customers-receipts-address').val('Ho Chi Minh City');
	    	$('#customers-receipts-product-table tr:last').after('<tr><td>Led A (Autohint)</td><td><span data-toggle="popover">50</span></td><td>200</td><td>$700</td><td><div class="btn-group btn-group-sm"><a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></a></div></td></tr><tr><td>Led B (Promotion)</td><td><span data-toggle="popover">100</span></td><td>400</td><td>$400</td><td><div class="btn-group btn-group-sm"><a href="#" class="btn btn-danger"><span class="glyphicon glyphicon-remove"></span></a></div></td></tr>');
	    }
	});
});

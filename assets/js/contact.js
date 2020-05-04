(function($){

	$(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Subscribe form ajax
		/* ---------------------------------------------- */

		$('#subscription-form').submit(function(e) {

			e.preventDefault();
			var $form           = $('#subscription-form');
			var submit          = $('#subscription-form submit');
			var ajaxResponse    = $('#subscription-message');
			var email           = $('input#sub-email').val();

			$.ajax({
				type: 'POST',
				url: 'assets/php/subscribe.php',
				dataType: 'json',
				data: {
					email: email
				},
				cache: false,
				beforeSend: function(result) {
					submit.empty();
					submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
				},
				success: function(result) {
					if(result.sendstatus == 1) {
						ajaxResponse.html('<p>' + result.message + '</p>');
						$form.fadeOut(500);
					} else {
						ajaxResponse.html('<p>' + result.message + '</p>');
					}
				}
			});

		});

	});

})(jQuery);
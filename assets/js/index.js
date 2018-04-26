$(document).ready(function()  {

	
	// nav scrolling
	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

			$('form').placeholder();

			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

							if (href.charAt(0) != '#')
								return;

							event.preventDefault();

							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
					});

				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});
	
	// load wrapper
	$("body").addClass("loaded");

	$(function () {
		$('a[rel="lightbox"]').fluidbox();
	});
	
	// contact form
	$("#contact_form").submit(function(){
	  var name = $("#name").val();
	  var email = $("#email").val();
	  var message = $("#message").val();

	  $.ajax({
		  type: 'POST',
		  url: 'https://mandrillapp.com/api/1.0/messages/send.json',
		  data: {
			  'key': '_voF2a2upINovc4ZNrHvqw',
			  'message': {
				  'from_name': name,
				  'from_email': email,
				   'to': [
						  {
							  'email': 'yingyingszetoo@gmail.com',
							  'name': 'Ying Ying',
							  'type': 'to'
						  }
					
						],
				  'autotext': 'true',
				  'subject': 'Testing Email',
				  'html': message
			  }
		  } 
	  }).done(function(response) {
			  alert('Your message has been sent. Thank you!'); 
			  $("#name").val('');
			  $("#email").val('');
			  $("#message").val('');
		  }).fail(function(response) {
				  alert('Error sending message.');
		   });
			  return false;
	  });
	  
	    // alert
	  // $('#sendMessage').click(function () {
//		  $( "#dialog" ).dialog(); // Shows the new alert box.
//	  });

})(jQuery);
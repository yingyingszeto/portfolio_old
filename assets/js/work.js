$( document ).ready(function() {
	
	// isotope
    var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function(){
		var $this = $(this);
  
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });
	
	$('#glsmile_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#glsmile_content').fadeIn();
		$('#glsmile_content').siblings().fadeOut();
	});
	
	$('#powerseal_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#powerseal_content').fadeIn();
		$('#powerseal_content').siblings().fadeOut();
	});
	
	$('#yukispa_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#yukispa_content').fadeIn();
		$('#yukispa_content').siblings().fadeOut();
	});
	
	$('#granitesearch_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#granitesearch_content').fadeIn();
		$('#granitesearch_content').siblings().fadeOut();
	});
	
	$('#hayleylya_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#hayleylya_content').fadeIn();
		$('#hayleylya_content').siblings().fadeOut();
	});
	
	$('#benhenry_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#benhenry_content').fadeIn();
		$('#benhenry_content').siblings().fadeOut();
	});
	
	$('#tatatap_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#tatatap_content').fadeIn();
		$('#tatatap_content').siblings().fadeOut();
	});
	
	$('#hubandspoke_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#hubandspoke_content').fadeIn();
		$('#hubandspoke_content').siblings().fadeOut();
	});
	
	$('#glhome_btn').click(function() {
		$(this).addClass('active_work_img');
		$(this).siblings().removeClass('active_work_img');
		$('#glhome_content').fadeIn();
		$('#glhome_content').siblings().fadeOut();
	});
	
	$('#glsmile_btn').click();
	
	// nav 
	$('#all_button').click(function() {
		$(this).addClass('active');
		$('#web_button').removeClass('active');
		$('#responsive_button').removeClass('active');
		$('#uxd_button').removeClass('active');
		$('#identity_button').removeClass('active');
	});
	
	$('#web_button').click(function() {
		$(this).addClass('active');
		$('#all_button').removeClass('active');
		$('#responsive_button').removeClass('active');
		$('#uxd_button').removeClass('active');
		$('#identity_button').removeClass('active');
	});
	
	$('#responsive_button').click(function() {
		$(this).addClass('active');
		$('#all_button').removeClass('active');
		$('#web_button').removeClass('active');
		$('#uxd_button').removeClass('active');
		$('#identity_button').removeClass('active');
	});
	
	$('#uxd_button').click(function() {
		$(this).addClass('active');
		$('#all_button').removeClass('active');
		$('#web_button').removeClass('active');
		$('#responsive_button').removeClass('active');
		$('#identity_button').removeClass('active');
	});
	
	$('#identity_button').click(function() {
		$(this).addClass('active');
		$('#all_button').removeClass('active');
		$('#web_button').removeClass('active');
		$('#responsive_button').removeClass('active');
		$('#uxd_button').removeClass('active');
	});
	
	$('#all_button').click();

    
});
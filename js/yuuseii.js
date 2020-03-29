$(document).ready(function() {
   $('.btn').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('openmenu');
     
  });
});

$(document).ready(function() {
	$('.question h4').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('active').parent().siblings().find('h4').removeClass('active');
		$(this).parent().find('p').slideToggle().parent().siblings().find('p').slideUp();
	});
});


// 首頁swiper

$(document).ready(function() {
	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 3000,

    effect : 'fade',
	fadeEffect: {
    crossFade: true,
	},


    autoplay: {
    delay: 1000,
	},

    
  })
	
});

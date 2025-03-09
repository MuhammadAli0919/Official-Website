$(document).ready(function(){

     $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll',function(){
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if($(window).scrollTop()>35)
        {
            $('.header').css({'background':'#002e5f','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)'});
        }
        else
        {
            $('.header').css({'background':'none','box-shadow':'none'});
        }
    });

    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;
		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};
	  updateCount();
   });

   (function ($) {
    "use strict";
    
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 2}, 768: {items: 4}, 900: {items: 6} }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: { 0: {items: 1}, 576: {items: 2}, 768: {items: 3}, 992: {items: 4} }
    });
    
})(jQuery);

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

$('.accordion-header').click(function(){
    $('.accordion .accordion-body').slideUp(500);
    $(this).next('.accordion-body').slideDown(500);
    $('.accordion .accordion-header span').text('+');
    $(this).children('span').text('-');
});

});

document.getElementById('seeMore').addEventListener('click', function () {
    const content = document.getElementById('content');
    const seeMoreButton = document.getElementById('seeMore');
    const arrow = document.getElementById('arrow');

    // Toggle the 'active' class to expand or collapse content
    seeMoreButton.classList.toggle('active');
    
    // Optional: Change button text based on the content's state
    if (seeMoreButton.classList.contains('active')) {
        seeMoreButton.innerHTML = '<span id="arrow" class="arrow">&#8593;</span> See Less';
    } else {
        seeMoreButton.innerHTML = '<span id="arrow" class="arrow">&#8595;</span> See More';
    }
});

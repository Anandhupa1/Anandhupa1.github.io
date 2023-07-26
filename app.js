const hamburger = document.querySelector('.header .nav-menu .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-menu .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-menu .nav-list ul li a');
const header = document.querySelector('.navbar');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	
   if (scroll_position > 3700) {
		header.style.backgroundColor = '#000';
	} 
  else if (scroll_position > 3100) {
		header.style.backgroundColor = '#fff';
	} 
  else if (scroll_position > 2600) {
		header.style.backgroundColor = '#000';
	} 
  else if (scroll_position > 1100) {
		header.style.backgroundColor = '#E6E6E6';
	} 
  else if (scroll_position > 500) {
		header.style.backgroundColor = '#fff';
	} 
  else {
		header.style.backgroundColor = 'transparent';
	}
});


//navbar
 // slide-up script


  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });



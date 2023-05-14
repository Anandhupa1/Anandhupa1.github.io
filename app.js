const hamburger = document.querySelector('.header .nav-menu .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-menu .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-menu .nav-list ul li a');
const header = document.querySelector('.header.container');


document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#E6E6E6';
	} else {
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

// let resumeBtn = document.querySelector("#resume");
// resumeBtn.addEventListener("click",(e)=>{
// 	e.preventDefault();

//    setTimeout(()=>{
// 	window.location.href="https://drive.google.com/file/d/1Zz_xGvoLY_bsOq0ahVqspZSfEtX-Af-F/view?usp=share_link"
//    },500)


	
// })


//github calendar

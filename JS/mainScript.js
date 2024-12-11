$(window).scroll(function() {

  //Adds the nav bar when user starts to scroll
  if ($(window).scrollTop() > 50 ) {
      $('.navbar').addClass('bg-white');
  } else {
      $('.navbar').removeClass('bg-white');
  }
});


function checkShowClass() {
  // Get the element with ID 'navbarNav'
  const navbarNav = document.getElementById('navbarNav');

  // Check if the element has the 'show' class
  if (navbarNav.classList.contains('show')) {
  //   if ($(window).scrollTop() < 50 ) {
  //     $('.navbar').removeClass('bg-white');
  // } 
  } else {
    $('.navbar').addClass('bg-white');
  }
}

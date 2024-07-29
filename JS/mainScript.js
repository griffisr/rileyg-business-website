
document.addEventListener('DOMContentLoaded', function() {
        //Adds the nav bar when user starts to scroll
        if ($(window).width() < 768) {
            $('#contact-section').addClass('container');
            $('#contact-section').removeClass('container-fluid');
        } else {
            $('#contact-section').addClass('container-fluid');
            $('#contact-section').removeClass('container');
        }
    document.querySelectorAll('.smoothscroll').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }
      });
    });
  });
  
/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000).delay(3000).fadeOut(1000, function() {
        var $next = $(this).next('.quote');
        fade($next.length > 0 ? $next : $(this).parent().children().first());
   });
}
fade($('.quoteLoop > .quote').first());




(function() {
    var selectors = {
        nav: '[data-features-nav]',
        tabs: '[data-features-tabs]',
        active: '.__active'
    }
    var classes = {
        active: '__active'
    }
    $('a', selectors.nav).on('click', function() {
        let $this = $(this)[0];
        $(selectors.active, selectors.nav).removeClass(classes.active);
        $($this).addClass(classes.active);
        $('div', selectors.tabs).removeClass(classes.active);
        $($this.hash, selectors.tabs).addClass(classes.active);
        return false
    });
}());

$(".btn-with-icon").on("click", function() {
    $(".wave-anim").addClass('visible').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd", function() {
        $(".wave-anim").removeClass('visible');
    });
});



/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function() {

    //Adds the nav bar when user starts to scroll
    if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('sticky-top');
        console.log("stickey on")
    } else {
        $('.navbar').removeClass('sticky-top');
        console.log("stickey off")
    }
});
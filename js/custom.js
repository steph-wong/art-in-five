$(document).ready(function() {

// collapse the navbar on scroll on index.html //
$(window).scroll(function() {
  if (window.location.pathname == '/index.html') {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  }
});

// wow jquery
$(function(){
  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // hide mobile menu after clicking link
  $('.navbar-collapse a').click(function(){
        $('.navbar-collapse').collapse('hide');
    });
});

  // ARTIST PAGE
  // ** for ajax, add error redirect to html
  // trigger popup
  $('.artistContainer').on('click', 'div', function(e) {
    $('[data-popup=popup]').fadeIn(350);
    $('.load-page').append('<iframe width="100%" height="100%" src="' + 'artist-profile.html" ' + 'frameborder="0"></iframe>');    e.preventDefault();
  });
  // close popup
  $('[data-popup-close]').on('click', function(e) {
    $('[data-popup=popup]').fadeOut(350);
    $('.load-page').empty();
    e.preventDefault();
  });



});

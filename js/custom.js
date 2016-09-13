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
        $(".navbar-collapse").collapse('hide');
    });

});


});

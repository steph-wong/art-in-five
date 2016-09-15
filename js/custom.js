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

  // **  for ajax, add error redirect to html
  // ajax call to popular artists
  var URL = 'https://ancient-wave-42701.herokuapp.com/api/artist_prof/57da16dac1c62f0011ab3b9c';

  $.ajax({
      url: URL,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {

      // formatting name and year
      var name = data.localartist.name;
      var nameSplit = name.split("");
      var nameJoin = [];

      for (var i = 0; i < nameSplit.length; i++) {
        if(nameSplit[i] === '(' ) {
          nameSplit[i] = '<h4>(';
        }
       else nameSplit[i];
      }
      for (var j = 0; j < nameSplit.length; j++) {
        if(nameSplit[j] === ')') {
          nameSplit[j] = ')</h4>';
        }
        else nameSplit[j];
      }
      nameJoin = nameSplit.join("");

      // var populate_artists = function(data){
        // for (var i = 0; i < data.length; i++) {
          $('.artistContainer').append(
            $('<div class="indivArtist" data-popup-open="popup"><img src="' + data.paintings[2].image_url + '" width="150px"   height="170px">' + nameJoin + '</div>')
          );
        // }
      // };
    })

.fail(function(request, textStatus, errorThrown) {
  console.log("An error occured: " + request.status + " " + textStatus + " " + errorThrown);
});



  // trigger popup
  $('.artistContainer').on('click', 'div', function(e) {
    $('[data-popup=popup]').fadeIn(350);
    $('.load-page').append('<iframe width="100%" height="100%" src="' + 'artist-profile.html" ' + 'frameborder="0"></iframe>');
    e.preventDefault();
  });
  // close popup
  $('[data-popup-close]').on('click', function(e) {
    $('[data-popup=popup]').fadeOut(350);
    $('.load-page').empty();
    e.preventDefault();
  });



});

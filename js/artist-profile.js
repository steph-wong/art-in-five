$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#f6f6f6'],
    slidesNavigation: true,
    keyboardScrolling: true,
  });


// ajax call

// ***************************
//SLIDE ONE
// ***************************

  // var artist_id = this. b id;
  var URI = '57da015daaa9d10011ac1d5a';
  var URL = 'https://ancient-wave-42701.herokuapp.com/api/artist_prof/' + URI;

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
          nameSplit[i] = '</h1><h3>(';
        }
       else nameSplit[i];
      }
      for (var j = 0; j < nameSplit.length; j++) {
        if(nameSplit[j] === ')') {
          nameSplit[j] = ')</h3>';
        }
        else nameSplit[j];
      }
      nameJoin = nameSplit.join("");
      $('#slideOneHeader').html($('<h1>' + nameJoin));

      // grabbing artist photo from db
      $('#slideOneImg').html($('<img src=\"' + 'http://placehold.it/300x350' + '\" class=\"img-responsive big-img\">'));

      // formatting bio to list form
      var bio = data.localartist.bio;
      var bioSplit = bio.split("");
      var bioJoin = [];

      for (var i = 0; i < bioSplit.length; i++) {
        if(bioSplit[i] === '@') {
          bioSplit[i] = '<li>';
        }
       else bioSplit[i];
      }
      for (var j = 0; j < bioSplit.length; j++) {
        if(bioSplit[j] === '%') {
          bioSplit[j] = '</li>';
        }
        else bioSplit[j];
      }
      bioJoin = bioSplit.join("");
      $('#slideOneContent').html(bioJoin);


// ***************************
// SLIDE TWO
// ***************************

    // formatting background string
    var background = data.localartist.background;
    var backgroundSplit = background.split("");
    var backgroundJoin = [];

    for (var i = 0; i < backgroundSplit.length; i++) {
      if(backgroundSplit[i] === '@') {
        backgroundSplit[i] = '<li>';
      }
     else backgroundSplit[i];
    }
    for (var j = 0; j < backgroundSplit.length; j++) {
      if(backgroundSplit[j] === '%') {
        backgroundSplit[j] = '</li>';
      }
      else backgroundSplit[j];
    }
    backgroundJoin = backgroundSplit.join("");
    $('#slideTwoContent').html(backgroundJoin);

    // grabbing background photo from db
    $('#slideTwoImg').html($('<img src=\"' + 'http://placehold.it/300x350' + '\" class=\"img-responsive big-img\">'));


// ***************************
// SLIDE THREE
// ***************************

  // formatting influencer name
  var influence = data.localartist.influence;
  var influenceSplit = influence.split('%@');
  var influenceName = influenceSplit[0].split(" ").slice(1).join(" ");
  var influenceArtwork = influenceSplit[1].split(" ").slice(1).join(" ");

  $('#slideThreeHeader').html('<h2>Influence - ' + influenceName +
'</h2>');

// grabbing image of artist's artwork from db
$('#slideThreeImg').html($('<img src=\"' + 'http://placehold.it/300x350' + '\" class=\"img-responsive big-img\">'));

// grabbing image of influencer's artwork from db
$('#slideThreeInfluence').html($('<img src=\"' + 'http://placehold.it/300x350' + '\" class=\"img-responsive big-img\"><p>' + influenceArtwork + '</p>'));


// ***************************
// SLIDE FOUR
// ***************************

  // formatting style content string
  var style = data.localartist.style;
  var styleSplit = style.split("");
  var styleJoin = [];

  for (var i = 0; i < styleSplit.length; i++) {
    if(styleSplit[i] === '@') {
      styleSplit[i] = '<li>';
    }
   else styleSplit[i];
  }
  for (var j = 0; j < styleSplit.length; j++) {
    if(styleSplit[j] === '%') {
      styleSplit[j] = '</li>';
    }
    else styleSplit[j];
  }
  styleJoin = styleSplit.join("");
  $('#slideFourContent').html(styleJoin);

  // grabbing image of artist's style from db
  $('#slideFourImg').html($('<img src=\"' + 'http://placehold.it/300x350' + '\" class=\"img-responsive big-img\">'));


  // ***************************
  // SLIDE FIVE
  // ***************************

    // grabbing image of artist's iconic work from db
    $('#slideFiveImg').html($('<img src=\"' + 'http://placehold.it/600x350' + '\" class=\"img-responsive giant-img\">'));


  // ***************************
  // SLIDE SIX
  // ***************************

    // grabbing image of similar artist 1 from db
    $('#slideSixArtistOne').html($('<img src=\"' + 'http://placehold.it/200x350' + '\" class=\"img-responsive small-img\">'));

    // grabbing image of imilar artist 2 from db
    $('#slideSixArtistTwo').html($('<img src=\"' + 'http://placehold.it/200x350' + '\" class=\"img-responsive small-img\">'));

    // grabbing image of imilar artist 3 from db
    $('#slideSixArtistThree').html($('<img src=\"' + 'http://placehold.it/200x350' + '\" class=\"img-responsive small-img\">'));

  })

  .fail(function(request, textStatus, errorThrown) {
    console.log("An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
  });

});

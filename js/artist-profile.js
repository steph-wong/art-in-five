$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#f6f6f6'],
    slidesNavigation: true,
    keyboardScrolling: true,
  });


// ajax call

  // function to get id params from URL

    // function to get params from URL
    var QueryString = function () {
    // This function is anonymous, is executed immediately and
    // the return value is assigned to QueryString!
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
          // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
          // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
          // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
    }();

    var artist_id = QueryString.artist_id;
    var URI = artist_id;
    var URL = 'https://ancient-wave-42701.herokuapp.com/api/artist_prof/'+URI;

  $.ajax({
      url: URL,
      type: 'GET',
      dataType: 'json',
    })
    .done(function(data) {


    // ***************************
    // SLIDE ONE
    // ***************************

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
      $('#slideOneImg').html($('<img src=\"' + data.paintings[0].image_url + '\" class=\"img-responsive big-img\">'));

      // formatting bio to list form
      var bio = data.localartist.bio;
      var bioSplit = bio.split("");
      var bioJoin = [];

      function checkBioFirstChac() {
        if(bioSplit[0] === '%') {
          bioSplit[0] = '@';
        } else bioSplit[0];
      }
      checkBioFirstChac();

      for (var i = 0; i < bioSplit.length; i++) {
        if(bioSplit[0] === '%') {
          bioSplit[0] = '@';
        }
        else if(bioSplit[i] === '@') {
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

    function checkBgFirstChac() {
      if(backgroundSplit[0] === '%') {
        backgroundSplit[0] = '@';
      } else backgroundSplit[0];
    }
    checkBgFirstChac();

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
    $('#slideTwoImg').html($('<img src=\"' + data.paintings[1].image_url + '\" class=\"img-responsive big-img\"><p>' + data.paintings[1].title  + '</p>'));


// ***************************
// SLIDE THREE
// ***************************

  // formatting influencer name
  var influence = data.localartist.influence;
  var influenceSplit = influence.split('%@');
  var influenceName = influenceSplit[0].split(" ").slice(1).join(" ");

  $('#slideThreeHeader').html('<h2>Influence - ' + influenceName +
'</h2>');

// grabbing image of artist's artwork from db
$('#slideThreeImg').html($('<img src=\"' + data.paintings[2].image_url + '\" class=\"img-responsive big-img\"><p>' + data.paintings[2].title + '</p>'));

// grabbing image of influencer's artwork from db
$('#slideThreeInfluence').html($('<img src=\"' + data.paintings[5].image_url + '\" class=\"img-responsive big-img\"><p>' + data.paintings[5].title + '</p>'));


// ***************************
// SLIDE FOUR
// ***************************

  // formatting style content string
  var style = data.localartist.style;
  var styleSplit = style.split("");
  var styleJoin = [];

  function checkStyleFirstChac() {
    if(styleSplit[0] === '%') {
      styleSplit[0] = '@';
    } else styleSplit[0];
  }
  checkStyleFirstChac();

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
    $('#slideFourImg').html($('<img src=\"' + data.paintings[3].image_url + '\" class=\"img-responsive giant-img\"><p>' + data.paintings[3].title + '</p>'));


  // ***************************
  // SLIDE FIVE
  // ***************************

    // grabbing image of artist's iconic work from db
    $('#slideFiveImg').html($('<img src=\"' + data.paintings[4].image_url + '\" class=\"img-responsive giant-img\"><p>' + data.paintings[4].title + '</p>'));


  // ***************************
  // SLIDE SIX
  // ***************************

    var similar = data.localartist.similar_artists;
    var similarSplit1 = similar.split("").slice(1).join("");
    var similarSplit = similarSplit1.split("").slice(0, -1).join("").split('%@');

    // grabbing image of similar artist 1 from db
    $('#slideSixArtistOne').html($('<img src=\"images/painting.png\"><h3>' + similarSplit[0] + '</h3>'));

    // grabbing image of imilar artist 2 from db
    $('#slideSixArtistTwo').html($('<img src=\"images/museum.png\"><h3>' + similarSplit[1] + '</h3>'));

    // grabbing image of imilar artist 3 from db
    $('#slideSixArtistThree').html($('<img src=\"images/painting.png\"><h3>' + similarSplit[2] + '</h3>'));

    // grabbing image of imilar artist 4 from db
    $('#slideSixArtistFour').html($('<img src=\"images/museum.png\"><h3>' + similarSplit[3] + '</h3>'));

  })

  .fail(function(request, textStatus, errorThrown) {
    console.log("An error occured when processing your phrase. Request " + request.status + " " + textStatus + " " + errorThrown);
  });

});

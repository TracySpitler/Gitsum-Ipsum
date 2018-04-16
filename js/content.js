/* JS Fetch
================================================== */

const client_id = 'client_id=f852db6eb81775d1c6d04696094453c7228fa15b76122906fdfaf31ad4397c62';
const API = 'https://api.unsplash.com/';
let ipsums = '../ipsums.json';

fetch(ipsums)
  .then(response => response.json())
  .then(data => {

    for (var i = 0; data.ipsum.length; i++) {

      // Fill Gallery
      var post = '<section id="ipsum-gallery" class="container mb-5">';

      for (i = 0; i < 9; i++) {
        post += '<div id="ipsum" class="row justify-content-center">';
        post += '<article class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">';
        post += '<div class="bg-container">';
        post += '<p class="description">' + data.ipsum[i].description + '</p>';
        post += '<div class="overlay">';
        post += '<h5 class="">' + data.ipsum[i].name + '</h5>';
        post += '<p class="example">' + data.ipsum[i].example + '</p>';
        post += '<p><a class="info" href="' + data.ipsum[i].url + '">Get it!</a></p>';
        post += '</div></div></article>';
        post += '</div></section>';
      }

      document.querySelector('#ipsum-gallery').innerHTML = post;
    }
  });

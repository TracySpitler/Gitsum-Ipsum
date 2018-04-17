/* JS Fetch
================================================== */
let ipsums = 'https://api.myjson.com/bins/uf82v';

let randomPhoto = API + 'search/photos/?page=3&query=travel&' + client_id;

fetch(ipsums)
  .then(response => response.json())
  .then(data => {
    // Here's a list of unsplash photos!
    console.log(data)

    for (var i = 0; i < 9; i++) {

      // Fill Gallery
      var post = '<p>Please let this work!</p>';

      // for (i = 0; i < 9; i++) {
      //   post += '<article class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-5">';
      //   post += '<div class="bg-container">';
      //   post += '<p class="description">' + data.ipsum[i].description + '</p>';
      //   post += '<div class="overlay">';
      //   post += '<h5 class="">' + data.ipsum[i].name + '</h5>';
      //   post += '<p class="example">' + data.ipsum[i].example + '</p>';
      //   post += '<p><a class="info" href="' + data.ipsum[i].url + '">Get it!</a></p>';
      //   post += '</div></div></article>';
      // }


      //post += '</ul>';
      document.querySelector('#ipsum').innerHTML = post;
    }
  });

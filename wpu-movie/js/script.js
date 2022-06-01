const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const movieList = document.querySelector("#movie-list");

function searchMovie() {
  movieList.innerHTML = "";
  $.ajax({
    // Mau diarahin kemana servernya? Mau ngambil data dari mana?
    url: "http://www.omdbapi.com",

    // Methodnya mau apa mau get, post, pust, atau delete
    type: "get",

    // Mau dikembalikan dalam bentuk apa? Bisa json, jsonp, atau xml
    dataType: "json",

    // Mau megirimkan parameter apa? Pada ajax, kita bisa mengirimkan data melalui ini tidak lagi melalui urlnya. Kalau datanya 1, bisa langsung ditulis, kalau datanya banyak, kita harus pake object.
    data: {
      apikey: "88e82c0f",
      s: searchInput.value,
    },

    // Bila success, jalankan sebuah function yang menerima sebuah paramater hasilnya. Nama parameternya bebas.
    success: function (result) {
      console.log(result);
      if (result.Response == "True") {
        let movies = result.Search;

        movies.forEach((data) => {
          $("#movie-list").append(`
            <div class=col-md-4>
              <div class="card mb-3">
                <img class="card-img-top" src="` + data.Poster + `" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">` + data.Title + `</h5>
                  <h6 class="card-subtitle mb-2 text-muted">` + data.Year + `</h6>
                  <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">See detail</a>
                </div>
              </div>
            </div>
        `);
        });

        searchInput.value = "";
      } else {
        console.log(result);
        movieList.innerHTML =
          `
            <div class="col">
              <h1 class="text-center">` + result.Error + `</h1>
            </div>
          `;
      }
    },
  });
}

$("#search-button").on("click", function () {
  searchMovie();
});

$("#search-input").on("keyup", function (event) {
  if (event.which === 13) {
    searchMovie();
  }
});

// JQuery tolong carikan saya element dengan id movie-list, lalu ketika saya click element dengan class see-detail di dalamnya, baik itu munculnya dari awal ataupun nanti, jalankan function berikut
$('#movie-list').on("click", '.see-detail', function() {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "get",
    dataType: "json",
    data: {
      apikey: "88e82c0f",
      i: $(this).data('id'),
    },
    success: function (result) {
      const modalTitle = document.querySelector('.modal-title');
      const modalBody = document.querySelector('.modal-body');
      if (result.Response == "True") {
        console.log(result);
        modalTitle.innerHTML = `
          <div>` + result.Title + `</div>
        `;
        modalBody.innerHTML = `
          <div>Released : ` + result.Released + `</div>
          <div>Director : ` + result.Director + `</div>
          <div>Plot :</div>
          <div>` + result.Plot + `</div>
        `;
      } else {
        console.log(result);
        movieList.innerHTML =
          `
            <div class="col">
              <h1 class="text-center">` + result.Error + `</h1>
            </div>
          `;
      }
    },
  });
});

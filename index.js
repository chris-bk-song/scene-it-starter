document.addEventListener('DOMContentLoaded', function() {
  // code here will execute after the document is loaded
  function renderMovies(movieArray) {
    var movieHtmlArray = movieArray.map(function(currentMovie) {
      return `<div class="box">
                <img src="${currentMovie.Poster}" height="450" width="300">
                <h2>${currentMovie.Title} (${currentMovie.Year}) <button onclick="saveToWatchlist('${currentMovie.imdbID}')">ADD</button></h2>
              </div>`
    });
    
    return movieHtmlArray.join(``);

  }
  // const movieContainer = document.querySelector('.movies-container');
  // movieContainer.innerHTML = renderMovies(movieData); // part 8 of step 2

  const myForm = document.getElementById('search-form');
  myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var searchString = document.getElementsByClassName('search-bar')[0].value;
    var urlEncodedSearchString = encodeURIComponent(searchString);
    axios.get("https://www.omdbapi.com/?apikey=b43843a0&s=" + urlEncodedSearchString)
      .then(function(response) {
        console.log(response.data);
        movieContainer.innerHTML = renderMovies(response.data.Search);
        movieData = response.data.Search;
      });
    const movieContainer = document.querySelector('.movies-container');
  });
});

function saveToWatchlist (imdbID) {
  console.log(imdbID);
  const movie = movieData.find(function(currentMovie) {
    return currentMovie.imdbID == imdbID;
    });
  let watchlistJSON = localStorage.getItem('watchlist');
  let watchlist = JSON.parse(watchlistJSON);
  if (watchlist === null) {
    watchlist = [];
  };
  watchlist.push(movie);
  watchlistJSON = JSON.stringify(watchlist);
  localStorage.setItem('watchlist', watchlistJSON);
};

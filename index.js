document.addEventListener('DOMContentLoaded', function() {
  // code here will execute after the document is loaded
  function renderMovies(movieArray) {
    var movieHtmlArray = movieArray.map(function(currentMovie) {
      return `<div>
                <img src="${currentMovie.Poster}">
                <h2>${currentMovie.Title} (${currentMovie.Year})</h2>
                <button onclick="saveToWatchlist('${currentMovie.imdbID}')">ADD</button>
              </div>`
    });
    
    return movieHtmlArray.join('');

  }
  // const movieContainer = document.querySelector('.movies-container');
  // movieContainer.innerHTML = renderMovies(movieData); // part 8 of step 2
  const myForm = document.getElementById('search-form');
  myForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const movieContainer = document.querySelector('.movies-container');
    movieContainer.innerHTML = renderMovies(movieData);
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

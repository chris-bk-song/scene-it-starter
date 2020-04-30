const watchList = localStorage.getItem('watchlist');
const savedWatchList = JSON.parse(watchList);

function renderMovies(movieArray) {
  var movieHtmlArray = movieArray.map(function(currentMovie) {
    return `<div>
              <img src="${currentMovie.Poster}">
              <h2>${currentMovie.Title} (${currentMovie.Year})</h2>
            </div>`
  });
  return movieHtmlArray.join(``);
};

const movieContainer = document.querySelector('.movies-container')
movieContainer.innerHTML = renderMovies(savedWatchList);
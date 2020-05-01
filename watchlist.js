// still needs to create remove from saved list button
const watchList = localStorage.getItem('watchlist');
const savedWatchList = JSON.parse(watchList);

function renderMovies(movieArray) {
  var movieHtmlArray = movieArray.map(function(currentMovie) {
    return `<div class="box">
              <img src="${currentMovie.Poster}" height="450" width="300">
              <h2>${currentMovie.Title} (${currentMovie.Year})</h2>
            </div>`
  });
  return movieHtmlArray.join(``);
};

const movieContainer = document.querySelector('.movies-container')
movieContainer.innerHTML = renderMovies(savedWatchList);
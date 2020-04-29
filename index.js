document.addEventListener('DOMContentLoaded', function() {
  // code here will execute after the document is loaded
  function renderMovies(movieArray) {
    var movieHtmlArray = movieArray.map(function(currentMovie) {
      return `<div>
                <h2>${currentMovie.Title}</h2>
                <img src="${currentMovie.Poster}">
              
              </div>`
    });
    return movieHtmlArray.join('');
  }
  const movieContainer = document.querySelector('.movies-container');
  movieContainer.innerHTML = renderMovies(movieData);
});
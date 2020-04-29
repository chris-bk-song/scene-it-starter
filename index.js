document.addEventListener('DOMContentLoaded', function() {
  // code here will execute after the document is loaded
  function renderMovies(movieArray) {
    var movieHtmlArray = movieArray.map(function(currentMovie) {
      return `<div>
                <img src="${currentMovie.Poster}">
                <h2>${currentMovie.Title} (${currentMovie.Year})</h2>
                <p>imdbID: ${currentMovie.imdbID}       <button>ADD</button></p>
                
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
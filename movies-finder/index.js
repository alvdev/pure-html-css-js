const fetchData = async searchTerm => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        s: searchTerm,
      })
  );

  const results = await response.json();

  // Fix console iterable error if any movie is not found
  if (results.Error) return [];

  return results.Search;
};

createAutocomplete({
  root: document.querySelector('.autocomplete'),
});

const onMovieSelect = async movie => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        i: movie.imdbID,
      })
  );

  document.querySelector('.summary').innerHTML = movieTemplate(
    await response.json()
  );
};

const movieTemplate = movieInfo => {
  return `
    <article class="media">
      <figure class="media-left">
        <p class="image">
          <img src="${movieInfo.Poster} alt="">
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1>${movieInfo.Title}</h1>
          <h4>${movieInfo.Genre}</h4>
          <p>${movieInfo.Plot}</p>
        </div>
      </div>
    </article>
    
    <article class="notification is-primary">
      <p class="title">${movieInfo.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieInfo.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieInfo.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieInfo.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>

    <article class="notification is-primary">
      <p class="title">${movieInfo.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};

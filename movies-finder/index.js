const autoCompleteConfig = {
  renderOption(movie) {
    const img = movie.Poster === 'N/A' ? '' : movie.Poster;
    return `
      <img src="${img}" alt="">
      ${movie.Title} (${movie.Year})
    `;
  },
  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchTerm) {
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
  },
};

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector('#left-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
  },
});

createAutocomplete({
  ...autoCompleteConfig,
  root: document.querySelector('#right-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
  },
});

let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        i: movie.imdbID,
      })
  );
  const data = await response.json();
  summaryElement.innerHTML = movieTemplate(data);

  // Assign fetched movie data to a var to be able to comparing later
  side === 'left' ? (leftMovie = data) : (rightMovie = data);

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  // Find the first 'article' element for each movie
  // Run a comparison on the # of awards
  // Then apply some styling to that 'article element
  const leftArticles = document.querySelectorAll('#left-summary .notification');
  const rightArticles = document.querySelectorAll(
    '#right-summary .notification'
  );

  leftArticles.forEach((leftItem, index) => {
    if (leftItem.dataset.set < rightArticles[index].dataset.set) {
      leftItem.classList.remove('is-primary');
      leftItem.classList.add('is-warning');
    } else {
      rightItem[index].classList.remove('is-primary');
      rightItem[index].classList.add('is-warning');
    }
  });
};

const movieTemplate = movieInfo => {
  const awards = movieInfo.Awards.split(' ').reduce((acc, curr) => {
    const value = parseInt(curr);
    if (isNaN(value)) {
      return acc;
    } else {
      return acc + value;
    }
  }, 0);
  const boxOffice = parseInt(movieInfo.BoxOffice.replace(/[$,]/gi, ''));
  const metaScore = parseInt(movieInfo.Metascore);
  const imdbRating = parseFloat(movieInfo.imdbRating);
  const imdbVotes = parseInt(movieInfo.imdbVotes.replace(/,/gi, ''));

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
    
    <article data-set="${awards}" class="notification is-primary">
      <p class="title">${movieInfo.Awards}</p>
      <p class="subtitle">Awards</p>
    </article>

    <article data-set="${boxOffice}" class="notification is-primary">
      <p class="title">${movieInfo.BoxOffice}</p>
      <p class="subtitle">Box Office</p>
    </article>

    <article data-set="${metaScore}" class="notification is-primary">
      <p class="title">${movieInfo.Metascore}</p>
      <p class="subtitle">Metascore</p>
    </article>

    <article data-set="${imdbRating}" class="notification is-primary">
      <p class="title">${movieInfo.imdbRating}</p>
      <p class="subtitle">IMDB Rating</p>
    </article>

    <article data-set="${imdbVotes}" class="notification is-primary">
      <p class="title">${movieInfo.imdbVotes}</p>
      <p class="subtitle">IMDB Votes</p>
    </article>
  `;
};

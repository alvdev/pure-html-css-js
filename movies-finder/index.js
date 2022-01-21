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

const root = document.querySelector('.autocomplete');
root.innerHTML = `
  <div>
    <label for="search">
      <strong>Search for a movies</strong>
    </label>
    <input id="search" class="input" type="text">
  </div>
  <div class="dropdown">
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const results = document.querySelector('.results');

const onInput = async e => {
  const movies = await fetchData(e.target.value);

  if (!movies.length) {
    dropdown.classList.remove('is-active');
    return;
  }

  results.innerHTML = '';
  dropdown.classList.add('is-active');
  for (let movie of movies) {
    const option = document.createElement('a');
    const img = movie.Poster === 'N/A' ? '' : movie.Poster;

    option.setAttribute('href', '#');
    option.classList.add('dropdown-item');
    option.innerHTML = `
      <img src="${img}" alt="">
      <h1>${movie.Title}</h1>
    `;

    results.appendChild(option);

    // Update input value with clicked movie title
    option.addEventListener('click', () => {
      input.value = movie.Title;
      dropdown.classList.remove('is-active');
      onMovieSelect(movie);
    });
  }
};
input.addEventListener('input', debounce(onInput, 500));

document.addEventListener('click', e => {
  if (!root.contains(e.target)) dropdown.classList.remove('is-active');
});

const onMovieSelect = async () => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        i: 'tt1285016',
      })
  );

  return await response.json();
};

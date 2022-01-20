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
    <label for="search" class="block">
      <strong>Search for a movies</strong>
    </label>
    <input id="search" class="block" type="text">
  </div>
  <div class="dropdown">
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content results">
        </div>
    </div>
  </div>
`;

const input = document.querySelector('input');
const dropdown = document.querySelector('.dropdown');
const results = document.querySelector('.results');

const onInput = async e => {
  const movies = await fetchData(e.target.value);

  dropdown.classList.add('is-active');

  results.innerHTML = '';
  for (let movie of movies) {
    const option = document.createElement('a');

    option.setAttribute('href', '#')
    option.setAttribute('class', 'dropdown-item');
    option.innerHTML = `
      <img src="${movie.Poster}" alt="">
      <h1>${movie.Title}</h1>
    `;
    
    results.appendChild(option);
  }
};

input.addEventListener('input', debounce(onInput, 500));

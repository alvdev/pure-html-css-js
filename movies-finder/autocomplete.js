const createAutocomplete = ({ root, renderOption }) => {
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

  const input = root.querySelector('input');
  const dropdown = root.querySelector('.dropdown');
  const results = root.querySelector('.results');

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

      option.setAttribute('href', '#');
      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(movie);

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
};

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

const input = document.querySelector('input');

const onInput = async e => {
  const movies = await fetchData(e.target.value);
  console.log(movies);
  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
      <h1>${movie.Title}</h1>
      <img src="${movie.Poster}" alt="">
    `;
    document.body.appendChild(div);
  }
};

input.addEventListener('input', debounce(onInput, 500));

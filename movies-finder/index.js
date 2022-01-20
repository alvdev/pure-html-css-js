const fetchData = async searchTerm => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        s: searchTerm,
      })
  );

  console.log(await response.json());
};

const input = document.querySelector('input');

const onInput = e => {
  fetchData(e.target.value);
};

input.addEventListener('input', debounce(onInput, 500));

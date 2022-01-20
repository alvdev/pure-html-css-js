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

// Avoid api queries between keystrokes lasting less than 1 second by default
const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = e => {
  fetchData(e.target.value);
}

input.addEventListener('input', debounce(onInput, 500))

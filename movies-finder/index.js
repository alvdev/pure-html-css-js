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

let timeoutId;
const onInput = input.addEventListener('keypress', e => {
  if (timeoutId) clearTimeout(timeoutId);
  // Avoid api queries between keystrokes lasting less 1 second
  timeoutId = setTimeout(() => {
    fetchData(e.target.value);
  }, 1000);
});

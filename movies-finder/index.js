const fetchData = async () => {
  const response = await fetch(
    'https://www.omdbapi.com?' +
      new URLSearchParams({
        apikey: '3e690ec9',
        s: 'avengers',
      })
  );

  console.log(await response.json());
};

fetchData();

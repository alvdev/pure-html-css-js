const createAutocomplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
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
    const items = await fetchData(e.target.value);

    if (!items.length) {
      dropdown.classList.remove('is-active');
      return;
    }

    results.innerHTML = '';
    dropdown.classList.add('is-active');
    for (let item of items) {
      const option = document.createElement('a');

      option.setAttribute('href', '#');
      option.classList.add('dropdown-item');
      option.innerHTML = renderOption(item);

      results.appendChild(option);

      // Update input value with clicked movie title
      option.addEventListener('click', () => {
        input.value = inputValue(item);
        dropdown.classList.remove('is-active');
        onOptionSelect(item);
      });
    }
  };
  input.addEventListener('input', debounce(onInput, 500));

  // Close dropdown when click outside root element
  document.addEventListener('click', e => {
    if (!root.contains(e.target)) dropdown.classList.remove('is-active');
  });
};

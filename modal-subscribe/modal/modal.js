async function fetchModal() {
  const res = await fetch('./modal/modal.html');
  const data = await res.text();
  return data;
}

fetchModal().then(modalHtml => {
  document.body.insertAdjacentHTML('beforeend', modalHtml);
});

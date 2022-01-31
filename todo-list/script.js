const addBtn = document.querySelector('.add');
const removeBtn = document.querySelector('.remove');
const inputVal = document.querySelector('#add-task');
const form = document.querySelector('#todo');

addBtn.addEventListener('click', e => {
  e.preventDefault();
  const task = inputVal.value;
  if (inputVal.value) {
    form.append(task);
  }
});

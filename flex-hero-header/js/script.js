// Burguer Menu
document.addEventListener('click', () => {
  const burger = document.querySelector('#burger');
 
  burger.classList.contains('hide') ?
    burger.classList.remove('hide') :
    burger.classList.add('hide')

});
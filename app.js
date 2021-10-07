//  Function to get rid of preloader
window.addEventListener('load',() => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish')
});

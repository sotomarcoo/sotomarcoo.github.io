const btMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.ul-menu');

btMenu.addEventListener('click', ()=>{
  menu.classList.toggle('active');
})


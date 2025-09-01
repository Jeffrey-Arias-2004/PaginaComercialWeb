const btnHamburguesa = document.getElementById('btnHamburguesa');
const menu = document.getElementById('menu');

btnHamburguesa.addEventListener('click', () => {
  menu.classList.toggle('activo');


  if (menu.classList.contains('activo')) {
    btnHamburguesa.textContent = '✖';
  } else {
    btnHamburguesa.textContent = '☰';
  }
});

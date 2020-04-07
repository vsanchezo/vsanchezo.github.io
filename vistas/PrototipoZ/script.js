//funcion para seleccionar elementos

const seleccionarElemento = (s) => document.querySelector(s);

//abrir el menu onClick
seleccionarElemento('.open').addEventListener('click', () => {
    seleccionarElemento('.nav-list').classList.add('active');
});

//cerrar el menu onClick
seleccionarElemento('.close').addEventListener('click', () => {
    seleccionarElemento('.nav-list').classList.remove('active');
});
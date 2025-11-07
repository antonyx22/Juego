// ====== CONFIGURA AQUÍ TUS IMÁGENES ======
const imagenes = {
  ronda1: [
    { src: 'imagen 1a.jpeg', correcta: true },
    { src: 'imagen 1b.jpeg', correcta: false }
  ],
  ronda2: [
    { src: 'imagen 2a.jpeg', correcta: true },
    { src: 'imagen 2b.jpeg', correcta: false }
  ]
};
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
  const app = document.getElementById('app');
  let rondaActual = 1;

  function mostrarRonda(ronda) {
    app.innerHTML = '';

    const titulo = document.createElement('h2');
    titulo.textContent = 'Ronda ' + ronda;
    app.appendChild(titulo);

    const contenedor = document.createElement('div');

    imagenes['ronda' + ronda].forEach(info => {
      const img = document.createElement('img');
      img.src = info.src;
      img.alt = 'opción';

      img.addEventListener('click', function () {
        if (info.correcta) {
          if (ronda === 1) {
            rondaActual = 2;
            mostrarRonda(rondaActual);
          } else {
            mostrarMensajeGanador();
          }
        } else {
          alert('Incorrecto, intenta nuevamente.');
        }
      });

      contenedor.appendChild(img);
    });

    app.appendChild(contenedor);
  }

  function mostrarMensajeGanador() {
    app.innerHTML = '';
    const mensaje = document.createElement('h2');
    mensaje.textContent = '¡Ganaste!';
    mensaje.classList.add('ganaste');
    app.appendChild(mensaje);
  }

  mostrarRonda(rondaActual);
});

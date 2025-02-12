document.getElementById('noBtn').addEventListener('mouseover', function() {
    const button = this;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    // Genera una posición aleatoria dentro de los límites de la pantalla
    const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));

    // Mueve el botón a la nueva posición
    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

document.getElementById('siBtn').addEventListener('click', function() {
    const container = document.querySelector('.container');
    const mensaje = document.getElementById('mensaje');

    // Agranda el contenedor y muestra el mensaje
    container.classList.add('agrandado');
    mensaje.classList.remove('hidden');
    mensaje.classList.add('mostrado');

    // Oculta el botón "No" solo cuando se hace clic en "Sí"
    document.getElementById('noBtn').style.display = 'none';
});
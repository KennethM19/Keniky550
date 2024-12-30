const carousel = document.querySelector('#carousel');
const items = document.querySelectorAll('.carousel-item');

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Establece la posición como el índice del elemento clicado (+1 porque los índices empiezan en 0)
        const newPosition = index + 1;
        carousel.style.setProperty('--position', newPosition);
    });
});

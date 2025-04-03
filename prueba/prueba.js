const carousel = document.querySelector('#carousel');
const items = document.querySelectorAll('.carousel-item');

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        const newPosition = index + 1;
        carousel.style.setProperty('--position', newPosition);
    });
});

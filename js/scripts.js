const carousel = document.querySelector('#carousel');
const items = document.querySelectorAll('.carousel-item');

let startX = 0;
let endX = 0;

items.forEach((item, index) => {
    item.addEventListener('click', () => {
        const newPosition = index + 1;
        carousel.style.setProperty('--position', newPosition);
    });
});

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', () => {
    const threshold = 50;
    if (startX - endX > threshold) {
        changePosition(1);
    } else if (endX - startX > threshold) {
        changePosition(-1);
    }
});

function changePosition(direction) {
    const currentPosition = parseInt(getComputedStyle(carousel).getPropertyValue('--position'));
    const totalItems = items.length;

    let newPosition = currentPosition + direction;

    if (newPosition > totalItems) {
        newPosition = 1;
    } else if (newPosition < 1) {
        newPosition = totalItems;
    }

    carousel.style.setProperty('--position', newPosition);
}

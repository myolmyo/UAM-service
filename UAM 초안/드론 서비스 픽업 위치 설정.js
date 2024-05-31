document.addEventListener('DOMContentLoaded', (event) => {
    const map = document.getElementById('map');
    const pin = document.getElementById('pin');

    map.addEventListener('click', function(event) {
        const rect = map.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        pin.style.left = `${x}px`;
        pin.style.top = `${y}px`;
    });
});
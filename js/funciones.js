
const shows = {
    comedia: [
        { id: 1, title: 'El Inspector', price: 25, image: '../img/Inspector.jpg' },
        { id: 2, title: 'Locos de Amor', price: 30, image: '../img/LocosDeAmor.jpg' }
    ],
    drama: [
        { id: 3, title: 'Romeo y Julieta', price: 35, image: '../img/Romeo&Julieta.jpg' },
        { id: 4, title: 'La Casa de Bernarda Alba', price: 32, image: '../img/LaCasaDeBernandaAlba.jpg' }
    ],
    musical: [
        { id: 5, title: 'El Fantasma de la Ópera', price: 40, image: '../img/ElFantasmaDeLaOpera.jpg' },
        { id: 6, title: 'Chicago', price: 38, image: '../img/Chicago.jpg' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const category = sessionStorage.getItem('selectedCategory');
    const showsContainer = document.getElementById('shows');
    
    shows[category].forEach(show => {
        const showCard = document.createElement('div');
        showCard.className = 'show-card';
        showCard.innerHTML = `
            <img src="${show.image}" alt="${show.title}" style="width: 200px; height: auto;">
            <h3>${show.title}</h3>
            <p>Precio: $${show.price}</p>
            <button class="btn" onclick="selectShow(${show.id}, '${show.title}', ${show.price})">
                Seleccionar
            </button>
        `;
        showsContainer.appendChild(showCard);
    });
});

function selectShow(id, title, price) {
    sessionStorage.setItem('selectedShow', JSON.stringify({id, title, price}));
    window.location.href = 'asientos.html';
}
document.addEventListener('DOMContentLoaded', () => {
    const show = JSON.parse(sessionStorage.getItem('selectedShow'));
    const seats = JSON.parse(sessionStorage.getItem('selectedSeats'));
    const date = sessionStorage.getItem('selectedDate');
    const time = sessionStorage.getItem('selectedTime');
    
    const totalPrice = show.price * seats.length;
    
    const summaryContent = document.getElementById('summary-content');
    summaryContent.innerHTML = `
        <p><strong>Obra:</strong> ${show.title}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Asientos:</strong> ${seats.join(', ')}</p>
        <p><strong>Precio por entrada:</strong> $${show.price}</p>
        <p><strong>Precio total:</strong> $${totalPrice}</p>
    `;
});

function finalizePurchase() {
    window.location.href = 'gracias.html';
}
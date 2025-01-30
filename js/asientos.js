let selectedSeats = [];

document.addEventListener("DOMContentLoaded", () => {
  generateSeats();
});

function generateSeats() {
  const seatsGrid = document.getElementById("seats-grid");

  for (let i = 0; i < 50; i++) {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.textContent = i + 1;
    seat.onclick = () => toggleSeat(i + 1, seat);

    if (Math.random() < 0.3) {
      seat.className = "seat occupied";
    }

    seatsGrid.appendChild(seat);
  }
}

function toggleSeat(seatNumber, seatElement) {
  if (seatElement.classList.contains("occupied")) return;

  if (seatElement.classList.contains("selected")) {
    seatElement.classList.remove("selected");
    selectedSeats = selectedSeats.filter((seat) => seat !== seatNumber);
  } else {
    seatElement.classList.add("selected");
    selectedSeats.push(seatNumber);
  }
}

function continueToSummary() {
  if (selectedSeats.length === 0) {
    alert("Por favor seleccione al menos un asiento");
    return;
  }

  const date = document.getElementById("show-date").value;
  const time = document.getElementById("show-time").value;

  if (!date) {
    alert("Por favor seleccione una fecha");
    return;
  }

  sessionStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  sessionStorage.setItem("selectedDate", date);
  sessionStorage.setItem("selectedTime", time);

  window.location.href = "resumen.html";
}

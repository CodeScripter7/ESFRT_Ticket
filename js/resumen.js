document.addEventListener("DOMContentLoaded", () => {
  const show = JSON.parse(sessionStorage.getItem("selectedShow"));
  const seats = JSON.parse(sessionStorage.getItem("selectedSeats"));
  const date = sessionStorage.getItem("selectedDate");
  const time = sessionStorage.getItem("selectedTime");

  const totalPrice = show.price * seats.length;

  const summaryContent = document.getElementById("summary-content");
  summaryContent.innerHTML = `
        <p><strong>Obra:</strong> ${show.title}</p>
        <p><strong>Fecha:</strong> ${date}</p>
        <p><strong>Hora:</strong> ${time}</p>
        <p><strong>Asientos:</strong> ${seats.join(", ")}</p>
        <p><strong>Precio por entrada:</strong> $${show.price}</p>
        <p><strong>Precio total:</strong> $${totalPrice}</p>
    `;

  // Add event listeners for input validation
  document
    .getElementById("card-number")
    .addEventListener("input", formatCardNumber);
  document
    .getElementById("expiry-date")
    .addEventListener("input", formatExpiryDate);
  document.getElementById("cvv").addEventListener("input", formatCVV);

  // Aplicar el tema guardado
  applyTheme();
});

function finalizePurchase() {
  document.querySelector(".auth-overlay").style.display = "block";
  document.getElementById("payment-form").style.display = "block";
}

function handlePayment(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("#name").value;
  const cardNumber = form.querySelector("#card-number").value;
  const expiryDate = form.querySelector("#expiry-date").value;
  const cvv = form.querySelector("#cvv").value;

  if (validateForm(name, cardNumber, expiryDate, cvv)) {
    // In a real application, you would process the payment here
    console.log("Payment processed for:", name);

    savePurchaseInfo(name);
    window.location.href = "gracias.html";
  }
}

function cancelPayment() {
  document.querySelector(".auth-overlay").style.display = "none";
  document.getElementById("payment-form").style.display = "none";
}

function validateForm(name, cardNumber, expiryDate, cvv) {
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  const cardNumberRegex = /^\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
  const expiryDateRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  const cvvRegex = /^\d{3,4}$/;

  if (!nameRegex.test(name)) {
    alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
    return false;
  }

  if (!cardNumberRegex.test(cardNumber.replace(/\s/g, ""))) {
    alert("Por favor, ingrese un número de tarjeta válido (16 dígitos).");
    return false;
  }

  if (!expiryDateRegex.test(expiryDate)) {
    alert("Por favor, ingrese una fecha de expiración válida (MM/AA).");
    return false;
  }

  if (!cvvRegex.test(cvv)) {
    alert("Por favor, ingrese un CVV válido (3 o 4 dígitos).");
    return false;
  }

  return true;
}

function formatCardNumber(event) {
  const input = event.target;
  const value = input.value.replace(/\D/g, "");
  let formattedValue = "";
  for (let i = 0; i < value.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formattedValue += " ";
    }
    formattedValue += value[i];
  }
  input.value = formattedValue;
}

function formatExpiryDate(event) {
  const input = event.target;
  let value = input.value.replace(/\D/g, "");
  if (value.length > 2) {
    value = value.slice(0, 2) + "/" + value.slice(2);
  }
  input.value = value;
}

function formatCVV(event) {
  const input = event.target;
  input.value = input.value.replace(/\D/g, "");
}

function savePurchaseInfo(name) {
  const purchaseInfo = {
    show: JSON.parse(sessionStorage.getItem("selectedShow")),
    seats: JSON.parse(sessionStorage.getItem("selectedSeats")),
    date: sessionStorage.getItem("selectedDate"),
    time: sessionStorage.getItem("selectedTime"),
    customerName: name,
  };
  localStorage.setItem("lastPurchase", JSON.stringify(purchaseInfo));
}

function volverALaPaginaPrincipal() {
  window.location.href = "../index.html";
}

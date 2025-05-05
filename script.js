function bookSlot() {
  window.location.href = "https://calendly.com/YOUR-LINK";
}

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle "Book your slot now" button click
document.getElementById('bookSlotBtn').addEventListener('click', function() {
  const email = prompt("Please enter your email to book your slot:");
  if (email && /\S+@\S+\.\S+/.test(email)) {
    document.getElementById('bookingMessage').textContent = "Thank you for booking your slot, " + email + "!";
  } else if (email !== null) {
    document.getElementById('bookingMessage').textContent = "Please enter a valid email address.";
  } else {
    document.getElementById('bookingMessage').textContent = "";
  }
});
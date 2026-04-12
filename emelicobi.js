function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("show");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
  alert("Thank you for contacting Emelicobi! We’ll get back to you soon.");
}
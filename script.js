const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");
const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");
const header = document.querySelector(".site-header");

// Mobile menu toggle
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

// Close menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

// Header shadow on scroll
if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = "0 4px 20px rgba(42, 35, 32, 0.08)";
    } else {
      header.style.boxShadow = "none";
    }
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent("Cerere programare coaching");
    const body = encodeURIComponent(
      `Bună,\n\nNume: ${name}\nEmail: ${email}\nTelefon: ${phone}\nTip coaching: ${service}\n\nMesaj:\n${message}\n`
    );

    formMessage.textContent =
      "Cererea ta este pregătită. Se va deschide aplicația de email pentru trimitere.";

    setTimeout(() => {
      window.location.href = `mailto:maria_ned@yahoo.com?subject=${subject}&body=${body}`;
    }, 400);

    bookingForm.reset();
  });
}
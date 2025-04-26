// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }
};

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Typed.js Text Animation
const typed = new Typed("#typed-text", {
  strings: ["Web Developer", "Designer", "Creator"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// EmailJS Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zualyf6", "template_8zin162", this)
    .then(() => {
      document.getElementById("formStatus").textContent = "✅ Message sent successfully!";
      this.reset();
    }, (error) => {
      document.getElementById("formStatus").textContent = "❌ Failed to send message. Try again.";
      console.error("EmailJS error:", error);
    });
});

// Swiper Carousel Initialization
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// Typed.js animation
const typed = new Typed("#typed-text", {
  strings: ["Web Developer", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ click me"
    : "🌙 click me";
});

// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
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
});

// EmailJS form submit
console.log("Form is being submitted...");

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_zualyf6", "template_8zin162", this).then(
    function () {
      formStatus.style.color = "green";
      formStatus.textContent = "Message sent successfully!";
      contactForm.reset();
    },
    function (error) {
      formStatus.style.color = "red";
      formStatus.textContent = "Oops! Something went wrong...";
      console.error("EmailJS error:", error);
    }
  );
});
// Swiper for Image Gallery (1 image at a time, auto-slide)
new Swiper(".gallerySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".gallerySwiper .swiper-pagination",
    clickable: true,
  },
});

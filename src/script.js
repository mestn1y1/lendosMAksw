// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.3 }
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// FAQ accordion
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// HEADER background on scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

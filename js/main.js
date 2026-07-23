// =====================
// SOBRE Y APERTURA
// =====================

const envelopeContainer = document.getElementById("envelope");
const envelope = document.querySelector(".envelope");
const seal = document.getElementById("seal");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("musicToggle");

seal.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
  envelopeContainer.classList.add("hide");
  document.body.classList.remove("opening");
  document.body.classList.add("revealed");
  document.body.style.overflow = "auto";

  music.play();
  musicToggle.style.display = "block";
}, 1400);
});

// =====================
// CONTROL MÚSICA
// =====================

let isPlaying = true;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = "🔇";
  } else {
    music.play();
    musicToggle.textContent = "🔊";
  }
  isPlaying = !isPlaying;
});

// =====================
// COUNTDOWN
// =====================

const weddingDate = new Date(2027, 1, 6, 0, 0, 0).getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// =====================
// FADE ON SCROLL
// =====================

const fadeSections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

fadeSections.forEach((section) => observer.observe(section));

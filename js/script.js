// script.js
const music = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusic');
const frequencyIcon = document.getElementById('frequencyIcon');
const playIcon = document.getElementById('playIcon');

// Memulai musik otomatis dan animasi
window.onload = () => {
  document.body.classList.add('loaded');
  music.play();
  createParticles(); // Membuat partikel saat halaman dimuat
};

toggleButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggleIcons(false); // Kembali ke ikon frekuensi
  } else {
    music.pause();
    toggleIcons(true); // Ubah ke ikon play
  }
});

function toggleIcons(isPaused) {
  if (isPaused) {
    playIcon.style.display = 'block';
    frequencyIcon.style.display = 'none';
  } else {
    playIcon.style.display = 'none';
    frequencyIcon.style.display = 'flex';
  }
}

// Fungsi untuk membuat partikel love
function createParticles() {
  const container = document.getElementById('particle-container');
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(particle);
  }
}

// Efek Scroll - Memudar Teks
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > 50) {
    document.body.classList.add('scrolling');
  } else {
    document.body.classList.remove('scrolling');
  }

  if (scrollPosition > windowHeight / 2) {
    document.body.classList.add('fully-scrolled');
  } else {
    document.body.classList.remove('fully-scrolled');
  }
});

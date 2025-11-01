// feather
feather.replace();

// Carousel otomatis
let current = 0;
const images = document.querySelectorAll(".carousel img");

setInterval(() => {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}, 3000); // ganti gambar tiap 3 detik

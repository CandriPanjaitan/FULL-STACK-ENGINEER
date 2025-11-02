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

// hamburger
const navbarMenu = document.querySelector(".navbar-menu");

// klik hamburger
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// klick di luar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarMenu.contains(e.target)){
    navbarMenu.classList.remove('active');
  }
});
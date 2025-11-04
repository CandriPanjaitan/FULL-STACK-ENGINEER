// feather
feather.replace();

// Toogle Class Active
const navMenu = document.querySelector(".nav-menu");
// Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
  }
});


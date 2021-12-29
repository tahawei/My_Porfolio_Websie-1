const btnMobile = document.querySelector(".btn-mobil");

function toggleMenu() {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);

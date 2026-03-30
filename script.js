const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const body = document.querySelector("body");

let isOpen = false;

function openMenu() {
  isOpen = true;
  mobileMenu.classList.add("open");
  body.classList.add("overflow-hidden");
}

function closeMenu() {
  isOpen = false;
  mobileMenu.classList.remove("open");
  body.classList.remove("overflow-hidden");
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  isOpen ? closeMenu() : openMenu();
});

document.addEventListener("click", (e) => {
  if (!isOpen) return;
  if (mobileMenu.contains(e.target)) return;
  closeMenu();
});

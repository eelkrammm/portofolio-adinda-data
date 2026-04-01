const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector("header");
const body = document.querySelector("body");
let isMenuOpen = false;

function open() {
  isMenuOpen = true;
  mobileMenu.classList.toggle("open");
  body.classList.add("overhidden");
  header.classList.remove("overflow-hidden");
}

function close(e) {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("open");
    setTimeout(() => {
      header.classList.add("overflow-hidden");
    }, 300);
    isMenuOpen = false;
  }
}

menuBtn.addEventListener("click", () => {
  open();
  console.log(isMenuOpen);
});

document.addEventListener("click", (e) => {
  if (isMenuOpen === false) {
    return;
  } else {
    close(e);
    console.log(isMenuOpen);
  }
});

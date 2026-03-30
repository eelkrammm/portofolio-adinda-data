const menuBtn = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const header = document.querySelector("header");
const body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  header.classList.remove("overflow-hidden");
  body.classList.add("overhidden");
});

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    mobileMenu.classList.remove("open");
    setTimeout(() => {
      header.classList.remove("overflow-hidden");
    }, 300);
    body.classList.remove("overhidden");
  }
});

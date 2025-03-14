// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Portfolio website loaded successfully");

//   const nav = document.querySelector(".nav ul");
//   const toggleButton = document.createElement("button");
//   toggleButton.innerText = "☰";
//   toggleButton.classList.add("nav-toggle");
//   document.querySelector(".header").appendChild(toggleButton);

//   toggleButton.addEventListener("click", () => {
//     nav.classList.toggle("show");
//   });
// });
console.log("Hello World");

const offScreenMenu = document.getElementById("hamMenu");
const hamMenu = document.getElementById("hamburger");

function openMenu() {
  offScreenMenu.classList.toggle("open-menu");
}

function closeMenu() {
  offScreenMenu.classList.remove("open-menu");
}

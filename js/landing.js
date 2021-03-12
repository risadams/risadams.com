const menuToggle = document.querySelector(".toggle");
const mtButton = document.querySelector(".toggle i");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  mtButton.classList.toggle("fa-bars");
  mtButton.classList.toggle("fa-times");
});

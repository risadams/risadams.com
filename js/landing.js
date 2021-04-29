if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const reg = await navigator.serviceWorker.register('/service-worker.js');
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

const menuToggle = document.querySelector(".toggle");
const mtButton = document.querySelector(".toggle i");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showcase.classList.toggle("active");
  mtButton.classList.toggle("fa-bars");
  mtButton.classList.toggle("fa-times");
});

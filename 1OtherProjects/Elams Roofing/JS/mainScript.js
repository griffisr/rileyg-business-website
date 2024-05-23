// we use it as an alternative to height: 100vh for better browser support especially on iOS devices
const hero = document.querySelector(".hero-section");
hero.style.height = window.innerHeight + "px";

window.addEventListener("resize", function () {
  hero.style.height = this.innerHeight + "px";
});
  



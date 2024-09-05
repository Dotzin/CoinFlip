let moeda = document.querySelector(".moeda");
function girar() {
  let aleatorio = Math.floor(Math.random() * 2);
  moeda.classList.add("girar");
  console.log(aleatorio);
  setInterval(() => {
    if (aleatorio === 1) {
      document.querySelector(".prata").textContent = "Coroa";
    } else {
      document.querySelector(".prata").textContent = "Cara";
    }
  }, 2500);
  setTimeout(function () {
    moeda.classList.remove("girar");
  }, 5000);
}

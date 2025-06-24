let span = document.getElementById("span");
const adicionar = document.getElementById("adicionar");
const subtrair = document.getElementById("subtrair");
const zerar = document.getElementById("zerar");

span.textContent = 0;

adicionar.addEventListener("click", () => {
  span.textContent++;
});

subtrair.addEventListener("click", () => {
  span.textContent--;
});

zerar.addEventListener("click", () => {
  span.textContent = 0;
});

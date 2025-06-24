const lista = document.getElementById("myDropdown");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  lista.classList.toggle("show");
});

window.addEventListener("click", (event) => {
  if (!event.target.matches(".dropbtn")) {
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
});

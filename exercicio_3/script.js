const btn = document.getElementById("btn");
const input = document.getElementsByTagName("input")[0];
const span = document.getElementById("span");

btn.addEventListener("click", () => {
  span.innerHTML += `
    <p>${input.value}</p>
  `;
});

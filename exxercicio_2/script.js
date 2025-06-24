const array = ["Home", "Sobre", "Contato", "algum outro"];

const body = document.getElementById("body");
const nav = document.createElement("nav");
const ul = document.createElement("ul");

array.forEach((element) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = "#";
  a.innerText = element;

  li.appendChild(a);
  ul.appendChild(li);
});

nav.appendChild(ul);
body.appendChild(nav);

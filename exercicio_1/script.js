const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 },
];

const section = document.getElementById("produtos");

produtos.forEach((element) => {
  section.innerHTML += `
        <div class="div">
            <h3 class="card-title">${element.nome}</h3>
            <p class="card-text">${element.preco}</p>
        </div>
    `;
});

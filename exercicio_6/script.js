const emailInput = document.getElementById("email");
const emailErrorSpan = document.getElementById("emailError");
const senhaInput = document.getElementById("senha");
const senhaErrorSpan = document.getElementById("senhaError");

emailInput.addEventListener("blur", () => {
  const email = emailInput.value;
  if (email.includes("@")) {
    emailErrorSpan.textContent = "";
  } else {
    emailErrorSpan.textContent = "E-mail inválido, ele deve conter '@'.";
  }
});

senhaInput.addEventListener("input", () => {
  const senha = senhaInput.value;
  if (senha.length < 6) {
    senhaErrorSpan.textContent = "Senha deve ter no mínimo 6 caracteres.";
  } else {
    senhaErrorSpan.textContent = "";
  }
  console.log(senha);
});

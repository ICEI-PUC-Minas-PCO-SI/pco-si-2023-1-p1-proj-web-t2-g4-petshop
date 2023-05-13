const form = document.querySelector("form");
const senhaInput = document.querySelector("#senha");
const confirmarSenhaInput = document.querySelector("#confirmarSenha");

// Expressão regular para validar a senha
const regexSenha = /^(?=.*\d.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

// Função para validar a senha
function validarSenha() {
  if (!regexSenha.test(senhaInput.value)) {
    senhaInput.setCustomValidity(
      "A senha deve conter no mínimo 8 caracteres, com ao menos uma letra maiúscula, uma letra minúscula e dois números"
    );
  } else {
    senhaInput.setCustomValidity("");
  }
}

// Função para comparar as senhas
function compararSenhas() {
  if (senhaInput.value !== confirmarSenhaInput.value) {
    confirmarSenhaInput.setCustomValidity("As senhas não coincidem");
  } else {
    confirmarSenhaInput.setCustomValidity("");
  }
}

// Adicionar eventos de validação e de comparação das senhas
senhaInput.addEventListener("input", validarSenha);
confirmarSenhaInput.addEventListener("input", compararSenhas);

form.addEventListener("submit", (event) => {
  // Validar a senha
  validarSenha();
  // Comparar as senhas
  compararSenhas();
  // Checar se o formulário é válido
  if (!form.checkValidity()) {
    event.preventDefault();
  }
});

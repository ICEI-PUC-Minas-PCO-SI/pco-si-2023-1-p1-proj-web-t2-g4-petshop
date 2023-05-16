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


// manipulando os inputs radio 
const pessoaFisicaRadio = document.getElementById("pessoa-fisica");
const pessoaJuridicaRadio = document.getElementById("pessoa-juridica");

const formularioPessoaFisica = document.getElementById("form-pessoa-fisica");
const formularioPessoaJuridica = document.getElementById("form-pessoa-juridica");

pessoaFisicaRadio.addEventListener("click", function() {
  if (document.getElementById("pessoa-fisica").checked) {
    document.getElementById("pessoa-juridica").checked = false;
}
  formularioPessoaFisica.style.display = "flex";
  formularioPessoaJuridica.style.display = "none";
});

pessoaJuridicaRadio.addEventListener("click", function() {
  if (document.getElementById("pessoa-juridica").checked) {
    document.getElementById("pessoa-fisica").checked = false;
    formularioPessoaFisica.style.display = "none";
  formularioPessoaJuridica.style.display = "flex";
}
});

// validando o botao isento de ie (!!!)
const checkboxIsento = document.getElementById("isentoIE");
const inscricaoEstadual = document.getElementById("inscricao-estadual");
const estadoInscricao = document.getElementById("estado-inscricao");

checkboxIsento.addEventListener("change", function() {
  if(checkboxIsento.checked) {
    inscricaoEstadual.setAttribute('disabled', 'disabled');
    inscricaoEstadual.style.backgroundColor = "#A9A9A9";
    estadoInscricao.setAttribute('disabled', 'disabled');
    estadoInscricao.style.backgroundColor = "#A9A9A9";
  } else {
    inscricaoEstadual.removeAttribute('disabled');
    inscricaoEstadual.style.backgroundColor = "initial";
    estadoInscricao.removeAttribute('disabled');
    estadoInscricao.style.backgroundColor = "initial";
  }
});

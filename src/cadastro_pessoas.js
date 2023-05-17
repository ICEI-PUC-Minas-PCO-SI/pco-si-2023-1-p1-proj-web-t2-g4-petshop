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

const JuridicaPessoaFisicaRadio = document.getElementById("pessoa-fisica-juridica");
const JuridicaPessoaJuridicaRadio = document.getElementById("pessoa-juridica-juridica");

const formularioPessoaFisica = document.getElementById("form-pessoa-fisica");
const formularioPessoaJuridica = document.getElementById("form-pessoa-juridica");

const FieldPessoaJuridica = document.getElementById("fieldsetPessoaJur");
const FieldPessoaFis = document.getElementById("fieldsetPessoaFis");

pessoaFisicaRadio.addEventListener("click", function () {
  if (document.getElementById("pessoa-fisica").checked) {
    document.getElementById("pessoa-juridica").checked = false;

    FieldPessoaFis.style.display = "flex";
    FieldPessoaJuridica.style.display = "none";
  }
});

pessoaJuridicaRadio.addEventListener("click", function () {
  if (document.getElementById("pessoa-juridica").checked) {
    document.getElementById("pessoa-fisica").checked = false;
    FieldPessoaFis.style.display = "none";
    FieldPessoaJuridica.style.display = "flex";
    formularioPessoaJuridica.style.display = "flex";
    JuridicaPessoaFisicaRadio.checked = false;
    JuridicaPessoaJuridicaRadio.checked = true;
  }
});

JuridicaPessoaFisicaRadio.addEventListener("click", function () {
  if (document.getElementById("pessoa-fisica-juridica").checked) {
    document.getElementById("pessoa-juridica-juridica").checked = false;
    FieldPessoaFis.style.display = "flex";
    FieldPessoaJuridica.style.display = "none";
    formularioPessoaJuridica.style.display = "none";
    pessoaFisicaRadio.checked = true;
    pessoaJuridicaRadio.checked = false;
  }
});

// validando o botao isento de ie (!!!)
const checkboxIsento = document.getElementById("isentoIE");
const inscricaoEstadual = document.getElementById("inscricao-estadual");
const estadoInscricao = document.getElementById("estado-inscricao");

checkboxIsento.addEventListener("change", function () {
  if (checkboxIsento.checked) {
    inscricaoEstadual.removeAttribute('required');
    inscricaoEstadual.setAttribute('disabled', 'disabled');
    inscricaoEstadual.style.backgroundColor = "#A9A9A9";
    estadoInscricao.removeAttribute('required');
    estadoInscricao.setAttribute('disabled', 'disabled');
    estadoInscricao.style.backgroundColor = "#A9A9A9";
  } else {
    inscricaoEstadual.removeAttribute('disabled');
    inscricaoEstadual.style.backgroundColor = "initial";
    estadoInscricao.removeAttribute('disabled');
    estadoInscricao.style.backgroundColor = "initial";
  }
});

// alerta ao clicar no botao de cadastro
const BtnCriarConta = document.querySelector('.criarconta');
const BtnCriarContaJuridica = document.getElementById("BtnCriarContaJuridica");

BtnCriarConta.addEventListener('click', function (event) {
  event.preventDefault();

  if (!formCriarConta.reportValidity()) {
    alert('Preencha os campos corretamente!');
  } else {
    alert('Usuário cadastrado com sucesso!');
    formCriarConta.submit();
  }
});

BtnCriarContaJuridica.addEventListener('click', function (event) {
  event.preventDefault();

  if (!formCriarConta.reportValidity()) {
    alert('Preencha os campos corretamente!');
  } else {
    alert('Usuário cadastrado com sucesso!');
    formCriarConta.submit();
  }
});


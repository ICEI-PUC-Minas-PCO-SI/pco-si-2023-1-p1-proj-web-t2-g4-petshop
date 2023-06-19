const form = document.querySelector("form");
const senhaInput = document.querySelector("#senha");
const confirmarSenhaInput = document.querySelector("#confirmarSenha");


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

// validando o botao isento de ie
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

// começando parte do cadastro do usuario (pessoa FISICA)

// obtendo os dados do formulario 
function salvaLogin(event) {
  // cancela a submissão do form para tratar sem fazer refresh da tela
  event.preventDefault();

  // obtendo dados do formulario
  let nome = document.querySelector('.nome').value;
  let email = document.querySelector('.email').value;
  let celular = document.querySelector('.celular').value;
  let telefone = document.querySelector('.telefone').value;
  let genero = document.getElementById('genero').value;
  let nascimento = document.getElementById('data').value;
  let cpf = document.querySelector('.cpf').value;
  let senha = document.querySelector('.senha').value;

  // adicionando usuario no banco de dados (função ja existente na parte script.js)
  addUser(nome, email, celular, telefone, genero, nascimento, cpf, senha);
  alert ('Usuário cadastrado com sucesso. Proceda com o login para continuar.');
  window.location.href = "login.html";
}

// associando salvamento ao botao 
document.querySelector('.criarConta').addEventListener('click', salvaLogin);


// começando parte de cadastro de usuario JURIDICO
function salvaLoginJuridico(event) {
  // cancela a submissão do form para tratar sem fazer refresh da tela
  event.preventDefault();

  // obtendo dados do formulario
  let razao = document.getElementById('nome-juridica').value;
  let email = document.getElementById('email-juridica').value;
  let celular = document.getElementById('celular-juridica').value;
  let telefone = document.getElementById('telefone-juridica').value;
  let nome = document.getElementById('nome-contato').value;
  let cnpj = document.getElementById('cnpj').value;
  let inscricao = document.getElementById('inscricao-estadual').value;
  let estadoIE = document.getElementById('estado-inscricao').value;
  let senha = document.getElementById('senha-juridica').value;
  console.log(razao);

  // adicionando usuario no banco de dados (função ja existente na parte script.js)
  addUserJuridico(razao, email, celular, telefone, nome, cnpj, inscricao, estadoIE, senha);
  alert ('Usuário cadastrado com sucesso. Proceda com o login para continuar.');
  window.location.href = "login.html";
}
// associando salvamento ao botao de pessoa juridica
document.getElementById('btnCriarContaJuridica').addEventListener('click', salvaLoginJuridico);
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


// COMEÇO DO CADASTRO DO USUARIO (PESSOA FISICA) E VALIDAÇÃO DOS INPUTS
// VALIDANDO INPUT NOME (feito)
function validarNome() {
  const nomeInput = document.getElementById('nome');
  const mensagemErro = document.getElementById('erro-nome');
  const nome = nomeInput.value.trim();
  if (nome.length >= 6) {
    nomeInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    nomeInput.style.border = '2px solid red';
    mensagemErro.textContent = 'O nome deve ter pelo menos 6 caracteres';
    return false;
  }
}

// VALIDANDO INPUT EMAIL (feito)
function validarEmail(field) {
  const emailInput = document.getElementById('email');
  const mensagemErro = document.getElementById('erro-email');
  const email = field.value;

  // Expressão regular para validar o formato do e-mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email)) {
    emailInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    emailInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Email Inválido';
    return false;
  }
}

// VALIDANDO INPUT DE CELULAR (feito)
function validarCelular(field) {
  const celularInput = document.getElementById('celular');
  const mensagemErro = document.getElementById('erro-celular');
  const celular = field.value;

  const celularRegex = /^(\(\d{2}\) \d \d{4}-\d{4})$|^(\d{2} \d{5}-\d{4})$|^(\d{2} \d \d{4}-\d{4})$|^\((\d{2})\) (\d{5}-\d{4})$/;
  if (celularRegex.test(celular)) {
    celularInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    celularInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Nº de celular inválido.';
    return false;
  }
}

// VALIDANDO INPUT DE DATA DE NASCIMENTO (feito)
function validarNascimento() {
  const nascimentoInput = document.getElementById('data');
  const mensagemErro = document.getElementById('erro-nascimento');
  let data = document.getElementById('data').value; // pegando valor do input
  data = data.replace(/\//g, "-"); // substitui as barras por hífen
  let data_array = data.split("-"); // quebrando a data em array

  // Verificar se o input está vazio
  if (data.trim() === '') {
    nascimentoInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Data de nascimento não preenchida';
    return false;
  }

  if(data_array[0].length != 4){
    data = data_array[2]+"-"+data_array[1]+"-"+data_array[0]; // remontando a data no formato yyyy/mm/dd
  }

  // comparando as datas e calculando a idade
  let hoje = new Date();
  let nasc = new Date(data);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  let m = hoje.getMonth() - nasc.getMonth();
  if(m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  // validando pessoas maiores de 18 e menores de 100 anos
  if(idade < 18 || idade > 100){
    nascimentoInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Idade inválida';
    return false;
  } 
  else {
    nascimentoInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  }
}

// VALIDANDO INPUT DE CPF (em progresso)
function validarCPF(field){
  const cpfInput = document.getElementById('cpf');
  const mensagemErro = document.getElementById('erro-cpf');
  let cpf = field.value;
  // removendo caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  // verificando se possui 11 digitos ou se todos os caracteres são iguais
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    cpfInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CPF inválido';
    return false;
  }

  // calculando o primeiro díito verificador
  let soma = 0;
  for(let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = 11 - (soma % 11);
  let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

  // verificando se o primeiro dígito verificador é valido 
  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
    cpfInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CPF inválido';
    return false;
  }

  // calculando segundo digito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = 11 - (soma % 11);
  let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

  // Verifica se o segundo dígito verificador é válido
  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
    cpfInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CPF inválido';
    return false;
  }

  // se chegou aqui, o cpf é valido 
  cpfInput.style.border = '2px solid green';
  mensagemErro.textContent = '';
  return true;
}

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

  // Validando o campo nome antes de prosseguir com o cadastro
  if (!validarNome()) {
    alert('Por favor, preencha o campo de nome corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo email antes de prosseguir com o cadastro (FEITO)
  if (!validarEmail(document.querySelector('.email'))) {
    alert('Por favor, preencha o campo de email corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo celular antes de prosseguir com o cadastro
  if (!validarCelular(document.querySelector('.celular'))) {
    alert('Por favor, preencha o campo de celular corretamente.');
    return; // Interrompe o cadastro
  }

  // validando data de nascimento antes de prosseguir com o cadastro (FEITO)
  if (!validarNascimento()) {
    alert('Por favor, preencha sua data de nascimento corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo cpf antes de prosseguir com o cadastro
  if (!validarEmail(document.querySelector('.cpf'))) {
    alert('Por favor, preencha o campo de cpf corretamente.');
    return; // Interrompe o cadastro
  }

  // adicionando usuario no banco de dados (função ja existente na parte script.js)
  if (nome && email && celular && genero && nascimento && cpf && senha) {
    addUser(nome, email, celular, telefone, genero, nascimento, cpf, senha);
    alert('Usuário cadastrado com sucesso. Proceda com o login para continuar.');
    window.location.href = "login.html";
  } else {
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
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
  if (razao && email && celular && cnpj && senha) {
    addUserJuridico(razao, email, celular, telefone, nome, cnpj, inscricao, estadoIE, senha);
    alert('Usuário cadastrado com sucesso. Proceda com o login para continuar.');
    window.location.href = "login.html";
  } else {
    alert('Por favor, preencha todos os campos obrigatórios.');
  }
}
// associando salvamento ao botao de pessoa juridica
document.getElementById('btnCriarContaJuridica').addEventListener('click', salvaLoginJuridico);
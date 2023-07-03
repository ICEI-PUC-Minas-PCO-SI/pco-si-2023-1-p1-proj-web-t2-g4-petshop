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
// VALIDANDO INPUT NOME
function validarNome() {
  const nomeInput = document.getElementById('nome');
  const mensagemErro = document.getElementById('erro-nome');
  const nome = nomeInput.value.trim();
  if (nome.length >= 6 && isNaN(nome)) {
    nomeInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    nomeInput.style.border = '2px solid red';
    mensagemErro.textContent = 'O nome deve ter pelo menos 6 caracteres';
    return false;
  }
}

// VALIDANDO INPUT EMAIL
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

// VALIDANDO INPUT DE CELULAR
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
    mensagemErro.textContent = 'Nº de celular inválido. Atente-se ao formato.';
    return false;
  }
}

function validarTelefone(field) {
  const telefoneInput = document.getElementById('telefone');
  const mensagemErro = document.getElementById('erro-telefone');
  const telefone = field.value;

  const telefoneRegex = /^3\d{3}-\d{4}$/;
  if (telefoneRegex.test(telefone)) {
    telefoneInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    telefoneInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Nº de telefone inválido.';
    return false;
  }
}

// VALIDANDO INPUT DE DATA DE NASCIMENTO
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

  if (data_array[0].length != 4) {
    data = data_array[2] + "-" + data_array[1] + "-" + data_array[0]; // remontando a data no formato yyyy/mm/dd
  }

  // comparando as datas e calculando a idade
  let hoje = new Date();
  let nasc = new Date(data);
  let idade = hoje.getFullYear() - nasc.getFullYear();
  let m = hoje.getMonth() - nasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;

  // validando pessoas maiores de 18 e menores de 100 anos
  if (idade < 18 || idade > 100) {
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

// VALIDANDO INPUT DE CPF
function validarCPF(field) {
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
  for (let i = 0; i < 9; i++) {
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

// VALIDANDO INPUT DE SENHA
function validarSenha(field) {
  const senhaInput = document.getElementById('senha');
  const mensagemErro = document.getElementById('erro-senha');
  const senha = field.value;

  if (senha.length < 6) {
    senhaInput.style.border = '2px solid red';
    mensagemErro.textContent = 'A senha deve conter no mínimo 6 caracteres';
    return false;
  }
  else {
    senhaInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  }
}

// VALIDANDO INPUT DE CONFIRMAÇÃO DE SENHA 
function confirmaSenha(field) {
  const senhaInput = document.getElementById('senha').value; // pegando valor do input de senha normal]
  const confirmarInput = document.getElementById('confirmarSenha');
  const confirmar = field.value;
  const mensagemError = document.getElementById('erro-confirmacao');

  if (senhaInput === confirmar) {
    confirmarInput.style.border = '2px solid green';
    mensagemError.textContent = '';
    return true;
  } else {
    confirmarInput.style.border = '2px solid red';
    mensagemError.textContent = 'As senhas digitadas não coincidem';
    return false;
  }
}

// verificando checkbox marcado 
function verificarCheckbox() {
  var checkbox = document.getElementById("termos");
  
  if (checkbox.checked) return true;
  else return false;
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

  // validando o campo celular antes de prosseguir com o cadastro (FEITO)
  if (!validarCelular(document.querySelector('.celular'))) {
    alert('Por favor, preencha o campo de celular corretamente.');
    return; // Interrompe o cadastro
  }

  // validando data de nascimento antes de prosseguir com o cadastro (FEITO)
  if (!validarNascimento()) {
    alert('Por favor, preencha sua data de nascimento corretamente. O usuário deve ser maior de 18 anos.');
    return; // Interrompe o cadastro
  }

  // validando o campo cpf antes de prosseguir com o cadastro (FEITO)
  if (!validarCPF(document.querySelector('.cpf'))) {
    alert('Por favor, preencha o campo de cpf corretamente.');
    return; // Interrompe o cadastro
  }

  // validando a senha antes de prosseguir com o cadastro (FEITO)
  if (!validarSenha(document.querySelector('.senha'))) {
    alert('Por favor, preencha uma senha válida.');
    return; // Interrompe o cadastro
  }

  // validando a confirmação de senha antes de prosseguir com o cadastro (FEITO)
  if (!confirmaSenha(document.querySelector('.confirmarSenha'))) {
    alert('Por favor, confirme sua senha corretamente.');
    return; // Interrompe o cadastro
  }

  if(!verificarCheckbox()) {
    alert('Por favor, aceite os termos e condições antes de prosseguir com o cadastro.');
    return
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
// validando input de razão social (feito)
function validarRazao() {
  const razaoInput = document.getElementById('nome-juridica');
  const mensagemErro = document.getElementById('erro-razaoSocial');
  const razao = razaoInput.value;
  if (razao.length >= 4) {
    razaoInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    razaoInput.style.border = '2px solid red';
    mensagemErro.textContent = 'A razão social deve ter pelo menos 4 caracteres';
    return false;
  }
}

// VALIDANDO INPUT EMAIL (feito)
function validarEmailJuridico(field) {
  const emailInput = document.getElementById('email-juridica');
  const mensagemErro = document.getElementById('erro-emailJuridico');
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

// validando input de celular e telefone
function validarCelularJuridico(field) {
  const celularInput = document.getElementById('celular-juridica');
  const mensagemErro = document.getElementById('erro-celularJuridico');
  const celular = field.value;

  const celularRegex = /^(\(\d{2}\) \d \d{4}-\d{4})$|^(\d{2} \d{5}-\d{4})$|^(\d{2} \d \d{4}-\d{4})$|^\((\d{2})\) (\d{5}-\d{4})$/;
  if (celularRegex.test(celular)) {
    celularInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    celularInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Nº de celular inválido. Atente-se ao formato requisitado.';
    return false;
  }
}

function validarTelefoneJuridico(field) {
  const telefoneInput = document.getElementById('telefone-juridica');
  const mensagemErro = document.getElementById('erro-telefoneJuridico');
  const telefone = field.value;

  const telefoneRegex = /^3\d{3}-\d{4}$/;
  if (telefoneRegex.test(telefone)) {
    telefoneInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    telefoneInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Nº de telefone inválido.';
    return false;
  }
}

// validando input de nome do contato
function validarNomeContato() {
  const nomeInput = document.getElementById('nome-contato');
  const mensagemErro = document.getElementById('erro-nomeContato');
  const nome = nomeInput.value.trim();
  if (nome.length >= 6 && isNaN(nome)) {
    nomeInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  } else {
    nomeInput.style.border = '2px solid red';
    mensagemErro.textContent = 'O nome deve ter pelo menos 6 caracteres';
    return false;
  }
}

// validando input de cnpj 
function validarCNPJ(field) {
  const cnpjInput = document.getElementById('cnpj');
  const mensagemErro = document.getElementById('erro-cnpj');
  let cnpj = field.value;

  // removendo caracteres especiais 
  cnpj = cnpj.replace(/[^\d]+/g, '');
  // verificando se possui 14 digitos ou se todos são iguais
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
    cnpjInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CNPJ inválido';
    return false;
  }
  // Validar dígitos verificadores
  var tamanho = cnpj.length - 2;
  var numeros = cnpj.substring(0, tamanho);
  var digitos = cnpj.substring(tamanho);
  var soma = 0;
  var pos = tamanho - 7;

  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  var resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digitos.charAt(0)) {
    cnpjInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CNPJ inválido';
    return false;
  }

  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (var i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) {
      pos = 9;
    }
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);

  if (resultado != digitos.charAt(1)) {
    cnpjInput.style.border = '2px solid red';
    mensagemErro.textContent = 'CNPJ inválido';
    return false;
  }

  // se chegou aqui, o cpf é valido 
  cnpjInput.style.border = '2px solid green';
  mensagemErro.textContent = '';
  return true;
}

// VALIDAR INPUT DE INSCRIÇÃO ESTADUAL
function validarIE(field){
  const inscricaoInput = document.getElementById('inscricao-estadual');
  const mensagemErro = document.getElementById('erro-IE');
  const ie = field.value;
  if (ie.length > 16 || ie.length < 9) {
    inscricaoInput.style.border = '2px solid red';
    mensagemErro.textContent = 'Inscrição estadual inválida';
    return false;
  } else {
    inscricaoInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  }
}

// VALIDANDO INPUT DE SENHA
function validarSenhaJuridica(field) {
  const senhaInput = document.getElementById('senha-juridica');
  const mensagemErro = document.getElementById('erro-SenhaJuridica');
  const senha = field.value;

  if (senha.length < 6) {
    senhaInput.style.border = '2px solid red';
    mensagemErro.textContent = 'A senha deve conter no mínimo 6 caracteres';
    return false;
  }
  else {
    senhaInput.style.border = '2px solid green';
    mensagemErro.textContent = '';
    return true;
  }
}

// VALIDANDO INPUT DE CONFIRMAÇÃO DE SENHA 
function confirmaSenhaJuridica(field) {
  const senhaInput = document.getElementById('senha-juridica').value; // pegando valor do input de senha normal]
  const confirmarInput = document.getElementById('confirmarSenha-juridica');
  const confirmar = field.value;
  const mensagemError = document.getElementById('erro-confirmaSenhaJuridica');

  if (senhaInput === confirmar) {
    confirmarInput.style.border = '2px solid green';
    mensagemError.textContent = '';
    return true;
  } else {
    confirmarInput.style.border = '2px solid red';
    mensagemError.textContent = 'As senhas digitadas não coincidem';
    return false;
  }
}

// validando checkbox marcado
function verificarCheckboxJuridico() {
  var checkbox = document.getElementById("termos-juridica");
  
  if (checkbox.checked) return true;
  else return false;
}

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

  // Validando o campo razao social antes de prosseguir com o cadastro
  if (!validarRazao()) {
    alert('Por favor, preencha a razão social corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo email antes de prosseguir com o cadastro (FEITO)
  if (!validarEmailJuridico(document.getElementById('email-juridica'))) {
    alert('Por favor, preencha o campo de email corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo celular antes de prosseguir com o cadastro (FEITO)
  if (!validarCelular(document.getElementById('celular-juridica'))) {
    alert('Por favor, preencha o campo de celular corretamente.');
    return; // Interrompe o cadastro
  }

  // validando o campo cnpj antes de prosseguir com o cadastro (FEITO)
  if (!validarCNPJ(document.getElementById('cnpj'))) {
    alert('Por favor, preencha o campo de CNPJ corretamente.');
    return; // Interrompe o cadastro
  }

  // validando a senha antes de prosseguir com o cadastro (FEITO)
  if (!validarSenhaJuridica(document.getElementById('senha-juridica'))) {
    alert('Por favor, preencha uma senha válida.');
    return; // Interrompe o cadastro
  }

  // validando a confirmação de senha antes de prosseguir com o cadastro (FEITO)
  if (!confirmaSenhaJuridica(document.getElementById('confirmarSenha-juridica'))) {
    alert('Por favor, confirme sua senha corretamente.');
    return; // Interrompe o cadastro
  }

  if(!verificarCheckboxJuridico()) {
    alert('Por favor, aceite os termos e condições antes de prosseguir com o cadastro.');
    return
  }

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
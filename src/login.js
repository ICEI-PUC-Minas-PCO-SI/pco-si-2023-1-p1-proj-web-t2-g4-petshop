// COMEÇANDO PARTE DE RECUPERAÇÃO DE SENHA
function verificarUsuario() {
    // obtendo os valores dos campos
    let nome = document.getElementById("nomeRecup").value;
    let email = document.getElementById("emailRecup").value;
    let celular = document.getElementById("celularRecup").value;
    let cpf = document.getElementById("cpf").value;

    let usuarioEncontrado = false;
    let usuario;
    // variaveis de alerta declaradas devido a erro nos alertas que aparecem no modal
    let alertaExibido = false;
    let alertaErroSenha = false;
    let alertaSenhaAtt = false;
    let alertaUsuarioInexistente = false;

    // verifica todos os itens do banco de dados de usuarios p/ localizar o usuario informado no form de login
    for (let i = 0; i < db_usuarios.usuarios.length; i++) {
        usuario = db_usuarios.usuarios[i];

        // verificando se todos os dados "batem" com os que estão no banco de dados  
        if (usuario.nome === nome && usuario.email === email && usuario.celular === celular && usuario.cpf === cpf || // verificando usuarios fisicos ou juridicos
            usuario["razao social"] === nome && usuario.email === email && usuario.celular === celular && usuario.cnpj === cpf) {

            usuarioEncontrado = true;

            // parando o loop se o usuario for encontrado
            break;
        }
    }

    if (usuarioEncontrado) { // se o usuario for encontrado, conseguirá fazer a manipulação de sua senha
        // COMEÇANDO MANIPULAÇÃO DA ALTERAÇÃO DE SENHA 

        // Verifica se os inputs de nova senha e confirmar nova senha já foram adicionados
        let inputNovaSenha = document.getElementById("novaSenha");
        let inputConfirmarSenha = document.getElementById("confirmarSenha");

        if (!inputNovaSenha && !inputConfirmarSenha) {
            // adicionando dois novos inputs de "Nova senha" e "confirmar nova senha"
            let modalBody = document.querySelector("#exampleModal .modal-body"); // selecionando corpo do modal

            // criando campo de nova senha
            let divNovaSenha = document.createElement("div");
            divNovaSenha.classList.add("m-2");

            let labelNovaSenha = document.createElement("label");
            labelNovaSenha.innerText = "Nova senha";

            let inputNovaSenha = document.createElement("input");
            inputNovaSenha.type = "password";
            inputNovaSenha.classList.add("form-control");
            inputNovaSenha.id = "novaSenha";

            // inserindo campo de nova senha ao modal
            divNovaSenha.appendChild(labelNovaSenha);
            divNovaSenha.appendChild(inputNovaSenha);

            // criando campo de confirmação de senha 
            let divConfirmarSenha = document.createElement("div");
            divConfirmarSenha.classList.add("m-2");

            let labelConfirmarSenha = document.createElement("label");
            labelConfirmarSenha.innerText = "Confirmar nova senha";

            let inputConfirmarSenha = document.createElement("input");
            inputConfirmarSenha.type = "password";
            inputConfirmarSenha.classList.add("form-control");
            inputConfirmarSenha.id = "confirmarSenha";

            // inserindo campo de confirmação de senha ao modal 
            divConfirmarSenha.appendChild(labelConfirmarSenha);
            divConfirmarSenha.appendChild(inputConfirmarSenha);

            modalBody.appendChild(divNovaSenha);
            modalBody.appendChild(divConfirmarSenha);
        }

        // desabilitando inputs anteriores para que o usuario não manipule os dados enquanto estiver alterando sua senha 
        document.getElementById("nomeRecup").disabled = true;
        document.getElementById("emailRecup").disabled = true;
        document.getElementById("celularRecup").disabled = true;
        document.getElementById("cpf").disabled = true;

        let btnProsseguir = document.getElementById('prosseguirRecupSenha');

        // add evento ao botão prosseguir
        btnProsseguir.addEventListener("click", function () {
            // pegando valores dos inputs de nova senha e confirmar nova senha
            let novaSenha = document.getElementById("novaSenha").value;
            let confirmarSenha = document.getElementById("confirmarSenha").value;

            // verificando se as senhas são iguais
            if (novaSenha === confirmarSenha) {
                // atualizando senha no localStorage
                if (novaSenha.length >= 6) { // verificando se a senha é maior ou igual a 6 caracteres 
                    usuario.senha = novaSenha; // alterando nova senha no banco de dados 
                    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));

                    if (!alertaSenhaAtt) {
                        alert("Senha atualizada");
                        alertaSenhaAtt = true;
                    }
                    window.location.href = "login.html";
                } else {
                    if (!alertaErroSenha) { // verificando se o alerta já foi exibido (correção de erro)
                        alert('A senha deve conter no mínimo 6 caracteres.');
                        alertaErroSenha = true;
                    }
                }
            } else {
                if (!alertaExibido) { // verificando se o alerta já foi exibido (correção de erro)
                    alert("As senhas não coincidem.");
                    alertaExibido = true;
                }
            }
        })
    } else {
        if (!alertaUsuarioInexistente) { // verificando se o alerta ja foi exibido (correção de erro)
            alert("usuario não encontrado");
            alertaUsuarioInexistente = true;
        }
    }
}

// acrescentando função para limpar o modal ao ser fechado 
let modalElement = document.getElementById("exampleModal");
modalElement.addEventListener("hidden.bs.modal", function () {
    //removendo inputs adicionados de modificação de senha 
    let inputNovaSenha = document.getElementById("novaSenha");
    let inputConfirmarSenha = document.getElementById("confirmarSenha");
    if (inputNovaSenha && inputConfirmarSenha) { // verificando se os inputs foram adicionados ao modal
        let modalBody = document.querySelector("#exampleModal .modal-body");
        // removendo inputs de "nova senha" e "confirmar nova senha"
        modalBody.removeChild(inputNovaSenha.parentNode);
        modalBody.removeChild(inputConfirmarSenha.parentNode);

        // habilitando novamente os inputs que haviam sido desabilitados
        document.getElementById("nomeRecup").disabled = false;
        document.getElementById("emailRecup").disabled = false;
        document.getElementById("celularRecup").disabled = false;
        document.getElementById("cpf").disabled = false;
    }
    // limpando os campos do modal 
    document.getElementById("nomeRecup").value = "";
    document.getElementById("emailRecup").value = "";
    document.getElementById("celularRecup").value = "";
    document.getElementById("cpf").value = "";
});

// declarando função p/ processar form de login
function processaFormLogin(event) {
    // cancela submissão do form p/ tratar os dados sem fazer refresh da tela
    event.preventDefault();

    // obtem os dados de login e senha a partir do form de login
    var username = document.getElementById('dadosUsuario').value;
    var password = document.getElementById('senha').value;

    // verificando se os campos estão vazios
    if (username === '' || password === '') {
        alert('Para prosseguir com o login, preencha todos os campos corretamente.');
        return
    }

   // valida login e se estiver ok, redireciona para a tela inicial da aplicação
   resultadoLogin = loginUser(username, password);
   if (resultadoLogin) {
       var usuarioCorrenteIndex = JSON.parse(localStorage.getItem('usuarioCorrente'));
       var usuario = db_usuarios.usuarios[usuarioCorrenteIndex];

       // verificando se o usuario é dono ou cliente para redirecionar
       if (username === "admin@admin.com" && password === "123") {
           window.location.href = "HomeAdm.html";
       }
       else if (usuario.hasOwnProperty('cpf') || usuario.hasOwnProperty('cnpj')) {
           window.location.href = 'home.html';
       }
   } else {
       alert('Usuário ou senha incorretos.');
   }
}

// associando função ao botão de entrar na conta 
document.getElementById('entrar').addEventListener('click', processaFormLogin);

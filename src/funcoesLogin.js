// pagina inicial de login 
const login_url = "login.html";

// pagina de cadastro de pessoas 
const cadastro_url = "cadastro.html";

// objeto para o banco de dados de usuarios baseado em json
var db_usuarios = {};

// objeto para o usuario corrente 
var usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = (performance && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

// dados de usuarios p/ serem utilizados como carga inicial
const dadosIniciais = {
    usuarios: [
        {
            "id": generateUUID (), "nome": "admin", "email": "admin@admin.com", "celular": "(31) 99999-9999",
            "nascimento": "03/03/2003", "cpf": "999.999.999-99", "senha": "123"
        },
        {
            "id": generateUUID (), "nome": "user", "email": "user@user.com", "celular": "(31) 98888-8888",
            "nascimento": "04/04/2004", "cpf": "888.888.888-88", "senha": "321"
        },
    ]
};


// inicializar usuario corrente e banco de dados da aplicação de login
function initLoginApp() {
    // inicializando usuario corrente (caso exista) a partir de dados no local storage 
    let usuarioCorrenteJSON = sessionStorage.getItem('usuarioCorrente');
    if (usuarioCorrenteJSON) {
        usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
    }

    // inicializando banco de dados 
    // obtem a string json com os dados de usuarios a partir do localstorage 
    var usuariosJSON = localStorage.getItem('db_usuarios');

    // verifica se existem dados já armazenados no localStorage 
    if (!usuariosJSON) { // se não há dados no LS
        alert('Dados de usuários não encontrados no localStorage. \n Faça cadastro do usuario para prosseguir.');
        // copia os dados iniciais para o banco de dados 
        db_usuarios = dadosIniciais;

        // salva os dados iniciais no localstorage convertendo-os para string antes 
        localStorage.setItem('db_usuarios', JSON.stringify(dadosIniciais));
        console.log(localStorage.getItem('db_usuarios'));
    } else {
        // converte a string em obj colocando no banco de dados baseado em JSON 
        db_usuarios = JSON.parse(usuariosJSON);
        console.log(db_usuarios);
    }
}

// COMEÇANDO PARTE DE LOGIN
// função para verificar se o login do usuario está ok e, se positivo, direciona p/ página inicial
function loginUser(login, senha) {
    // verifica todos os itens do banco de dados de usuarios p/ localizar o usuario informado no form de login
    for (var i = 0; i < db_usuarios.usuarios.length; i++) {
        var usuario = db_usuarios.usuarios[i];

        // se encontrou login, carrega usuario corrente e salva no session storage
        if (login == usuario.email && senha == usuario.senha) {
            usuarioCorrente.email = usuario.email;
            
            usuarioCorrente.senha = usuario.senha;

            // salva os dados do usuario corrente no session storage (convertendo antes para string)
            localStorage.setItem('usuarioCorrente', JSON.stringify(i));

            // retorna true p/ usuario encontrado
            return true;
        }
    }
    // caso não encontre o usuario, retorna false
    return false;
}



// adicionando usuario no banco de dados 
function addUser(nome, email, celular, telefone, genero, nascimento, cpf, senha) {

    // criando obj de usuario para o novo usuario
    let newId = generateUUID(); // id do usuario 
    let usuario = { "id": newId, "nome": nome, "email": email, "celular": celular, "telefone": telefone, "genero": genero, "nascimento": nascimento, "cpf": cpf, "senha": senha };

    // inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push(usuario);
    console.log(usuario);
    console.log(db_usuarios);

    // salva o novo banco de dados com o novo usuario no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

// adicionando usuario juridico no banco de dados
function addUserJuridico(razao, email, celular, telefone, nome, cnpj, inscricao, estadoIE, senha) {
    // criando obj de usuario para o novo usuario
    let newId = generateUUID(); // id do usuario 
    let usuario = { "id": newId, "razao social": razao, "email": email, "celular": celular, "telefone": telefone, "nome do contato": nome, "cnpj": cnpj, "inscricao estadual": inscricao, "estado inscricao": estadoIE, "senha": senha };

    // inclui o novo usuario no banco de dados baseado em JSON
    db_usuarios.usuarios.push(usuario);
    console.log(usuario);
    console.log(db_usuarios);

    // salva o novo banco de dados com o novo usuario no localStorage
    localStorage.setItem('db_usuarios', JSON.stringify(db_usuarios));
}

// incializa as estruturas utilizadas pelo LoginApp
initLoginApp();
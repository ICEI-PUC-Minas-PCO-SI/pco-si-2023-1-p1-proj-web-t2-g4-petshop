const EntrarFacebookBtn = document.querySelector('.entrarfacebook');

EntrarFacebookBtn.addEventListener('click', function () {
    window.location.href = "https://www.facebook.com/login.php";
});

// declarando função p/ processar form de login
function processaFormLogin(event) {
    // cancela submissão do form p/ tratar os dados sem fazer refresh da tela
    event.preventDefault();

    // obtem os dados de login e senha a partir do form de login
    var username = document.getElementById('dadosUsuario').value;
    var password = document.getElementById('senha').value;
    console.log(username, password);

    // valida login e se estiver ok, redireciona para a tela inicial da apicação
    resultadoLogin = loginUser(username, password);
    console.log(resultadoLogin);
    if (resultadoLogin) {
        var usuarioCorrenteIndex = JSON.parse(localStorage.getItem('usuarioCorrente'));
        var usuario = db_usuarios.usuarios[usuarioCorrenteIndex];

        // verificando se o usuario é dono ou cliente para redirecionar 
        if (username === "admin@admin.com" && password === "123") {
            window.location.href = 'HomeAdm.html';
        }
        else if(usuario.hasOwnProperty('cpf') || usuario.hasOwnProperty('cnpj')) {
            window.location.href = 'home.html';
        }
    }
    else {
        alert('usuario ou senha incorretos');
    }
}

// associando função ao botão de entrar na conta 
document.getElementById('entrar').addEventListener('click', processaFormLogin);
//Verifica quem é a pessoa que está logada
var id = JSON.parse(localStorage.getItem("usuarioCorrente"));

//Pega o vetor de cadastro de todas as pessoas, para posteriormente pegar informações da pessoa logada
var pessoas = JSON.parse(localStorage.getItem("db_usuarios"));

//Pega o vetor com todos os pets, para a pessoa conseguir agendar serviços para os pets dela
var pets = JSON.parse(localStorage.getItem("BancoPets"));

// Verifica se há agendamentos armazenados no local storage
let agendamentos = JSON.parse(localStorage.getItem('agendamentos'));


if (!agendamentos) {
    // Se não houver nenhum agendamento armazenado, cria uma lista vazia
    agendamentos = [];
}

//Função para verificar a existência de pets
function temPets() {

    //Se não existir nenhum pet no banco, já exibe uma mensagem
    if (pets == null) {

        document.querySelector("#botao").innerHTML = `<h5 class="my-3"> Por favor, vá na aba <b>Pets</b> para cadastrar seu cão ou gato. <br> 
        Após o cadastro, volte para realizar o agendamento do serviço.</h5>`

    } else {

        //Se existir pet no banco, verifica se algum é da pessoa logada
        var pet = "Não"

        for (let i = 0; i < pets.length; i++) {

            if (id == pets[i].pessoa) {
                pet = "Sim"
            }
        }

        if (pet === "Não") {
            document.querySelector("#botao").innerHTML = `<h5 class="my-3"> Por favor, vá na aba <b>Pets</b> para cadastrar seu cão ou gato. <br> 
            Após o cadastro, volte para realizar o agendamento do serviço.</h5>`
        } else {
            document.querySelector("#botao").innerHTML = `<button type="button" class="btn mt-1 " data-bs-toggle="modal" data-bs-target="#Cadastro" id="mcadas"
            style="background-color: #f9e6d3;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill"
              viewBox="0 0 16 16">
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z">
              </path>
            </svg>
            <b>Realizar agendamento</b>
          </button>`

            pegarNomes();
            pegarServiços();
            gerarCartao();
        }
    }

}

//Função para criar as opções de select com os nomes dos pets da pessoa que já foram cadastrados
function pegarNomes() {

    var select = document.getElementById("nomes");
    for (var i = 0; i < pets.length; i++) {
        if (id == pets[i].pessoa) {

            // Cria um novo elemento <option>
            var option = document.createElement("option");

            // Define o valor e o texto da opção
            option.value = pets[i].nome;
            option.text = pets[i].nome;

            // Adiciona a opção ao select
            select.appendChild(option);

        }

    }

}

//Função para criar as opções de select com os serviços já cadastrados
function pegarServiços() {

    fetch('https://jsonserver-lilac.vercel.app/servicos')
        .then(res => res.json())
        .then(dados => {
            var select = document.getElementById("servico");
            for (var i = 0; i < dados.length; i++) {

                var option = document.createElement("option");

                //Guarda no value várias informações do serviço, para usar depois
                option.value = `${dados[i].servico}, ${dados[i].preco}, ${dados[i].obs}`;
                option.text = dados[i].servico;


                select.appendChild(option);

            }

        });

}

// Função para verificar se um horário está disponível
function isHorarioDisponivel(data, horario) {
    // Verificar se já existe um agendamento para a data e horário fornecidos
    for (let i = 0; i < agendamentos.length; i++) {
        if (agendamentos[i].data === data && agendamentos[i].horario === horario) {
            return false; // Horário indisponível
        }
    }
    return true; // Horário disponível
}

// Manipular o envio do formulário
const form = document.getElementById('agendamentoForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    var nomePet = document.getElementById('nomes').value;
    var serv = document.getElementById('servico').value;
    var data = formatarData(document.getElementById('data').value);
    var horario = document.getElementById('option').value;

    //Separar o value do option criando um vetor com nome do serviço, valor e observações
    serv = serv.split(',');

    // Verificar se o horário está disponível
    if (!isHorarioDisponivel(data, horario)) {
        alert('Desculpe, o horário selecionado já está indisponível. Por favor, escolha outro horário.');
        return; // Impedir o processamento adicional do formulário
    }

    if (horario == "Domingo") {
        return; // Impedir o processamento adicional do formulário, já que a pessoa selecionou um domingo
    }

    //Guardando no agendamento informações da pessoa, do pet, do serviço, e do horário e dia agendado
    var novoAgendamento = {
        "codPessoa": id,
        "nome": pessoas.usuarios[id].nome,
        "telefone": pessoas.usuarios[id].celular,
        "pet": nomePet,
        "servico": serv[0],
        "valor": serv[1],
        "observacao": serv[2],
        "data": data,
        "horario": horario
    }

    // Atualizar a lista de agendamentos
    agendamentos.push(novoAgendamento);

    // Armazenar a lista de agendamentos atualizada no local storage
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    //Limpa as informações de data do formulário e esconde o select de horário
    document.getElementById("horario").style.visibility = "hidden"
    document.getElementById("data").value = null

    //
    $('#Cadastro').modal('hide');

    // Restante do código para gerar o cartão com as informações do agendamento
    gerarCartao();



});

// Função para gerar o cartão com as informações do agendamento
function gerarCartao() {

    var cardContent = "";

    //Gerar cartões com todos os agendamentos (somente da pessoa logada)
    for (let i = 0; i < agendamentos.length; i++) {

        if (id == agendamentos[i].codPessoa) {
            cardContent += `
            <div class= "col-md-4 text-center border 2px my-3 mx-2">
            <p class="pt-4"><strong>Pet:</strong> ${agendamentos[i].pet}</p>
            <p><strong>Serviço:</strong> ${agendamentos[i].servico}</p>
            <p><strong>Valor:</strong> ${agendamentos[i].valor}</p>
            <p><strong>Data:</strong> ${agendamentos[i].data}</p>
            <p><strong>Horário:</strong> ${agendamentos[i].horario}</p>
            <p><strong>Observações sobre o serviço:</strong> <br> ${agendamentos[i].observacao}</p>
            <button class="btn btn-danger mb-2" onclick="excluir(${i})">Desagendar</button>
            </div>`
        }

    }

    document.querySelector('#Cards').innerHTML = cardContent;

}

//Função para excluir o agendamento
function excluir(pos) {

    //Verifica se a pessoa deseja continuar com a exclusão
    var confirmacao = confirm("Continuar com a exclusão do agendamento?");

    //Se ela clicar em ok, exclui
    if (confirmacao) {
        //Atualiza a lista de agendamentos, excluindo o elemento selecionado pela pessoa
        agendamentos.splice(pos, 1);

        localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

        gerarCartao();
    } 
}

//Função para colocar a data em dia/mês/ano, porque vem em ano/mês/dia
function formatarData(data) {
    const dataObj = new Date(data);
    const dia = String(dataObj.getDate() + 1).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

const dateInput = document.getElementById('data');
const timeInput = document.getElementById('option');

// Atualiza as opções de horário conforme o dia da semana da data que a pessoa selecionou
function updateTimeOptions(day) {

    let start, end;
    if (day >= 0 && day <= 4) { // Segunda à Sexta
        start = 8;
        end = 18;
    } else if (day === 5) { // Sábado
        start = 8;
        end = 14;
    } else { // Domingo
        start = null;
        end = null;
    }
    // Limpa opções existentes
    while (timeInput.firstChild) {
        timeInput.removeChild(timeInput.firstChild);
    }
    // Cria opção de seleção
    let option = document.createElement('option');

    //Deixa o select de horário visível só depois da pessoa selecionar a data
    document.getElementById("horario").style.visibility = "visible"

    // Adiciona novas opções
    if (start !== null && end !== null) {
        for (let i = start; i < end; i++) {
            for (let j = 0; j < 2; j++) {
                let option = document.createElement('option');
                option.text = `${i.toString().padStart(2, '0')}:${j === 0 ? '00' : '30'}`;
                option.value = option.text;
                timeInput.add(option);
            }
        }
    } else {
        option.text = "Não há atendimento no domingo."
        option.value = "Domingo"
        timeInput.add(option);
    }
}

//Detecta a escola de uma data no formulário
dateInput.addEventListener('change', function (event) {

    const selectedDate = new Date(this.value);
    updateTimeOptions(selectedDate.getDay());
});


//Fluxo para identificar o dia corrente
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

//Fluxo para identificar um ano para frente
let nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);
let next_dd = String(nextYear.getDate()).padStart(2, '0');
let next_mm = String(nextYear.getMonth() + 1).padStart(2, '0');
let next_yyyy = nextYear.getFullYear();
nextYear = next_yyyy + '-' + next_mm + '-' + next_dd;

//Faz com que não deixe selecionar datas anteriores ao dia corrente, e coloca como limite máximo um ano para frente
dateInput.setAttribute('min', today);
dateInput.setAttribute('max', nextYear);



onload = () => {

    //Função para identificar se começará permitindo que a pessoa já faça um agendamento,
    //ou se ela precisa cadastrar um pet primeiro.
    temPets();

}

var bancoServ = []
var URL = 'https://jsonserver-lilac.vercel.app/servicos';
function iniciar() {
  fetch(URL)
    .then(response => response.json())
    .then(dados => popularVetor(dados))

}

function popularVetor(dados) {
  bancoServ = [];
  for (var index = 0; index < dados.length; index++) {
    bancoServ.push(dados[index]);
  }
  Exibir();
}



//Função para exibir tipo de serviço

function Exibir() {

  var cards = "";
  var img = "";

  if (bancoServ.length != 0) {
    for (var index = 0; index < bancoServ.length; index++) {
      cards += `
      <tr>
          <th>${bancoServ[index].id}</th>
          <td>${bancoServ[index].servico}</td>
          <td>R$${(parseFloat(bancoServ[index].preco)).toFixed(2)}</td>
          <td>${bancoServ[index].obs}</td>
          <td>
          <!-- Botão de excluir -->
          <button type="button" class="btn btn-danger me-2" onclick = "AlertExcluir(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash"
              viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z">
              </path>
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z">
              </path>
            </svg>
            Excluir
          </button>

          <!-- Botão de editar -->

          <button type="button" class="btn btn-primary " data-bs-toggle="modal" data-bs-target="#edit" data-bs-whatever = "${index}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-pencil-square" viewBox="0 0 16 16">
              <path
                d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z">
              </path>
              <path fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z">
              </path>
            </svg>
            Editar
          </button>
          </td>
      </tr>
      `}
  }

  const cardsContainer = document.querySelector("#servico-list");
  
  if (cards == '') {
    document.querySelector("#alert").innerHTML = `<h3 class="text-center mt-5"><b>Nenhum serviço cadastrado !</b></h3>`;
    cardsContainer.classList.add("animate_animated", "animatebounce", "animate_infinite");
  } else {
    cardsContainer.innerHTML = cards;
    cardsContainer.classList.remove("animate_animated", "animatebounce", "animate_infinite");
  }





  // Preencher o modal de editar


  const modal = document.getElementById("edit")

  if (modal) {
    modal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget

      var idrecipient = button.getAttribute('data-bs-whatever')

      modal.querySelector('#cofreBanco').value = bancoServ[idrecipient].id;
      modal.querySelector('#altserv').value = bancoServ[idrecipient].servico;
      modal.querySelector('#altpreco').value = bancoServ[idrecipient].preco;
      modal.querySelector('#altobs').value = bancoServ[idrecipient].obs;



    })
  }
}

//função verificar id

function verificarID(id){
  var verific = false;
  for(var i = 0; i < bancoServ.length; i++){
    if(id == bancoServ[i].id){
      verific = true;
    }
  }

  return verific;
}

//Registrar serviço

function cadastroServ() {

 var id = document.getElementById("id").value;
  var servic = document.getElementById("serv").value;
  var observacao = document.getElementById("observacao").value;
  var preco = document.getElementById("preco").value;




  var idveri = verificarID(id);

  // Verificar se o número é maior que 0
  if (parseInt(id) <= 0) {
    Swal.fire(
      'Erro',
      'O número deve ser maior que 0.',
      'error'
    );
    return; // Encerrar a função caso a validação falhe
  }



  // Verificar se o preço é um número maior que 0
  if (parseFloat(preco) <= 0) {
    Swal.fire(
      'Erro',
      'O preço deve ser um número maior que 0.',
      'error'
    );
    return; // Encerrar a função caso a validação falhe
  }

// Verificar se todos os campos foram preenchidos
if (id === '' || servic === '' || observacao === '' || preco === '') {
  AlertPreencher();
  return; // Encerrar a função caso a validação falhe
}


  if (id == '' || servic == '' || observacao == '' || preco == '') {
    AlertPreencher();
  }else if(idveri){
    Swal.fire(
      'Erro',
      'Código já existente.',
      'error'
    )
  }else{
    const addservico = JSON.stringify({
      id: id,
      servico: servic,
      preco: preco,
      obs: observacao
      
    })

    fetch(URL, {
      method: 'POST',
      headers:{ 'Content-Type': 'application/json'},
      body: addservico
    })
    .then(res => res.json())
    

   
    AlertSucesso("Cadastro");
    $('#Cadastro').modal('hide');

    document.getElementById("id").value = '';
    document.getElementById("serv").value = '';
    document.getElementById("observacao").value = '';
    document.getElementById("preco").value = '';

  }


}

//Alerta preencher campos

function AlertPreencher() {
  Swal.fire(
    'Erro',
    'Preencha todos os campos!',
    'error'
  )
}

//Alerta sucesso
function AlertSucesso(opcao) {
  var texto = '';
  if (opcao == 'Cadastro') {
    texto = "Cadastrado!"
  } else {
    texto = "Alterado!"
  }
  Swal.fire({
    title: texto,
    showConfirmButton: false
  })
}


//Função Excluir

function AlertExcluir(index) {

  Swal.fire({
    title: 'Excluir',
    text: "Deseja remover o serviço de " + bancoServ[index].servico + " ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {


      Swal.fire({
        title: 'Excluído!',
        showConfirmButton: false

      })
      excluirServ(bancoServ[index].id)
    }
  })


}

function excluirServ(id) {

fetch(`${URL}/${id}`,{
  method: 'DELETE',
}) 
.then(res => res.json())
.then(() => location.reload());


}
//Função de editar 
function Editar() {

  var pegarID = document.getElementById("cofreBanco").value;
  var servEdit = document.getElementById("altserv").value;
  var observEdit = document.getElementById("altobs").value;
  var precoEdit = document.getElementById("altpreco").value;

     // Verificar se o id é um número maior que zero
  if (parseInt(pegarID) <= 0) {
    Swal.fire(
      'Erro',
      'O número do ID deve ser maior que zero.',
      'error'
    );
    return; // Encerrar a função caso a validação falhe
  }


  // Verificar se o preço é um número maior que zero
  if (parseFloat(precoEdit) <= 0) {
    Swal.fire(
      'Erro',
      'O preço deve ser um número maior que zero.',
      'error'
    );
    return; // Encerrar a função caso a validação falhe
  }

  // Verificar se todos os campos foram preenchidos
  if (servEdit === '' || observEdit === '' || precoEdit === '') {
    AlertPreencher();
    return; // Encerrar a função caso a validação falhe
  }

  const servicoedit = JSON.stringify({
    id: pegarID,
    servico: servEdit,
    preco: precoEdit,
    obs: observEdit
  });

  fetch(`${URL}/${pegarID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: servicoedit
    })
    .then(res => res.json())
    .then(() => {
      AlertSucesso("Editar");
      $('#edit').modal('hide');
    });



  if (servEdit == '' || observEdit == '' || precoEdit == '') {
    AlertPreencher();
  } else {
    const servicoedit = JSON.stringify({
    id: pegarID,
    servico: servEdit,
    preco: precoEdit,
    obs: observEdit
    
  })
  console.log(servicoedit)
   fetch(`${URL}/${pegarID}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: servicoedit
   })

   .then(res => res.json());
   
    AlertSucesso("Editar");
    $('#edit').modal('hide');

   
  }

}

onload = () => {

  iniciar();


}

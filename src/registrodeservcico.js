//Verificação de conteudo do banco PETS no localStorage
let bancoPets = JSON.parse(localStorage.getItem("BancoPets"));

if (!bancoPets) {
  bancoPets = [];

}

let idPessoa;



//Função para exibir tipo de serviço

function Exibir() {

  var cards = "";
  var img = "";
  if (bancoPets.length != 0) {
    for (var index = 0; index < bancoPets.length; index++) {
      if (idPessoa == bancoPets[index].pessoa) {
        if (bancoPets[index].escolha == "Banho") {
          img = "../src/imagens/banhopet.png";
        } else if (bancoPets[index].escolha == "Veterinário") {
          img = "../src/imagens/veterinariopet.png";
        }
        cards += `
                    <div class="card mt-5 mx-5" id="card" style = "width: 550px;">
                    <div class="row justify-content-center">
                      <div class="col-md-6 text-center">
                        <img src="${img}" alt="" class="pt-4  pb-1" width="100px" id="imgcard">
                        <!-- Botão de excluir --><br>
                        <button type="button" class="btn btn-danger mt-4 mb-4" onclick = "AlertExcluir(${index})">
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
          
                        <button type="button" class="btn btn-primary mt-4 mb-4" data-bs-toggle="modal" data-bs-target="#edit" data-bs-whatever = "${index}">
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
                      </div>
          
          
                      <div class="col-md-4 text-center">
                        <p class="pt-4"><b>${bancoPets[index].nome}</b></p>
                        <p>${bancoPets[index].preco}</p>
                        <p>${bancoPets[index].obs}</p>
                        


                       
                        
                      </div>
                    </div>
                  </div>
                    `
      }
    }
  }

  
  const cardsContainer = document.querySelector("#Cards");

  if (cards == '') {
    cardsContainer.innerHTML = `<h3 class="text-center mt-5"><b>Nenhum registro cadastrado !</b></h3>`;
    cardsContainer.classList.add("animate__animated", "animate__bounce", "animate__infinite");
  } else {
    cardsContainer.innerHTML = cards;
    cardsContainer.classList.remove("animate__animated", "animate__bounce", "animate__infinite");
  }

// limitando usuario de digitar numeros no campo funcionario

  document.getElementById("altname").addEventListener("keydown",function (event) {
    if (!isNaN(event.key)){
      event.preventDefault();
    }
  });

  
  
// Preencher o modal de editar
 

  const modal = document.getElementById("edit")

  if (modal) {
    modal.addEventListener('show.bs.modal', event => {
      const button = event.relatedTarget

      var idrecipient = button.getAttribute('data-bs-whatever')

      modal.querySelector('#cofreBanco').value = idrecipient;
      modal.querySelector('#altname').value = bancoPets[idrecipient].nome;
      modal.querySelector('#altpreco').value = bancoPets[idrecipient].preco;
      modal.querySelector('#altobs').value = bancoPets[idrecipient].obs;
      
        
      

      opcoes = document.getElementsByName("Altescolha")
      for(var i = 0; i < opcoes.length; i++){
        if(opcoes[i].value === bancoPets[idrecipient].escolha){
          opcoes[i].checked = true;

          break;
        }
      }


    })
  }
}


//Registrar serviço

function cadastroPet() {

  // Seleção do serviço
  var opcaoescolha = document.getElementsByName("escolha");
  var valorSelecionadoescolha = "";

  for (var i = 0; i < opcaoescolha.length; i++) {
    if (opcaoescolha[i].checked) {
      valorSelecionadoescolha = opcaoescolha[i].value;

      break;

    }
  }


  var nome = document.getElementById("name").value;
  var observacao = document.getElementById("observacao").value;
  var preco = document.getElementById("preco").value;
  

  if (nome == '' || observacao == '' || preco == '') {
    AlertPreencher();
    // limitando input numerico
  } else if (isNaN(preco) || preco<=0) {
    Swal.fire({
      title:'erro',
      text:'Insira um valor valido',
      icon:'error'
    })
  }

   else {
    var addservico = {
      "pessoa": idPessoa,
      "nome": nome,
      "obs": observacao,
      "preco": preco,
      "escolha": valorSelecionadoescolha
    }

    bancoPets.push(addservico);
    localStorage.setItem("BancoPets", JSON.stringify(bancoPets));
    AlertSucesso("Cadastro");
    $('#Cadastro').modal('hide');
    
    Exibir();

     document.getElementById("name").value = '';
     document.getElementById("observacao").value = '';
     document.getElementById("preco").value = '';
    
  }
  

}

//Alerta preencher campos

function AlertPreencher(){
  Swal.fire(
    'Erro',
    'Preencha todos os campos!',
    'error'
  )
}

//Alerta sucesso
function AlertSucesso(opcao){
  var texto = '';
  if(opcao == 'Cadastro'){
    texto = "Registro e Funcionário Adicionado"
  }else{
    texto = "Alteração de Registro feita com sucesso !!"
  }
  Swal.fire(
    'Concluído',
    texto,
    'success'
  )
}


//Função Excluir

function AlertExcluir(id){
  
  Swal.fire({
    title: 'Excluir',
    text: "Deseja remover o funcionário " + bancoPets[id].nome + " do registro de serviço ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não'
  }).then((result) => {
    if (result.isConfirmed) {
      
     
      Swal.fire(
        'Excluido',
        'Registro apagado !!',
        'success'
        
      )
      excluirPessoa(id)
    }
  })
  
                        
}

function excluirPessoa(id) {

  
    bancoPets.splice(id, 1);
    localStorage.setItem("BancoPets", JSON.stringify(bancoPets));

    Exibir();
  

}
//Função de editar 
function Editar() {

  var pegarID = document.getElementById("cofreBanco").value;
  var nomeEdit = document.getElementById("altname").value;
  var observEdit = document.getElementById("altobs").value;
  var preco = document.getElementById("altpreco").value;
  
  
  var opcaoAltescolha = document.getElementsByName("Altescolha");
  var valorSelecionadoAltescolha = "";

  for (var i = 0; i < opcaoAltescolha.length; i++) {
    if (opcaoAltescolha[i].checked) {
      valorSelecionadoAltescolha = opcaoAltescolha[i].value;

      break;

    }
  }

    if(nomeEdit == ''  || observEdit == '' || preco == ''){
      AlertPreencher();
    }
    else if (isNaN(preco) || preco<=0) {
      Swal.fire({
        title:'erro',
        text:'Insira um valor valido',
        icon:'error'
      })
    }else{
      bancoPets[pegarID].nome = nomeEdit
      bancoPets[pegarID].obs = observEdit;
      bancoPets[pegarID].preco = preco;
      bancoPets[pegarID].escolha = valorSelecionadoAltescolha

      localStorage.setItem("BancoPets", JSON.stringify(bancoPets));
      AlertSucesso("Editar");
      $('#edit').modal('hide');
    
    Exibir();
    }

}

onload = () => {
  Exibir();
}
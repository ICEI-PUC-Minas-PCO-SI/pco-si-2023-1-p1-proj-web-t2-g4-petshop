//Verificação de conteudo do banco PETS no localStorage
let bancoPets = JSON.parse(localStorage.getItem("BancoPets"));

if (!bancoPets) {
  bancoPets = [];

}

let idPessoa = JSON.parse(localStorage.getItem("usuarioCorrente"))

//Função para exibir pets

function Exibir() {

  var cards = "";
  var img = "";
  if (bancoPets.length != 0) {

    for (var index = 0; index < bancoPets.length; index++) {
      if (idPessoa == bancoPets[index].pessoa) {
        if (bancoPets[index].especie == "Cachorro") {
          img = "../src/imagens/puppy.png";
        } else {
          img = "../src/imagens/cat main.png";
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
                        <p>${bancoPets[index].sexo}</p>
                        <p>${bancoPets[index].idade}  Ano(s)</p>
                        <p>${bancoPets[index].raca}</p>
                        
                      </div>
                    </div>
                  </div>
                    `
      }
    }
  }

  if (cards == '') {

    document.querySelector("#Cards").innerHTML = `<h3 class = "text-center mt-4"><b> Não existem pets cadastrados !! </b></h3>`

  } else {

    document.querySelector("#Cards").innerHTML = cards;

  }


  //Função limitar caracteres

  const input = document.getElementById('idade');
  
  input.addEventListener('input', function() {
    const maxLength = parseInt(input.getAttribute('maxlength'));
    const currentValue = input.value;
    
    if (currentValue.length > maxLength) {
      input.value = currentValue.slice(0, maxLength);
    }
  });

const altinput = document.getElementById('altidade');

altinput.addEventListener('input', function() {
  const maxxLength = parseInt(altinput.getAttribute('maxlength'));
  const currenttValue = altinput.value;
  
  if (currenttValue.length > maxxLength) {
    altinput.value = currenttValue.slice(0, maxxLength);
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
      modal.querySelector('#altidade').value = bancoPets[idrecipient].idade;
      modal.querySelector('#altraca').value = bancoPets[idrecipient].raca;

      var opcoes = document.getElementsByName("altSexo")
      for(var i = 0; i < opcoes.length; i++){
        if(opcoes[i].value === bancoPets[idrecipient].sexo){
          opcoes[i].checked = true;

          break;
        }
      }

      opcoes = document.getElementsByName("altEspecie")
      for(var i = 0; i < opcoes.length; i++){
        if(opcoes[i].value === bancoPets[idrecipient].especie){
          opcoes[i].checked = true;

          break;
        }
      }


    })
  }
}






//Cadastro de Pet

function cadastroPet() {

  //Opcão Especie
  var opcaoEspecie = document.getElementsByName("Especie");
  var valorSelecionadoEspecie = "";

  for (var i = 0; i < opcaoEspecie.length; i++) {
    if (opcaoEspecie[i].checked) {
      valorSelecionadoEspecie = opcaoEspecie[i].value;

      break;

    }
  }



  //Opcão Sexo
  var opcaoSexo = document.getElementsByName("Sexo");
  var valorSelecionadoSexo = "";

  for (var i = 0; i < opcaoSexo.length; i++) {
    if (opcaoSexo[i].checked) {
      valorSelecionadoSexo = opcaoSexo[i].value;

      break;

    }
  }

  var nome = document.getElementById("name").value;
  var idade = document.getElementById("idade").value;
  var raca = document.getElementById("raca").value;

  if (nome == '' || idade == '' || raca == '') {
    AlertPreencher();
  } else {
    var novoPet = {
      "pessoa": idPessoa,
      "nome": nome,
      "sexo": valorSelecionadoSexo,
      "idade": idade,
      "raca": raca,
      "especie": valorSelecionadoEspecie
    }

    bancoPets.push(novoPet);
    localStorage.setItem("BancoPets", JSON.stringify(bancoPets));
    AlertSucesso("Cadastro");
    $('#Cadastro').modal('hide');
    
    Exibir();

     document.getElementById("name").value = '';
     document.getElementById("idade").value = '';
    document.getElementById("raca").value = '';
  }

}

//Alert preencher campos

function AlertPreencher(){
  Swal.fire(
    'Erro',
    'Preencha todos os campos!',
    'error'
  )
}

//Alert sucesso
function AlertSucesso(opcao){
  var texto = '';
  if(opcao == 'Cadastro'){
    texto = "Pet cadastrado com sucesso!"
  }else{
    texto = "Informações do pet editadas com sucesso!"
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
    text: "Deseja prosseguir com a exclusão do pet " + bancoPets[id].nome + "?",
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
        'Pet excluido com sucesso!',
        'success'
        
      )
      excluirPet(id)
    }
  })
  
                        
}

function excluirPet(id) {

  
    bancoPets.splice(id, 1);
    localStorage.setItem("BancoPets", JSON.stringify(bancoPets));

    Exibir();
  

}
//Função de editar pet
function Editar() {

    var pegarID = document.getElementById("cofreBanco").value;

  var nomeEdit = document.getElementById("altname").value;
  var racaEdit = document.getElementById("altraca").value;
  var idadeEdit = document.getElementById("altidade").value;
  
  var opcaoAltSexo = document.getElementsByName("altSexo");
  var valorSelecionadoAltSexo = "";

  for (var i = 0; i < opcaoAltSexo.length; i++) {
    if (opcaoAltSexo[i].checked) {
      valorSelecionadoAltSexo = opcaoAltSexo[i].value;

      break;

    }
  }
  var opcaoAltEspecie = document.getElementsByName("altEspecie");
  var valorSelecionadoAltEspecie = "";

  for (var i = 0; i < opcaoAltEspecie.length; i++) {
    if (opcaoAltEspecie[i].checked) {
      valorSelecionadoAltEspecie = opcaoAltEspecie[i].value;

      break;

    }
  }

    if(nomeEdit == '' || racaEdit == '' || idadeEdit == ''){
      AlertPreencher();
    }else{
      bancoPets[pegarID].nome = nomeEdit
      bancoPets[pegarID].idade = idadeEdit
      bancoPets[pegarID].raca = racaEdit
      bancoPets[pegarID].sexo = valorSelecionadoAltSexo
      bancoPets[pegarID].especie = valorSelecionadoAltEspecie

      localStorage.setItem("BancoPets", JSON.stringify(bancoPets));
      AlertSucesso("Editar");
      $('#edit').modal('hide');
    
    Exibir();
    }

}

onload = () => {
  Exibir();
}
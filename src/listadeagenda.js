var agendamentos = JSON.parse(localStorage.getItem("agendamentos"));



var list ="";
function imprimir(){
    for(var i = 0; i < agendamentos.length; i++){
        list += `
        <tr>
          <th>${agendamentos[i].nome}</th>
          <td>${agendamentos[i].telefone}</td>
          <td>${agendamentos[i].pet}</td>
          <td>${agendamentos[i].servico}</td>
          <td>${agendamentos[i].data}</td>
          <td>${agendamentos[i].horario}</td>
          
      </tr>
        `
    }

    document.querySelector("#list-agendamentos").innerHTML = list;
}


function iniciar(){
    if(!agendamentos){
        document.querySelector("#list-agendamentos").innerHTML = `Não há agendamentos cadastrados`;
        
    }else {
     imprimir()
     
    }
}



onload = () => {
 iniciar();
}
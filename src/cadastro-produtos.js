// URL da API de dados
const URL = 'http://localhost:3000/gerenciamento-prod'

const produtoForm = document.getElementById('reigstrarproduto');

function reigstrarproduto {
    
}

produtoForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    // RECUPERA O ID DO PRODUTO
    let id = parseFloat($('#edit-prod-id').text());

    // RECUPERA OS DADOS DO PRODUTO
    const produto = JSON.stringify({
        id: document.getElementById('id-prod').value,
        categoria: document.getElementById('categoriaproduto').value,
        nome: document.getElementById('nomeproduto').value,
        qtd: document.getElementById('qtdproduto').value,
        preco: document.getElementById('precoproduto').value,
        descricao: document.getElementById('descricaoproduto').value
    })

    if (id >= 0) {
        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
        .then(res => res.json())
        .then(() => location.reload());
    }
    else{
        fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: produto
        })
        .then(res => res.json())
        .then(() => location.reload())
    }
})


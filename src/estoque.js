db_estoque_inicial = {
    "data": [
        {
            "ID": 1,
            "NOME": "Shampoo para pelos macios",
            "CATEGORIA": "Higiene",
            "PREÇO": 16.55,
            "QUANTIDADE": 5,
            "DESCRIÇÃO": "O shampoo pode ser usado em pets acima de 12 meses de vida, de todos os portes, e é especialmente indicado para pelos brancos."
        },
        {
            "ID": 2,
            "NOME": "Creme Hidratante Equilíbrio Hidrapet",
            "CATEGORIA": "Higiene",
            "PREÇO": 84.99,
            "QUANTIDADE": 2,
            "DESCRIÇÃO": " Ideal para a hidratação da pele e dos pelos."
        },
        {
            "ID": 3,
            "NOME": "Fluido Desembaraçador Pet Society Cães e Gatos 240ml",
            "CATEGORIA": "Higiene",
            "PREÇO": 47.99,
            "QUANTIDADE": 3,
            "DESCRIÇÃO": "Por não conter silicone, também pode ser usado em um banho a seco e auxiliando a diminuir a estática da pelagem."
        },
        {
            "ID": 4,
            "NOME": "Tesoura de Unha para Gatos Chalesco",
            "CATEGORIA": "Aparo",
            "PREÇO": 29.99,
            "QUANTIDADE": 10,
            "DESCRIÇÃO": "Auxilia na hora de cortar as unhas dos felinos com segurança."
        },
        {
            "ID": 5,
            "NOME": "Condicionador Sanol Dog Revitalizante para Cães e Gatos",
            "CATEGORIA": "Higiene",
            "PREÇO": 18.32,
            "QUANTIDADE": 15,
            "DESCRIÇÃO": "Possui queratina vegetal, hidrata e traz maciez."
        },
        {
            "ID": 6,
            "NOME": "Pente Ferplast Cães Antipulgas",
            "CATEGORIA": "Proteção",
            "PREÇO": 25.99,
            "QUANTIDADE": 5,
            "DESCRIÇÃO": "Ideal para pets com pelagem curta e média"
        },
        {
            "ID": 7,
            "NOME": "Spray Antiparasitas DNAmazon para Cães e Gatos 50 ml",
            "CATEGORIA": "Proteção",
            "PREÇO": 39.99,
            "QUANTIDADE": 6,
            "DESCRIÇÃO": "Ação calmante e ajuda no combate a inflamações da pele."
        },
        {
            "ID":8,
            "NOME": "Desinfetante e Bactericida Petz 1l",
            "CATEGORIA": "Pós limpesa",
            "PREÇO": 74.99,
            "QUANTIDADE": 3,
            "DESCRIÇÃO": "Elimina 99,9% das bactérias."
        },
        {
            "ID": 9,
            "NOME": "Creme Dental Petz Carvão Ativado para Cães e Gatos 60g",
            "CATEGORIA": "Higiene",
            "PREÇO": 20.99,
            "QUANTIDADE": 19,
            "DESCRIÇÃO": "Evita o mau hálito e age no controle da formação de placas bacterianas, gengivite, tártaros e o amarelo dos dentes."
        },
        {
            "ID": 10,
            "NOME": "Escova de Dente Chalesco para Cães",
            "CATEGORIA": "Higiene",
            "PREÇO": 22.88,
            "QUANTIDADE": 30,
            "DESCRIÇÃO": "Auxilia a manter a saúde bucal do pet."
        },
        {
            "ID": 11,
            "NOME": "Tesoura Chalesco Reta para Cães e Gatos",
            "CATEGORIA": "Aparo",
            "PREÇO": 48.99,
            "QUANTIDADE": 3,
            "DESCRIÇÃO": " Pode ser eles curtos, médios e longos, com uma lâmina de precisão no corte."
        },
        {
            "ID": 12,
            "NOME": "Talco Banho Seco Matacura para Cães e Gatos 100g",
            "CATEGORIA": "Proteção",
            "PREÇO": 12.99,
            "QUANTIDADE": "10",
            "DESCRIÇÃO": "Remove a sujeira da pelagem quando o banho convencional não for possível ou desejado."
        }
        
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_estoque'));
if (!db) {
    db = db_estoque_inicial
};
    
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}


function insertProduto(Produto) {
    // Calcula novo Produto a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoProduto = {
        "ID": novoId,
        "NOME": Produto.NOME,
        "CATEGORAIA" : Produto.CATEGORAIA,
        "PREÇO": Produto.PREÇO,
        "QUANTIDADE" : Produto.QUANTIDADE,
        "DESCRIÇÃO": Produto.DESCRIÇÃO,  
    };
     // Insere o novo objeto no array
     db.data.push(novoproduto);
     displayMessage("produto inserido com sucesso");
 
     // Atualiza os dados no Local Storage
     localStorage.setItem('db_produto', JSON.stringify(db));
 }
 
 function updateproduto(id, produto) {
     // Localiza o indice do objeto a ser alterado no array a partir do seu ID
     let index = db.data.map(obj => obj.id).indexOf(id);
 
     // Altera os dados do objeto no array
     db.data[index].NOME = produto.NOME,
     db.data[index].CATEGORAIA = produto.CATEGORAIA,
     db.data[index].PREÇO = produto.PREÇO,
     db.data[index].QUANTIDADE = produto.QUANTIDADE,
     db.data[index].DESCRIÇÃO = produto.categoria,
     db.data[index].website = produto.website
 
     displayMessage("produto alterado com sucesso");
 
     // Atualiza os dados no Local Storage
     localStorage.setItem('db_produto', JSON.stringify(db));
 }
 
 function deleteproduto(id) {    
     // Filtra o array removendo o elemento com o id passado
     db.data = db.data.filter(function (element) { return element.id != id });
 
     displayMessage("produto removido com sucesso");
 
     // Atualiza os dados no Local Storage
     localStorage.setItem('db_produto', JSON.stringify(db));
 }




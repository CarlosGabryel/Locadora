//Função para adicionar uma nova linha na tabela
function addToTable() {

    //Definindo as variaveis e recebendo os dados
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;
    let email = document.getElementById('email').value;
    let filme = document.getElementById('filme').value;
    let ano = document.getElementById('ano').value;
    let table = document.getElementById("myTable");

    let tableSize = table.rows.length; //Calculando o tamanho da Tabela 
    let row = table.insertRow(tableSize); //Inserindo uma linha abaixo da Tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    let cell7 = row.insertCell(6);
    let cell8 = row.insertCell(7);
    row.id = tableSize; //Adicionando o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";
    let btnCode1 = "<button class='edit-btn' onclick1='edit'>Editar</button>";

    //Preenchendo as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = nome;
    cell3.innerHTML = telefone;
    cell4.innerHTML = email;
    cell5.innerHTML = filme;
    cell6.innerHTML = ano;
    cell7.innerHTML = btnCode;
    cell8.innerHTML = btnCode1;

    //Limpando os campos de inserção de dados
    document.getElementById('nome').value = "";
    document.getElementById('telefone').value = "";
    document.getElementById('email').value = "";
    document.getElementById('filme').value = "";
    document.getElementById('ano').value = "";

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Função para remover uma linha
function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o id 
    row = document.getElementById(row); //Recebendo o elemento da linha
    row.parentNode.removeChild(row); //Remove a linha

    //Retornando 'false' para impedir o reload da pagina
    return false;
}

//Gravando elementos
function record (id) {

    let editar;
    editar.cells[2].innerHTML= id.nome;
    editar.cells[3].innerHTML= id.telefone;
    editar.cells[4].innerHTML= id.email;
    editar.cells[5].innerHTML= id.filme;
    editar.cells[6].innerHTML= id.ano;

}

//Função para editar uma linha
function edit(editt){

    let editar = editt.parentElement.parentElement; //Pegando ID
    document.getElementById("nome").value = editar.cells[2].innerHTML;
    document.getElementById("telefone").value = editar.cells[3].innerHTML;
    document.getElementById("email").value = editar.cells[4].innerHTML;
    document.getElementById("filme").value = editar.cells[5].innerHTML;
    document.getElementById("ano").value = editar.cells[6].innerHTML;

}

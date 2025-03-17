//Array onde serao armazenados os nomes dos amigos
let nomeDosAmigos = [];

function adicionarAmigo(){
    //Pega o valor do elemento html amigo
    let amigoNovo = document.getElementById('amigo').value;

    if(amigoNovo === ""){
            alert('Por favor, insira um nome!');
    }else{
        if(nomeDosAmigos.includes(amigoNovo)){
            alert('O amigo já existe na lista!');
            limparCampoAmigo();
        }else{
            //Adiciona o amigo novo no array de amigo
            nomeDosAmigos.push(amigoNovo);

            //Cria um elemento do tipo item de lista (li) e adiciona como filho na lista ordenada (ol)
            let li = document.createElement('li');
            li.textContent = 'Amigo Adicionado: ' + amigoNovo;
            document.getElementById('listaAmigos').appendChild(li);

            limparCampoAmigo();
        }  
    }   
}

function sortearAmigo(){
    if(nomeDosAmigos.length < 2){
        alert('Por favor, insira ao menos 2 nomes na lista de amigos!');
    }else{
        //Sorteando um numero aleatorio com tamanho maximo da lista.
        let sorteado = parseInt(Math.random()* nomeDosAmigos.length);
        document.getElementById('resultado').innerHTML = 'Amigo Sorteado: ' + nomeDosAmigos[sorteado];
    }
}

function limparCampoAmigo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}

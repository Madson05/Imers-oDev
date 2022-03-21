let jogador1 = {nome : "Maria", vitorias : 0, empates : 0, derrotas : 0, pontos: 0};
let jogador2 = {nome : "João", vitorias : 0, empates : 0, derrotas : 0, pontos: 0};

let jogadores = [jogador1, jogador2];

function calculaPontos(){
    for(let jogador of jogadores){
        jogador.pontos = (jogador.vitorias*3) + (jogador.empates) - (jogador.derrotas*2);
    }
}

function adicionarVitoria(indice){
    jogadores[indice].vitorias ++;
    if (indice == 0){
        jogadores[1].derrotas ++
    }
    else{
        jogadores[0].derrotas ++
    }
    calculaPontos();
    exibeJogadoresNaTela(jogadores);
}
function adicionarEmpate(indice){
    jogadores[0].empates++;
    jogadores[1].empates++;

    calculaPontos();
    exibeJogadoresNaTela(jogadores);
}
function adicionarDerrota(indice){
    jogadores[indice].derrotas++;

    if (indice == 0){
        jogadores[1].vitorias ++
    }
    else{
        jogadores[0].vitorias ++
    }
    calculaPontos();
    exibeJogadoresNaTela(jogadores);
}

function exibeJogadoresNaTela(){
    
    let dadosJogador = "";
    for(let jogador of jogadores){
        dadosJogador += `<tr>
                <td>${jogador.nome}</td>
                <td>${jogador.vitorias}</td>
                <td>${jogador.empates}</td>
                <td>${jogador.derrotas}</td>
                <td>${jogador.pontos}</td>
                <td><button onClick="adicionarVitoria(${jogadores.indexOf(jogador)})">Vitória</button></td>
                <td><button onClick="adicionarEmpate(${jogadores.indexOf(jogador)})">Empate</button></td>
                <td><button onClick="adicionarDerrota(${jogadores.indexOf(jogador)})">Derrota</button></td>
              </tr>`
        
    }
    let dadosTabela = document.getElementById("tabelaJogadores")
    dadosTabela.innerHTML = dadosJogador
    
}

exibeJogadoresNaTela();




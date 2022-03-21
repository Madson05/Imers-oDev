let cartas = [
    carta1 = {
        nome: "Harvey Specter",
        imagem: "https://i.pinimg.com/originals/09/b1/5a/09b15a8627b93106f125325b112bdb26.jpg",
        atributos: {
            Acusação: 10,
            Defesa: 8,
            Persuasão: 9
        }    
    },
    carta2 = {
        nome: "Jessica Pearson",
        imagem: "https://pbs.twimg.com/profile_images/1039666848852320256/iDZ6394V_400x400.jpg",
        atributos:{
            Acusação: 8,
            Defesa: 10,
            Persuasão: 9
        }  
    },
    carta3 = {
        nome: "Mike Ross",
        imagem: "https://i.pinimg.com/originals/1e/83/cf/1e83cf51c8012a56c3dc145dbd611c5f.jpg",
        atributos:{
            Acusação: 8,
            Defesa: 10,
            Persuasão: 7
        }    
    }       
]


let cartaJogador = "";
let cartaMaquina = "";
function sortearCartas(){
    let indiceMaquina = parseInt((Math.random() * 3));
    cartaMaquina = cartas[indiceMaquina];
    let indiceJogador = parseInt((Math.random() * 3));
    while(indiceJogador === indiceMaquina){
        indiceJogador = parseInt((Math.random() * 3));
    }
    cartaJogador = cartas[indiceJogador];
    exibirImagemJogador()
    document.getElementById("sortCartas").disabled = true;
    document.getElementById("buttonPlay").disabled = false;
}

function exibirImagemJogador() {
    let tituloCarta = document.getElementById("titulo-carta-jogador")
    let imagem = document.getElementById("imagem-carta-jogador")

    tituloCarta.innerHTML=`${cartaJogador.nome}`
    imagem.style.backgroundImage += `url(${cartaJogador.imagem})`;
    imagem.style.backgroundSize = "100%"
    exibirOpcoes();
}

function exibirImagemMaquina() {
    let atributosMaquina = document.getElementById("atributos-carta-maquina")
    let tituloCarta = document.getElementById("titulo-carta-maquina")
    let imagem = document.getElementById("imagem-carta-maquina")

    tituloCarta.innerHTML=`${cartaMaquina.nome}`
    imagem.style.backgroundImage += `url(${cartaMaquina.imagem})`;
    imagem.style.backgroundSize = "100%"
    for(item in cartaMaquina.atributos){
        console.log(cartaMaquina.atributos.item)
        atributosMaquina.innerHTML += `<label>${item} (${cartaMaquina.atributos[item]})</label><br>`
    }
}
    
function exibirOpcoes(){
    let opcoes = document.getElementById("atributos-carta-jogador");
    let opcoesOfertadas = "";
    for(opcao in cartaJogador.atributos){
        
        opcoesOfertadas += `<input type = "radio" name = "atributo" id = "${opcao}" value = "${opcao}">
        <label for = "${opcao}">${opcao} (${cartaJogador.atributos[opcao]})<label/><br>`
    }
    opcoes.innerHTML = opcoesOfertadas;
}



function obtemOpcaoSelecionada(){
    let opcoes = document.getElementsByName("atributo")

    for(let i = 0; i < opcoes.length; i++){
        if(opcoes[i].checked == true){
            return opcoes[i].value;
        }
    }
}

function jogar(){
    let resultado = document.getElementById("resultado");
    let elementoSelecionado = obtemOpcaoSelecionada();
    let valorSelecionadoJogador = cartaJogador.atributos[elementoSelecionado];
    let valorSelecionadoMaquina = cartaMaquina.atributos[elementoSelecionado];

    if(valorSelecionadoMaquina < valorSelecionadoJogador){
        resultado.innerHTML = "<h2>Você ganhou!</h2>"

    }else if(valorSelecionadoMaquina>valorSelecionadoJogador){
        resultado.innerHTML = "<h2>Você perdeu!</h2>"
    }else{
        resultado.innerHTML = "<h2>Você empatou</h2>"
    }
    resultado.style.backgroundColor = "black"
    resultado.style.width = "100%"
    exibirImagemMaquina();


}


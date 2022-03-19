let cartas = [
    carta1 = {
        nome: "Harvey",
        atributos: {
            Acusação: 10,
            Defesa: 8,
            Persuasão: 9
        }    
    },
    carta2 = {
        nome: "Jessica",
        atributos:{
            Acusação: 8,
            Defesa: 10,
            Persuasão: 9
        }  
    },
    carta3 = {
        nome: "Mike",
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
    exibirOpcoes()
    document.getElementById("sortCartas").disabled = true;
    document.getElementById("buttonPlay").disabled = false;
}

function exibirOpcoes() {
    opcoes = document.getElementById("opcoes");
    let opcoesOfertadas = "";
    for(opcao in cartaJogador.atributos){

        opcoesOfertadas += `<input type = "radio" name = "atributo" id = "${opcao}" value = "${opcao}">
        <label for = "${opcao}">${opcao}<label/>`
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
        resultado.innerHTML = "Você ganhou! "

    }else if(valorSelecionadoMaquina>valorSelecionadoJogador){
        resultado.innerHTML = "Você perdeu!"
    }else{
        resultado.innerHTML = "Você empatou"
    }

    resultado.innerHTML += `<br>
    <h3>Sua carta era: ${cartaJogador.nome}<br>
    O seu poder na opção escolhida foi: ${valorSelecionadoJogador}<br><br>
    A carta da Maquina era: ${cartaMaquina.nome}<br>
    E o valor da máquina na opção selecionada foi: ${valorSelecionadoMaquina}
    </h3>`


}


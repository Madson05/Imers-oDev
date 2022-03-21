let numeroSorteado = parseInt((Math.random()*10).toFixed(0))
let chances = 3;


function advinhar(){
    let numeroDigitado = parseInt(document.getElementById("chute").value);
    let retorno = document.getElementById("retorno");

    if(chances <= 1 && numeroDigitado !== numeroSorteado){
        retorno.innerHTML = "Suas chances acabaram :( <br> O numero sorteado foi: " + numeroSorteado + "<br>Vamos sortear um novo numero e suas chances serão reiniciadas, tente novamente!";
        numeroSorteado = (Math.random()*10).toFixed(0);
        chances = 3;

    } 
    else{
        if(numeroDigitado < 0 || numeroDigitado > 10){
            alert("Por Favor, Digite um numero de 0 a 10!")
        }else if(numeroDigitado === numeroSorteado){
            retorno.innerHTML = "Parabéns você acertou o numero!!"
        }else{
    
            if(numeroDigitado > numeroSorteado){
                chances = chances -1
                retorno.innerHTML = "Você errou! O numero sorteado é <strong>menor</strong> que o numero digitado. Tente novamente <br> Você ainda tem " + chances + " chances restantes"
            }else{
                chances = chances -1;
                retorno.innerHTML = "Você errou! O numero sorteado é <strong>maior</strong> que o numero digitado. Tente novamente <br> Você ainda tem " + chances + " chances restantes"
            }

    }

    


    }
    


}
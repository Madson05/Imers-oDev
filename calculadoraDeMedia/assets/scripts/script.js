function calculaMedia(){
    let nota2 = parseFloat(document.getElementById("nota02").value);
    let nota3 = parseFloat(document.getElementById("nota03").value);
    let nota1 = parseFloat(document.getElementById("nota01").value);
    let nota4 = parseFloat(document.getElementById("nota04").value);

    let media = ((nota1 + nota2 + nota3 + nota4) / 4).toFixed(1);

    let situacao = media >= 6 ? "Aprovado" : "Reprovado";

    let resultado = document.getElementById("result");

    resultado.innerHTML = "Situação: " + situacao + ". Sua Media final foi: " + media;

    if(situacao === "Aprovado"){
        resultado.style.color = "blue";
    }
    else{
        resultado.style.color = "red";
    }
    

}



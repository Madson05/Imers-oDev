let listaSeries = [];

function clearCampos(){
    document.getElementById("tituloSerie").value = "";
    document.getElementById("linkSerie").value = "";
}

function validaDados(){

    let titulo = document.getElementById("tituloSerie").value;   
    let url = document.getElementById("linkSerie").value;

    let erroEncontrado = false;

    if(!url.endsWith("jpg") || titulo == ""){
        alert("URL informada é inválida ou o campo titulo está vazio, tente novamente!");
        clearCampos();
        erroEncontrado = true;
    }

    else if(listaSeries.length > 0){
        for(serie of listaSeries){
            if(serie[0] === titulo || serie[1] === url){
                alert("Este titulo já foi adicionado.")
                erroEncontrado = true;
                clearCampos();
                break;
            }
        }
    }
    if(erroEncontrado === false){
        clearCampos();
        cadastrarSerie(titulo, url);
    }


}


function cadastrarSerie(titulo, url){

    let dadosSerie = [];

    dadosSerie.push(titulo);
    dadosSerie.push(url);
    
    listaSeries.push(dadosSerie);
    
    visualizarDados()
}

function visualizarDados(){
conteudo = document.getElementById("series")

    conteudo.innerHTML = ""
            for(let i = 0; i < listaSeries.length; i++){
                     
                conteudo.innerHTML += `<div class = "serie"> <img class = "imagemSerie" src = "${listaSeries[i][1]} " alt = "imagem de capa da serie ${listaSeries[i][0]}"> <br> <h3 class = "tituloSerie">${listaSeries[i][0]}</h3> </div>`;
            }

}
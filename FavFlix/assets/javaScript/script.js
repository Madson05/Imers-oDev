let listaSeries = [];

function inserirSerie(){
    let titulo = document.getElementById("tituloSerie").value;   
    let link = document.getElementById("linkSerie").value;
    let conteudo = document.getElementById("series");

    let dadosSerie = [];

        let verificacao = false;

    
        if(listaSeries.length !== 0){
            for(serie of listaSeries){
                if(serie[0] === titulo || serie[1] === link){
                    alert("Este titulo já foi adicionado, tente outro. ");
                    verificacao = false;
                    break;
                }else{
                    verificacao = true;
                }

                
            }

        }
        
        if(listaSeries.length === 0 || verificacao === true){
            dadosSerie.push(titulo);
            dadosSerie.push(link);
            listaSeries.push(dadosSerie);
            dadosSerie = [];
        
            console.log(listaSeries)
            conteudo.innerHTML = ""
            for(let i = 0; i < listaSeries.length; i++){
                     
                conteudo.innerHTML += `<div class = "serie"> <img class = "imagemSerie" src = "${listaSeries[i][1]} "> <br> <h3 class = "tituloSerie">${listaSeries[i][0]}</h3> </div>`;
        
                
        
            }
        
        

    }







}
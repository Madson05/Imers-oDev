function alterarTema(){
    document.body.classList.toggle("dark")
}




let areaProjetos = document.getElementById("item-projeto")
let projetos = [
    projeto1  = {
        nome: "Calculadora de Média",
        icone: "📝",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/calculadoraDeMedia/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/calculadoraDeMedia",
    },
    projeto2  = {
        nome: "Conversor de Temperatura",
        icone: "🌡",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/conversorDeTemperatura/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/conversorDeTemperatura",
    },
    projet3  = {
        nome: "Mentalista",
        icone: "❓",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/Mentalista/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/Mentalista",
    },
    projeto4  = {
        nome: "FavFlix",
        icone: "🎥",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/FavFlix/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/FavFlix",
    },   
    projeto5  = {
        nome: "Tabela de Classificação",
        icone: "🏅",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/tabelaDeClassificacao/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/tabelaDeClassificacao",
    },
    projeto6  = {
        nome: "SuperTrunfo",
        icone: "🃏",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/superTrunfo/index.html",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/superTrunfo",
    }
];


for(let indice = 0; indice < projetos.length; indice ++){
    
    areaProjetos.innerHTML += `
    <li id = "projeto${indice}" class = "items">
        <a href = "${projetos[indice].linkView}">${projetos[indice].nome} - Site 🌐</a>
    </li>

    <a href = "${projetos[indice].link}" class = "texto-codigo">Clique aqui para ver o código👨🏾‍💻</a>


    
    <style>
        #projeto${indice}::before{
            content: '${projetos[indice].icone}';
        }
        #projeto${indice}{
            margin-top: 30px;
            margin-bottom: 5px;
        }
    </style>`
}
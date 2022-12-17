function alterarTema(){
    document.body.classList.toggle("dark")
}




let areaProjetos = document.getElementById("item-projeto")
let projetos = [

    {
        
        nome: "Secret-Word",
        icone: "🔏",
        linkView: "https://madson05.github.io/secret-word/",
        link: "https://github.com/Madson05/secret-word",
    },

    {
        nome: "Quizzmica",
        icone: "❓",
        linkView: "https://madson05.github.io/Quizzmica/",
        link: "https://github.com/Madson05/Quizzmica",
    },

    {
        nome: "Interface da Netflix",
        icone: "🎥",
        linkView: "https://madson05.github.io/Bootcamp_takeBlip/Interface%20Netflix/index.html#",
        link: "https://github.com/Madson05/Bootcamp_takeBlip/tree/main/Interface%20Netflix",
    },
    
    {
        nome: "Calculadora de Média",
        icone: "📝",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/calculadoraDeMedia/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/calculadoraDeMedia",
    },
    {
        nome: "Conversor de Temperatura",
        icone: "🌡",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/conversorDeTemperatura/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/conversorDeTemperatura",
    },
    {
        nome: "Mentalista",
        icone: "🧠",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/Mentalista/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/Mentalista",
    },
    {
        nome: "FavFlix",
        icone: "🎥",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/FavFlix/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/FavFlix",
    },   
    {
        nome: "Tabela de Classificação",
        icone: "🏅",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/tabelaDeClassificacao/",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/tabelaDeClassificacao",
    },
    {
        nome: "SuperTrunfo",
        icone: "🃏",
        linkView: "https://madson05.github.io/ImersaoDev/projetos/superTrunfo/index.html",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/projetos/superTrunfo",
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
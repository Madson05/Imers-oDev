let areaProjetos = document.getElementById("item-projeto")

let projetos = [
    projeto1  = {
        nome: "Calculadora de Média",
        icone: "📝",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/calculadoraDeMedia",
    },
    projeto2  = {
        nome: "Conversor de Temperatura",
        icone: "🌡",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/conversorDeTemperatura",
    },
    projet3  = {
        nome: "Mentalista",
        icone: "❓",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/Mentalista",
    },
    projeto4  = {
        nome: "FavFlix",
        icone: "🎥",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/FavFlix",
    },   
    projeto5  = {
        nome: "Tabela de Classificação",
        icone: "🏅",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/tabelaDeClassificacao",
    },
    projeto6  = {
        nome: "SuperTrunfo",
        icone: "🃏",
        link: "https://github.com/Madson05/ImersaoDev/tree/main/superTrunfo",
    }
];


for(let indice = 0; indice < projetos.length; indice ++){
    
    areaProjetos.innerHTML += `
    <li id = "projeto${indice}" class = "items">
        <a href = "${projetos[indice].link}">${projetos[indice].nome}</a>
    </li>
    
    <style>
        #projeto${indice}::before{
            content: '${projetos[indice].icone}';
        }
        #projeto${indice}{
            margin-bottom: 5px;
        }
    </style>`
}
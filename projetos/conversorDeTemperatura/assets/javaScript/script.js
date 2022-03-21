function converter(){
    let temperaturaEmCelsius = parseFloat(document.getElementById("temperatura").value)

    let temperaturaEmFahrenheit = (temperaturaEmCelsius * 9/5) + 32
    let temperaturaEmKelvin = temperaturaEmCelsius + 273.15;

    let resultado = document.getElementById("result");
    
    resultado.innerHTML = "Temperatura em Fahrenheit = " + temperaturaEmFahrenheit +  "°F" + "<br> Temperatura em Kelvin = " + temperaturaEmKelvin + "K"


}
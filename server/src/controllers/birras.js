const weather = require("../controllers/weather");

async function getCantCajas(pFecha, pHora, pPersonas) {

    var temp = await weather.getTempDiaHoraMeetup(pFecha, pHora)

    var cantBirras = 0
    var cantCajas = 0 

    if (temp < 20) {
        
        //redondeo siempre para arriba
        cantBirras = Math.ceil(pPersonas * 0.75) 

    } else if (temp >= 20 && temp <= 24) {

        cantBirras = pPersonas 

    } else if (temp > 24) {

        cantBirras = pPersonas * 2

    }

    //parte entera 
    entero = Math.trunc(cantBirras / 6)
    resto = cantBirras % 6

    if (resto == 0) {
        cantCajas = entero  
    } else {
        cantCajas = entero + 1 
    }

    return cantCajas
    
}
  
module.exports = {
    getCantCajas: getCantCajas
}
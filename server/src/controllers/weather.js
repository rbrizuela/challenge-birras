const axios = require("axios");

async function getArrayTemp() {

  var dataResult = []

  try {
    const resp = await axios.get('https://community-open-weather-map.p.rapidapi.com/forecast', {
        headers: {
          "content-type":"application/octet-stream",
          "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":"762600f3ddmshbd313488760ba5bp106f94jsn2860819507f3",
          "useQueryString":true
        },
        params: {
          "q":"Cipolletti",
          "units":"metric",
        }
    });

    var list = resp.data.list

    list.forEach(item => {
      dataResult.push ({ "fecha": item.dt_txt.substr(0,10) , 
                          "hora": item.dt_txt.substr(11,8),
                          "fechaHora": Date.parse(item.dt_txt),
                          "temp": item.main.temp,
                        })
    })

  } catch (err) {
    console.error(err);
  }

  return dataResult

}

async function getTempDiaHoraMeetup(pFecha , pHora) {

  var fechaHoraDate = Date.parse(pFecha + ' ' + pHora)

  const data = await getArrayTemp()

  var resultTemp = null

  //buscare la temp siguente a la fecha-hora de la meetup
  //podria ser mejor eso, pero lo resovere mas adelante
  for (let item of data) {
    if (item.fechaHora >= fechaHoraDate) {
      resultTemp = item.temp
      break
    }
  }

  return resultTemp

}


module.exports = {
  getArrayTemp: getArrayTemp,
  getTempDiaHoraMeetup: getTempDiaHoraMeetup
}
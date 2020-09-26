const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas
const weather = require("../controllers/weather");
const birras = require("../controllers/birras");

//-----------------------------------------------------------------------
//  Ruta inicial
//-----------------------------------------------------------------------
router.get('/', (req, res) => {
  console.log('/')
  res.status(200).json({ status: 'ok' })

})

//-----------------------------------------------------------------------
//  GET temp
//-----------------------------------------------------------------------
router.get('/temp', async (req, res) => {
  
  var msgError = ""

  const { fecha, hora } = req.query

  if (isNaN(Date.parse(fecha + ' ' + hora))) {
    msgError = "Fecha/Hora Invalida"
  }

  if (msgError == "") {
    var temp = await weather.getTempDiaHoraMeetup(fecha , hora)
    res.status(200)
    res.status(200).json({ "temp": temp })
    }
  else {
    res.status(500)
    res.status(500).json({ Error: msgError})
  }

})

//-----------------------------------------------------------------------
//  GET birras
//-----------------------------------------------------------------------
router.get('/birras', async (req, res) => {

  var msgError = ""

  const { fecha, hora, personas } = req.query

  if (isNaN(Date.parse(fecha + ' ' + hora))) {
    msgError = "Fecha/Hora Invalida"
  }

  if (msgError == "") {
    var cantCajas = await birras.getCantCajas(fecha , hora, personas)
    res.status(200)
    res.status(200).json({ "Cajas": cantCajas })
    }
  else {
    res.status(500)
    res.status(500).json({ Error: msgError})
  }

})

module.exports = router

const express = require("express");
const morgan = require("morgan");
const cors = require('cors')

const pool = require('./database')

const app = express()

//settings
app.set('appName', 'Server Birras')

//middlewares
app.use(morgan('dev'))

//aceptar desde los form los datos que envia el usuario, extended: false solo acepta texto y no imagenes por ejemplo
app.use(express.urlencoded({extended: false}))
//para poder enviar y recibir JSON
app.use(express.json())

//para poder conectar entre 2 servers (front y back)
app.use(cors())

//rutas
app.use('/api', require('./routes/index.js')) 
app.use('/api', require('./routes/meetups'))   
app.use('/api', require('./routes/asistentes'))   
app.use('/api', require('./routes/miembros'))   

app.listen(8000, () => {
  console.log('Server on port 8000')
  console.log(app.get('appName'))
})


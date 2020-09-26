const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas
const pool = require('../database')

//-----------------------------------------------------------------------
//  GET asistentes
//-----------------------------------------------------------------------
router.get('/asistentes/:id', async (req, res) => {

  const { id } = req.params //Nro de la Meetup
  const result = await pool.query('SELECT * FROM Asistentes WHERE idMeetup = ?', [id])
  res.status(200).json( result[0] ) 
  
})

//-----------------------------------------------------------------------
//  POST asistentes
//-----------------------------------------------------------------------
router.post('/asistentes', async (req, res) => {

  const { idMeetup, idMiembro } = req.body
  const newAsistente = { idMeetup, idMiembro }

  const result = await pool.query('INSERT INTO Asistentes set ?', [newAsistente])

  res.status(200).json({ "Nuevo Asistente : Id": result.insertId })

})

//-----------------------------------------------------------------------
//  POST checkin 
//-----------------------------------------------------------------------
router.post('/Checkin', async (req, res) => {
  
  const { idMeetup, idMiembro } = req.body
  const sql = `UPDATE Asistentes set CheckIn = ${"'S'"} WHERE idMeetup = ${idMeetup} and idMiembro = ${idMiembro}`
  const result = await pool.query(sql)
  res.status(200).json({ "Update ok : Id": result })

})

module.exports = router

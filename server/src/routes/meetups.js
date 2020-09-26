const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas
const pool = require('../database')

//-----------------------------------------------------------------------
//  SELECT ALL
//-----------------------------------------------------------------------
router.get('/meetups', async (req, res) => {

  const result = await pool.query('SELECT * FROM Meetups')
  res.status(200).json( result ) 
  
})


//-----------------------------------------------------------------------
//  SELECT 1
//-----------------------------------------------------------------------
router.get('/meetups/:id', async (req, res) => {

  const { id } = req.params
  const result = await pool.query('SELECT * FROM Meetups WHERE id = ?', [id])
  console.log(result[0])
  res.status(200).json( result[0] ) 
  
})

//-----------------------------------------------------------------------
//  INSERT
//-----------------------------------------------------------------------
router.post('/meetups', async (req, res) => {

  const { fecha, hora, descripcion, lugar } = req.body
  const newMeetup = { fecha, hora, descripcion, lugar }

  const result = await pool.query('INSERT INTO Meetups set ?', [newMeetup])

  res.status(200).json({ "Nueva Meetup : Id": result.insertId })

})

//-----------------------------------------------------------------------
//  UPDATE
//-----------------------------------------------------------------------
router.put('/meetups/:id', async (req, res) => {

  const { id } = req.params;
  const result = await pool.query('UPDATE Meetups SET ? WHERE id = ?', [req.body, id])
  res.status(200).json({ message: `El Meetup ${id} fue actualizado`})

})

//-----------------------------------------------------------------------
//  DELETE
//-----------------------------------------------------------------------
router.delete('/meetups/:id', async (req, res) => {

  const { id } = req.params
  const result = await pool.query('DELETE FROM Meetups WHERE id = ?', [id])
  res.status(200).json( { message: `El Meetup ${id} fue eliminado`} ) 
  
})

module.exports = router

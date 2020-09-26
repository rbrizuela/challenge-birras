const express = require("express");
const router = express.Router()   //requerimos express para crear las rutas
const pool = require('../database')

//-----------------------------------------------------------------------
//  GET miembros
//-----------------------------------------------------------------------
router.get('/miembros/:id', async (req, res) => {

  const { id } = req.params
  const result = await pool.query('SELECT * FROM Miembros WHERE id = ?', [id])
  res.status(200).json( result[0] ) 
  
})

router.get('/miembros', async (req, res) => {

  const result = await pool.query('SELECT * FROM Miembros')
  res.status(200).json( result ) 
  
})

//-----------------------------------------------------------------------
//  POST miembros
//-----------------------------------------------------------------------
router.post('/miembros', async (req, res) => {

  const { nombre } = req.body
  const newMiembro = { nombre }

  const result = await pool.query('INSERT INTO Miembros set ?', [newMiembro])

  res.status(200).json({ "Nuevo Miembro : Id": result.insertId })

})

module.exports = router

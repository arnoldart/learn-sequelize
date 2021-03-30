const { sequelize, Keluarga, Anak_pertama } = require('../../models')

const express = require('express')
const app = express.Router()

app.post('/', async (req, res) => {
  if(req.method !== 'POST') return res.status(405).end()
  
  const { kepala_keluarga } = req.body

  // const anak = await Anak_pertama.create({ anak_pertama })

  res.status(200)
  res.json({
    message: 'Create successfully',
    // data: anak
  })
})

module.exports = app
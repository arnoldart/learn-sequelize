const { sequelize, Keluarga, Anak_pertama, Anak_kedua } = require('../../models')

const express = require('express')
const app = express.Router()

app.post('/anakpertama', async (req, res) => {
  if(req.method !== 'POST') return res.status(405).end()
  
  const { rm_anak_pertama, anak_pertama } = req.body

  const anak = await Anak_pertama.create({ rm_anak_pertama, anak_pertama })

  res.status(200)
  res.json({
    message: 'Create successfully',
    data: anak
  })
})

app.post('/anakkedua', async (req, res) => {
  if(req.method !== 'POST') return res.status(405).end()
  
  const { rm_anak_kedua, anak_kedua } = req.body

  const anak = await Anak_kedua.create({ rm_anak_kedua, anak_kedua })

  res.status(200)
  res.json({
    message: 'Create successfully',
    data: anak
  })
})

module.exports = app
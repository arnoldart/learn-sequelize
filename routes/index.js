const { sequelize, Keluarga, Anak_pertama, Anak_kedua } = require('../models')

const express = require('express')
const app = express.Router()

app.get('/', async (req, res) => {
  if(req.method !== 'GET') return res.status(405).end()

  const anak = await Keluarga.findAll({ include: [ Anak_pertama, Anak_kedua ] })

  res.status(200)
  res.json({
    message: 'Get all data successfully',
    data: anak
  })
})

module.exports = app
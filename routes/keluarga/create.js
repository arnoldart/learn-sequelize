const { sequelize, Keluarga, Anak_pertama, Anak_kedua } = require('../../models')

const express = require('express')
const app = express.Router()

app.post('/', async (req, res) => {
  if(req.method !== 'POST') return res.status(405).end()
  
  const { nomer_rm_kepala_keluarga, kepala_keluarga, nomer_rm_istri, istri, userId } = req.body

  const anakpertama = await Anak_pertama.findOne({ where: { rm_anak_pertama: userId } })
  const keluarga = await Keluarga.create({ nomer_rm_kepala_keluarga, kepala_keluarga, nomer_rm_istri, istri, userId: anakpertama.id})

  res.status(200)
  res.json({
    message: 'Create successfully',
    data: keluarga
  })
})

module.exports = app
const { sequelize, Keluarga, Anak_pertama } = require('./models')
const Getall = require('./routes/index')
const createAnak = require('./routes/anak/create')
const createKeluarga = require('./routes/keluarga/create')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use('/', Getall)
app.use('/', createAnak)
app.use('/keluarga', createKeluarga)

app.listen({ port: 5000 }, async (req, res) => {
  console.log('Server running on port http://localhost:5000')
  await sequelize.sync()
  console.log('Database synced')
})
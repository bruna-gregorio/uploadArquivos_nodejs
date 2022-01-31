const express = require('express')
const multer = require('multer')
const multerConfig = require('./config/multer')

const routes = express.Router()

routes.post("/post", multer(multerConfig).single("file"), (req, res) => {
  console.log(req.file)
  return res.json({ hello: 'World' })
})

module.exports = routes
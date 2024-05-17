
import express from 'express'
import { MongoConnection } from './database/MongoConnection'
import { UrlController } from './controller/UrlController'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new UrlController()
api.post('/encurtar', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Servidor iniciado...'))
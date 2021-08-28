const express = require('express')
const routes = express.Router()

const views = __dirname + '/views/'

routes.get('/', (req, res) => res.render(views + 'pages/index'))
routes.get('/events', (req, res) => res.render(views + 'pages/events'))
routes.get('/depoiments', (req, res) => res.render(views + 'pages/depoiments'))
routes.get('/contact', (req, res) => res.render(views + 'pages/contact'))
routes.get('/company', (req, res) => res.render(views + 'pages/company'))

module.exports = routes
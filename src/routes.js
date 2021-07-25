<<<<<<< HEAD
const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("index", { page: 'enter-room' }))
route.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)

module.exports = route
=======
const express = require('express');
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const routes = express.Router();

routes.get('/', (req, res) => res.render("index", { page: 'enter-room' }));
routes.get('/create-pass', (req, res) => res.render("index", { page: 'create-pass' }));

routes.get('/room/:room', (req, res) => res.render("room"));

// Formato que o formulário de dentro da modal tem que passar a informação 
routes.post('/question/:room/:question/:action', QuestionController.index)
routes.post('/create-room', RoomController.create)

module.exports = routes;
>>>>>>> parent of 38a8063... Class 05 - Finish

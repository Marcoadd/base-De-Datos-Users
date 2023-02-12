const usersServices = require('./users.services')

const router = require('express').Router()

router.get('/users', usersServices.getAllUser)

router.get('/users/:id', usersServices.getUsersById)

router.post('/users', usersServices.postNewUser)

module.exports = router
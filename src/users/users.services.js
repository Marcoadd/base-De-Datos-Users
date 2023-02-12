const {json} = require('express')
const usersController = require('./users.controllers')

const getAllUser = (req, res) => {
  usersController.findAllUsers()
  .then(data => {
    res.status(200).json(data)
  })
  .catch(err => {
    res.status(400).json(err)
  })
}

const getUsersById = (req, res) => {
  const id = Number(req.params.id)
  usersController.findUsersById(id)
    .then(data => {
      if(data){
        res.status(200).json(data)
      }else{
         res.status(404).json({message: 'User not found'})
      }
    })
    .catch(err => {
      res.status(404).json(err)
    })
}

const postNewUser = (req, res) => {
  const userObje = req.body
  usersController.createNewUser(userObje)
    .then( data  => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

module.exports = {
  getAllUser,
  getUsersById,
  postNewUser
}

//dependencias
const express = require('express')

// initial config
const app = express()
app.use(express.json())

const usersDB = [
  {
    id :1,
    firstName: 'Marco',
    lastName: 'Diaz',
    email: 'marco@academlo.com',
    password: 'Antonio1234',
    age: 22
  }
]
let baseId = 2;

// recibir informacion del cliente 
app.get('/', (req, res) => {
  res.json({
    message: 'Server ok'
  })
})

// crear una ruta que muestre los usuarios
app.get('/users', (req, res) => {
  res.json(usersDB)
})

//crear una ruta que muestre el usuario por id
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id)

  const data = usersDB.find((item) => id === item.id)

  if(data){
    res.json(data)
  }else{
    res.status(404).json({
      message: 'Invalid Id'
    })
  }
})

// Crear una ruta que agregue un usuario nuevo 
app.post('/users', (req, res) => {
  const data = req.body
  const newUser = {
    id : baseId++,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    age: 22
  }
  usersDB.push(newUser)
  res.json(newUser)
})



app.listen(9000, () => {
  console.log('server started at port 9000');
})

module.exports = app

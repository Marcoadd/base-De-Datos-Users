//dependencias
const express = require('express')
const usersRouter = require('./users/users.router')

// initial config
const app = express()
app.use(express.json())
  
app.get('/', (req, res) =>{
  res.json({
    message: 'Server ok',
  })
})

app.use('/api/v1', usersRouter)

app.listen(9000, () => {
  console.log('server started at port 9000');
})

module.exports = app

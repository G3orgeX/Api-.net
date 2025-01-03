const express = require("express")
const User = require('./user.controller')
const app = express()
const mongoose = require("mongoose")
const port = 3000
app.use(express.json())

mongoose.connect(
  "mongodb+srv://jorgecabutn:202512@cluster0.3ujqw.mongodb.net/myapp?retryWrites=true&w=majority&appName=Cluster0"
); 
app.get('/users',User.list)
app.post('/users', User.create)

app.get('/users/:id',User.get)

app.put('/users/:id',User.update)
app.patch('/users/:id',User.update)
app.delete('/usersdelete/:id',User.destroy)
app.get('/',(req,res) => {
  res.sendFile(`${__dirname}/index.html`)
})
app.listen(port,() => {
    console.log("Arrancando la Aplicacion ")
})
app.use(express.static('app'))

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://jorgecabutn:202512@cluster0.3ujqw.mongodb.net/myapp?retryWrites=true&w=majority&appName=Cluster0"
);
const User = mongoose.model('User',{
    username:String,
    age:Number,    
})
const create = async() => {
    const user = new User({username:'valentina',age:22})
    const savedUser = await user.save()
    console.log(savedUser)
}
// create()
const buscartodo = async() => {
    const user = await User.find()
    console.log(user)
}
// buscartodo()

const buscarUser = async()=>{
    const user = await User.find({username:'Jorge'})
    console.log(user)
}
// buscarUser()
const buscarOne = async() => {
    const user = await User.findOne({username:'Jorge'})
    console.log(user)
}
// buscarOne()

const updateUser = async() => {
    const user = await User.findOne({username:'Jorge'})
    console.log(user)
    user.age = 30 
    await user.save()
}    
updateUser() 

const eliminar = async() => {
    const user = await User.findOne({username:'valentina'})
    console.log(user)
    if (user){
        await user.remove()
    }        
}
eliminar()
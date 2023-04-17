const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    
    firstname:String,
    lastname:String,
    mail:String,
    username:String,
    password:String,
    role:String,

})
// password encrypt 
userSchema.pre("save",function(next){
    const user = this;
    const currentPassword = user.password;
    bcrypt.hash(currentPassword,10,(e,encryptPassword)=>{
        user.password = encryptPassword;
        next();
    })
});

const user = mongoose.model("user",userSchema);
module.exports = user;
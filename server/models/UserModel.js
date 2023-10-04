const mongoose = require('mongoose');
const bcrypt=require("bcrypt");
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required: true
    },
    email: {
        type: String, 
        required: [true,"Email is Required"],
        unique:true,
        lowercase: true,
    },
    password: {
         type: String, 
         required:[true,"Password is Required"],
         minlength: [4, "At least enter 4 characters in password!"],
        },
});

//for password encryption
userSchema.pre("save",async function(next){
    const salt=await bcrypt.genSalt();
    this.password=await bcrypt.hash(this.password,salt);
    next();
});

userSchema.statics.login=async function(email,password)
{
    const user=await this.findOne({email});
    if(user){
        const auth=await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email");
};

module.exports = mongoose.model('Users', userSchema);

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    email: {
        type: String, 
        required: [true, "Email is Required"],
        unique: true,
    },
    password: {
         type: String, 
         required: [true, "Password is Required"],
    },
});

adminSchema.statics.login= async function(email, password) {
    const admin = await this.findOne({ email });
    if (admin) {
        if (password === admin.password) {
            return admin;
        }
        throw Error("Incorrect Password");
    }
    throw Error("Incorrect Email");
};

module.exports = mongoose.model('Admins', adminSchema);

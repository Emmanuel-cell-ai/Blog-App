const { required } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: email,
        required:true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }

})

const User = mongoose.model("User", userSchema);

module.exports = User;
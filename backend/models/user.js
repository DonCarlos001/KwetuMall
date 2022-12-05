import {model, Schema}from "mongoose"

const User= new Schema({
    name:{
        type: String,
        default:"string",
    },
    email:{
        type: String,
        required: true,
    },
    password: String,
    phoneNumber: String,
    cart:[Object],
    wishlist:[String],
    profilePic: String,
})

var user= model("user", User)

export default user;
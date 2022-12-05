import {model, Schema}from "mongoose"

const Admin= new Schema({
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
    profilePic: String,
})

var admin= model("admin", Admin)

export default admin;
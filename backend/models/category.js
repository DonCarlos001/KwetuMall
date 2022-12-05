import {model, Schema}from "mongoose"

const Category= new Schema({
    name:{
        type:String,
        default:"string",
    },
})

var category= model("category", Category)

export default category;
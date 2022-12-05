import {model, Schema}from "mongoose"

const getDetailModel= new Schema({
    name:{
        type: String,
        default:"string",
    },
    age:{
        type: Number,
        default:"Number",
    },
})
var exerciseDetailsModel= model("exerciseDetailsModel",getDetailModel )

export default exerciseDetailsModel;
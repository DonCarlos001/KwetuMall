import {model, Schema}from "mongoose"

const Product= new Schema({
    name:{
        type: String,
        default:"string",
    },
    description: String,
    main_image:{
        type: String,
        required: true,
    },
    image: [String],
    category: [String],
    price:{
        type: Number,
        default: 0,
    },
    quantity:{
        type: Number,
        default: 0,
    }
});

var product=model("product", Product);

export default product;
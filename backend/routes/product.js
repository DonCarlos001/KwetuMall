import express from 'express'
import Product from '../models/product.js'
import exerciseDetailsModel from '../models/exerciseDetailsModel.js'
import multer from "multer"
import fs from 'fs'

const router = express.Router();
const upload= multer({dest: 'uploads'})
const uploadImages=upload.fields([
    {name: 'mainImage', maxCount:1},
    {name: 'postImages', maxCount:4}
]) 

router.get('/getproducts', async (req, res)=>{
    const product= await Product.find();
    console.log(product);
    res.send(product)
});

router.post('/createaproduct', uploadImages,(req, res)=>{
    // upload.single('mainImage')
    // const postImage= req.file;
    const postImages= req.files;
    console.log(postImages)

    const singleImage= req.files.mainImage[0];
    const multipleImages= req.files.postImages;
    //console.log(postImage)
    let fileType= (singleImage.mimetype).split('/')
    let newFileName=singleImage.filename + '.'+ fileType[1];
    fs.rename(`./uploads/${singleImage.filename}`,`./uploads/${newFileName}`,()=>{
        // res.send('Successfully saved Image') 
    })
    let imageNames= multipleImages.map((image)=>{
        let fileType= (image.mimetype).split('/')
        let newFileName=image.filename + '.'+ fileType[1];
        fs.rename(`./uploads/${image.filename}`,`./uploads/${newFileName}`,()=>{
            // res.send('Successfully saved Image') 
        })
        return newFileName;
    })
    console.log(imageNames)
    // res.send('Successfully saved Image') 

    // console.log(req.body)
    // console.log('form data gotten')
    // res.send(`Hello world`)

    const newProduct= new Product({
        name:req.body.name,
        description:req.body.description,
        main_image:newFileName,
        image:imageNames,
        category:req.body.category,
        price:req.body.price,
    })

    newProduct.save()
        .then(doc=>{
            console.log(doc);
            res.send(doc);
        })
        .catch((error)=>{console.log(error)});
})

router.post('/getdetails',(req, res)=>{
    console.log(req.body.name)
    console.log(req.body.yearofbirth)
    let age= 2022-req.body.yearofbirth
    console.log(age)
    console.log(`Name is:${req.body.name}`)
    console.log(`Age is:${age}`)




    const newExerciseDetailModel = new exerciseDetailsModel({
        name:req.body.name,
        age:age,
    })

    newExerciseDetailModel.save()
    .then(doc=>{console.log('Product added to the database')})
    .catch((error)=>{console.log(error)})
})

// this route gets one product
router.get('/getproduct/:id', async(req, res)=>{
    //req.params.id gives you the id that has been passed in the url 
    console.log(req.params.id)
    // console.log('getting one prod')
    const product=await Product.find({_id:req.params.id})
    console.log(product)
    res.send(product)
})

//this route updates product
router.post('/editproduct/:id', async(req, res)=>{
    console.log('editproduct');
    console.log(req.params.id);
    console.log(req.body);
     let id= req.params.id;
     const product= await Product.findOne({_id:id});
    product.name= req.body.name;
    product.description=req.body.descriprion;
    product.main_image=req.body.mainImage;
    product.category=req.body.category;
    product.price=req.body.price;
    const result= await product.save();
    console.log('Product updated succesfully');
    res.send('Product updated succesfully');
})

// delete Product
router.post('/deleteproduct', async(req, res)=>{
    console.log(`delete product route`)
    let id= req.body.id;
    console.log(id)
    await Product.deleteOne({_id: id})
    res.send('Successfully deleted product')
})

// addStock
router.post('/addstock/:id', async(req, res)=>{
    console.log('addstock');
    // console.log(req.params.id);
    // console.log(req.body);
     let id= req.params.id;
     const product= await Product.findOne({_id:id});
     if (product.quantity){
        product.quantity = Number(product.quantity) + Number(req.body.quantity)
     }else{
        product.quantity= Number(req.body.quantity)
     }
     console.log(product.quantity)
    //  console.log(isNaN(req.body.quantity))
    // product.quantity= Number(req.body.quantity);
    const result= await product.save();
    console.log('Stock added succesfully'); 
    res.send(result);
})


export default router;

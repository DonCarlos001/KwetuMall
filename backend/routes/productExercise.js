import express from 'express'
import Product from '../models/product.js'

const router = express.Router();

router.get('/getproducts', async (req, res)=>{
    const productexercise= await Product.find();
    console.log(productexercise);
    res.send(productexercise)
})

router.post('/createaproduct',(req, res)=>{
    console.log(req.body)
    console.log('form data gotten')
    // res.send(`Hello world`)

    const newProductexercise= new Product({
        name:req.body.name,
        description:req.body.description,
        main_image:req.body.mainImage,
        image:'',
        category:req.body.category,
        price:req.body.price,
    })
    newProductexercise.save()
    .then(doc=>{
        console.log(doc);
        res.send(doc);
    })
    .catch((error)=>{console.log(error)});

})
router.post('/deleteproduct', async(req, res)=>{
    console.log(`delete product route`)
    let id= req.body.id;
    console.log(id)
    await Product.deleteOne({_id: id})
    res.send('Successfully deleted product')
})
router.get('/:id', async ( req, res)=>{
    let _id= req.params.id;
    const Productexercise= await Product.find({_id});
    res.send(Productexercise);
})
router.post('/update/:id', async(req,res)=>{
    let _id= req.params.id;
    const productexercise= await Product.findOne({_id});
    productexercise.name= req.body.name;
    productexercise.description=req.body.descriprion;
    productexercise.main_image=req.body.mainImage;
    productexercise.category=req.body.category;
    productexercise.price=req.body.price;
    const result= await productexercise.save()
    console.log(result)
    res.send(result)
})


export default router;
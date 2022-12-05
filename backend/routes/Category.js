import express from 'express'
import Category from "../models/category.js"
const router= express.Router();

router.get('/', async(req, res)=>{
    const category= await Category.find()
    console.log(category)
    res.send(category)
})
router.get('/:id', async ( req, res)=>{
    let _id= req.params.id;
    const category= await Category.find({_id});
    res.send(category);
})
router.post('/create', (req, res)=>{
    console.log(req.body)
    const newCategory= new Category({
        name: req.body.name,
    })
    newCategory.save()
    .then(doc=>{res.send(doc)})
})
router.post('/update/:id', async(req,res)=>{
    let _id= req.params.id;
    const category= await Category.findOne({_id});
    category.name= req.body.name;
    const result= await category.save()
    console.log(result)
    res.send(result)
})
router.post('/delete', async (req, res)=>{
    let _id=req.body._id
    await Category.deleteOne({_id})
    res.send('Successfully deleted category')
})


export default router;
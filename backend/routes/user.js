import express from 'express'
import User from '../models/user.js'

const router = express.Router();

router.post('/addtocart/:id', async (req, res)=>{
    // console.log('add to cart')
    console.log(req.body)
    const user=await User.findOne({_id:req.body.userId})
    // check if product is already inside the cart
    // using map check each item in cartand if the id is the same as req.body.id then req.send(you already have this in your cart)
    // else, we are going to save the product to cart

    // use filter find an item where the id === req.body.productId
    // check the length of the array// length===1, it means we found such a product
    // if length of the array iz zero , it means we did'nt find the product and we can now save it 

    const prod= user.cart.filter((item)=> item.id === req.body.productId);
    if (prod.length>0){
        res.send('You already have this in your cart')
    }else{
        user.cart=[...user.cart,{
            id:req.body.productId,
            quantity:req.body.quantity
        }]
    }
   
    const result=await user.save();
    res.send(result)
    // console.log(user)
    // res.send('Success')
    
})

export default router;
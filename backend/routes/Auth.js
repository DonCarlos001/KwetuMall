import express from "express";
import User from "../models/user.js"
import Admin from "../models/admin.js"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

const saltRounds= 10;
const router= express.Router();

router.post('/register', (req, res)=>{
    console.log('getting to register route')
    bcrypt.hash(req.body.password, saltRounds, (err, hash)=>{
        // store hash in your password db
        console.log(hash)
        // sve to user model
        const newUser= new User({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            password:hash,
        })
        newUser.save()
            .then((doc)=>{
                console.log(doc)
                res.send('User added to the Database')
            })
    })
});


router.post('/login', async(req, res)=>{
    // console.log(req.body)
    const user= await User.findOne({email: req.body.email});
    bcrypt.compare(req.body.password, user.password, (error, response)=>{
        if(response=== true){
            const id= user._id;
            const token= jwt.sign({id}, 'jwtSecret', {
                expiresIn: 300
            });
            req.session.user = user;
            res.json ({auth: true, token: token, result:user})
        }else{
            res.json ({auth: false, message: 'Wrong email/password combination!'})
            // res.send('Wrong email/password combination!');
        }
    })
});

//Checks if user authenticated
const verifyJwT =(req, res, next)=>{
    const token = req.headers['x-access-token'];
    if (!token){
        res.send('we need a token, please give it to us next time! ')
    }else{
        jwt.sign(token, 'jwtSecret', (err, decoded)=>{
            if (err){
                res.json({auth:false, message: 'You are not logged in'})
            }else{
                req.userId = decoded.id;
                console.log(decoded);
                next();
            }
        })
    }
}
router.get('/isUserAuth', verifyJwT, (req, res)=>{
    res.send('User is authenticated')
})

// Admin auth routes
router.post('/register/admin', (req, res)=>{
    console.log('getting to register route')
    bcrypt.hash(req.body.password, saltRounds, (err, hash)=>{
        // store hash in your password db
        console.log(hash)
        // sve to user model
        const newAdmin= new Admin({
            name:req.body.name,
            email:req.body.email,
            phoneNumber:req.body.phoneNumber,
            password:hash,
        })
        newAdmin.save()
            .then((doc)=>{
                console.log(doc)
                res.send('Admin added to the Database')
            })
    })
});

router.post('/login/admin', async(req, res)=>{
    // console.log(req.body)
    const admin= await Admin.findOne({email: req.body.email});
    bcrypt.compare(req.body.password, admin.password, (error, response)=>{
        if(response=== true){
            const id= admin._id;
            const token= jwt.sign({id}, 'jwtSecret', {
                expiresIn: 300
            });
            req.session.admin = admin;
            res.json ({auth: true, token: token, result:admin})
        }else{
            res.json ({auth: false, message: 'Wrong email/password combination!'})
            // res.send('Wrong email/password combination!');
        }
    })
});

export default router;
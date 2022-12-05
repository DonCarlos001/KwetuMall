import mongoose from "mongoose"
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import categoryRouter from './routes/Category.js'
import productRouter from './routes/product.js'
import productExerciseRouter from './routes/productExercise.js'
import authRouter from "./routes/Auth.js"
import session from 'express-session'
import exerciseRouter from "./routes/Exercises.js"
import userRouter from "./routes/user.js"


const app = express();
const PORT= 4001;

app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}))
app.use(cors());
app.use(express.static('uploads'))
app.use(
    session({
        key: 'userId',
        secret: 'subscribe',
        resave: false,
        saveUninitialized: false,
        cookie:{
            expires: 60*60*24
        }
    })
)

mongoose.connect(
    "mongodb+srv://carlos:90450447@cluster0.859lfp6.mongodb.net/kwetuMall?retryWrites=true&w=majority",
    {
        useNewUrlParser:true,
    }
)
.then(e=> console.log("MongoDB ready"))
.catch(console.error);

app.use('/',productRouter);
app.use('/category',categoryRouter)
app.use('/',productExerciseRouter)
app.use('/auth', authRouter);
app.use('/exercise', exerciseRouter);
app.use('/user',userRouter)

app.listen(PORT, ()=>{
    console.log('server listening on port:'+ PORT)
});   
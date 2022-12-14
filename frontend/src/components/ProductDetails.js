import React,{useState, useEffect} from 'react';
import"../styles/productdetails.css";
import Axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import useAuth from './hooks/useAuth';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProductDetails= () =>{

    const {id}=useParams();
    const navigate= useNavigate();
    // console.log('we got the id:'+ id)
    const [cartCount]=useAuth(`/productdetails/${id}`, 'token')
    console.log(cartCount)
    const [message, setMessage]= useState()
    const [color, setColor]= useState()
    const [product, setProduct]= useState({
        name:'',
        description:'',
        mainImage:'',
        image: [''],
        price:','
    })

    const[counter, setCounter]= useState(0);
    let addCounter= ()=>{
        setCounter(counter + 1);
    };
    let minusCounter=()=>{
        setCounter(counter - 1);
    };
    useEffect(()=>{
        Axios.get(`http://localhost:4001/getproduct/${id}`)
        .then((data)=>{
            console.log(data.data[0])
            setProduct({
                name:data.data[0].name,
                price:data.data[0].price,
                description:data.data[0].description,
                mainImage:data.data[0].main_image,
                image:data.data[0].image,
            })
            console.log(data.data[0].image)
        })
        .catch((error)=>{console.log(error)})
    },[id])

    let path='http://localhost:4001/'

    const saveToUser=()=>{
        const userId= localStorage.getItem('userId')
        let productId = id;
        let quantity = counter;
        console.log(userId)
        Axios.post(`http://localhost:4001/user/addtocart/${id}`,{userId, productId, quantity})
        .then ((data)=>{
            if(data.data==='You already have this in your cart'){
                setMessage('Product already in cart');
                setColor('red')
            }else{
                setMessage('Product added to cart');
                setColor('green')
            }
        })
        
        // data to pass; product.id, user.id, quantity
        //axios.post (user/addtocart, pass the data)
        // .then ((data)=> console.log(data))
    }

    return (
    <div className = "product-details">
        {message ?<p className={color}>{message}</p>: null}
            <div className="left"  onClick={()=>{navigate(`/cart`)}}>
               <p className="cartbtn">{cartCount}</p>
                <p className="cartIcon"><ShoppingCartIcon/></p>
            </div>
            <div className="line"></div>
        {/* <div className="secondDiv"> */}
            <div className= "row">
                <div className = "col-6">
                    <img alt = 'product' src = {path+product.mainImage} className="productdetailimage1"/>
                    <div>
                        {
                            product.image.map(image=> {
                                return(
                                    <img  src ={path + image} alt = 'smallproduct' className="small_img" />
                                )
                            })
                        }
                    </div>
                    {/* <img alt = 'smallproduct' src ={path + product.image}/> */}
                </div>
                <div className = "col-6">
                    <p>{product.name}</p>
                    <div className= "description">
                    <h5>Description</h5>
                    <p> {product.description}
                    </p>
                    <p className="price">{product.price}</p>
                    <div className="count">
                        <button onClick={addCounter}>+</button>
                        <p className="zero">{counter}</p>
                        <button onClick= {minusCounter}>-</button>
                        <button className= "button" onClick={saveToUser}>ADD TO CHART</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // </div>
    )
}
export default ProductDetails;
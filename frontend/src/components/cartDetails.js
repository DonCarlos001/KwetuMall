import React, {useState,useEffect} from 'react'
import"../styles/cartdetails.css";
import Axios from 'axios'

const PATH='http://localhost:4001/'
const CartDetails=()=>{
    const[ products, setProducts]=useState([])
    //have a useEffect here
    // get userId from localStorge
    // have an axios route that gets all cart details from d.b
    // the route will be in user.js and it will be called /user/getcartdetails
    // useEffect(()=>{
    //     let userId =localStorage.getItem('userId');
    //     Axios.get(`http://localhost:4001/user/getcartdetails/${userId}`)
    //     console.log(userId);
    // }, [])
    
    useEffect(()=>{
        let userId= localStorage.getItem('userId')
        console.log(userId)
        Axios.get(`http://localhost:4001/user/getcartdetails/${userId}`)
        .then((data)=>setProducts(data.data))
        },[])
    // const[num, setNum]= useState(0);
    // const [bool, setBool]= useState(false)
    // useEffect(()=>{
    //      setNum(num + 1);
    //      console.log(num)
    //     //  setBool('true')
         
    // },[])
    // useEffect(()=>{
    //     console.log('Bool has been Changed')
    // },[bool])

    // const toggler=()=>{
    //     setBool(!bool)
    // }

    let array= [1,0,'g','o',7,8]
    const convert=(arr)=>{
            if(typeof(arr)==='number'){
                return true
            }
            else{
                return false
            }
        }
        let numbersOnly= array.filter(convert)
        // console.log(numbersOnly)

 
    return(
       
        <div>
            {/* <button onClick={toggler}>Toggler</button> */}
            <h1>Cart</h1>
            {
                products.map((product)=>{
                    return(
                    <div className="items">
                        <img alt = 'product' src = {PATH+product.image}className="af1"/>
                        <div className="shoe"> {product.name}</div>
                        <div className="quant">{product.quantity}</div>
                        <div className="priz">{product.price*product.quantity}</div>
                    </div>
                    )
                })
            }
            
        </div>
    )
}
export default CartDetails;
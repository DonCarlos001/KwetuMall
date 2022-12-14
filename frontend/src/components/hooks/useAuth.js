import {useState,useEffect} from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Auth= (route, token)=>{
    const navigate= useNavigate()
    const [auth, setAuth]=useState()
    const [cartCount, setCartCount]=useState()

    useEffect(()=>{
        Axios.get('http://localhost:4001/auth/isUserAuth', {
            headers:{
                'x-access-token':localStorage.getItem(token)
            }
        }).then((data)=>{
            if (data.data==="User is authenticated"){
                console.log('navigate to another page')
                navigate(route)
                setAuth(true)
            }else{
                console.log('User not authenticated, stay on the login page')
            }
        })
    },[token, route, navigate])
    useEffect(()=>{
        let userId= localStorage.getItem('userId')
        Axios.get(`http://localhost:4001/user/getcart/${userId}`)
        .then((data)=>{
            setCartCount(data.data)
        })
        // console.log(cartCount)
    },[auth])
    return [cartCount];
}
export default Auth;
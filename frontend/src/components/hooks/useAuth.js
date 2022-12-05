import {useEffect} from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Auth= (route, token)=>{
    const navigate= useNavigate()

    useEffect(()=>{
        Axios.get('http://localhost:4001/auth/isUserAuth', {
            headers:{
                'x-access-token':localStorage.getItem(token)
            }
        }).then((data)=>{
            if (data.data==="User is authenticated"){
                console.log('navigate to another page')
                // navigate(route)
            }else{
                console.log('User not authenticated, stay on the login page')
            }
        })
    },[token, route, navigate])
    return [];
}
export default Auth;
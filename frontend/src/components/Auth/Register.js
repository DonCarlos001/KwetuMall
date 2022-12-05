import Axios from 'axios';
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Register=()=>{
    const navigate= useNavigate();
    const [postData, setPostData]= useState({name:'', email:'', phoneNumber:'', password:''})
    const handleSubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:4001/auth/register', postData)
        .then(()=>{
            setPostData({name:'', email:'', phoneNumber:'', password:''})
            navigate('/Login')
        })
    }
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Name"
                        onChange={(e)=>setPostData({...postData, name: e.target.value})}
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="text" 
                        class="form-control"
                        placeholder="Phone number"
                        onChange={(e)=>setPostData({...postData, phoneNumber: e.target.value})}
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="email" 
                        class="form-control" 
                        placeholder="name@example.com"
                        onChange={(e)=>setPostData({...postData, email: e.target.value})}
                    />
                </div>
                <div class="mb-3">
                    <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password"
                        onChange={(e)=>setPostData({...postData, password: e.target.value})}
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
        </div> 

    )
}
export default Register;
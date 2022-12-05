import React, {useState} from 'react';
import Axios from 'axios'
import useAuth  from "../../hooks/useAuth"

const Login= ()=>{
    const [postData, setPostData]= useState({email:'', password:''})
    const [response, setResponse]= useState('')
    useAuth('/dashboard', 'adminToken')

    const handleSubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:4001/auth/login/admin', postData)
        .then((data)=>{
            if(data.data.auth===false){
                setResponse(data.data.message)
            }else{
                // navigate('/register')
                setResponse('')
                localStorage.setItem('adminToken', data.data.token)
                console.log(data.data.auth)
            }
         })
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input 
                        type="email" 
                        class="form-control" 
                        placeholder="Email"
                        onChange={(e)=>setPostData({...postData, email: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    <input 
                        type="password" 
                        class="form-control" 
                        placeholder="Password"
                        onChange={(e)=>setPostData({...postData, password: e.target.value})}
                    />
                </div>
                {response ?<p>{response}</p>: null} 
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}
export default Login;
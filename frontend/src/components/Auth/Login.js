import React,{useState} from 'react'
import Axios from 'axios'
import useAuth  from "../hooks/useAuth"

const Login=()=>{
    const [postData, setPostData]= useState({email:'', password:''})
    const [response, setResponse]= useState('')
    useAuth('/', 'token')

    const handleSubmit= (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:4001/auth/login', postData)
        .then((data)=>{
            if(data.data.auth===false){
                setResponse(data.data.message)
            }else{
                // navigate('/register')
                setResponse('')
                localStorage.setItem('token', data.data.token)
                localStorage.setItem('userId', data.data.result._id)
                console.log(data.data.auth)
            }
         })
    }
    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <input 
                        type="email" 
                        class="form-control" 
                        placeholder="Email"
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
                {response ?<p>{response}</p>: null}
                <button className="btn">Submit</button>
            </form>
        </div> 
    )
}
export default Login;
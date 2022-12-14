import React,{useState} from 'react';
import Axios from'axios'

const GetDetails =() =>{
    const [postData, setPostData]= useState({name:'',yearofbirth:''});
    let getData= ()=>{
        console.log(postData)
    }
    const onSubmitData= (e)=>{
        e.preventDefault();
        Axios.post(`http://localhost:4001/getdetails`,postData)
        .then(res=> console.log(res.data))
        .catch(erroe=>{console.log(erroe.response.data)})
    }
    return(
        <div className= "product form">
            <form onSubmit={onSubmitData}>
                <div className= "mb-3">
                    <label className= "form-label">Name</label>
                    <input placeholder= "add product name" className= "form-control"onChange={(e)=>setPostData({...postData, name: e.target.value})}/>
                </div>
                <div className="mb-3">
                    <label className= "form-label">Year of Birth</label>
                    <textarea className= "form-control"placeholder= "Body"onChange={(e)=>setPostData({...postData, yearofbirth: e.target.value})}></textarea>
                </div>
                <button onClick={getData} className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default GetDetails

import React,{useState} from 'react';
// import FileBase from 'react-file-base64';
import Axios from'axios'
import {useForm} from 'react-hook-form'
import"../../../styles/addproduct.css"
import Dashboard from '../Dashboard'
import { useNavigate } from "react-router-dom";


const Create =() =>{
    const {register, handleSubmit, formState:{errors}}=useForm();
    const [postData, setPostData]= useState({name:'',description:'',category:'',mainImage:'', image:'',price:''});
    const [postImages, setPostImages]= useState([])
    let imgArr=[];
    const saveFile=(e)=>{
        setPostData({...postData, mainImage:e.target.files[0]});
        console.log(postData.mainImage)
    }

    const saveFiles=(e)=>{
        let images= e.target.files
        for (let i=0; i< images.length; i++){
            imgArr.push(images[i])
        }
        setPostImages(imgArr)
        console.log(imgArr)
    }
    let getData= ()=>{
        console.log(postData)
    }
    const navigate= useNavigate();
    const onSubmitData= (e)=>{
        // e.preventDefault();
        let formData=new FormData();
        formData.append('name', postData.name)
        formData.append('description', postData.description)
        formData.append('category', postData.category)
        formData.append('mainImage', postData.mainImage)
        formData.append('price', postData.price)
        postImages.forEach((img)=>{
            formData.append('postImages', img )
        })
        // Axios.post('http://localhost:4001/createaproduct', formData)
        // .then(res=>console.log(res.data))

        console.log('form submitted')
        // console.log(postImages)
        Axios.post(`http://localhost:4001/createaproduct`,formData)
        .then(res=> {
            console.log('response received')
            console.log(res.data)
        })
        .catch(errors=>{console.log(errors.response)})
    }
    
    return(
        <div>
            <Dashboard />
            <div className= "productform">
                <h3> Add product</h3>
                    <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className= "mb-3">
                        <label className= "form-label">Name</label>
                        <input 
                            {...register("name", {required:true, maxLength:20})}
                            placeholder= "add product name" 
                            className= "form-control"
                            onChange={(e)=>setPostData({...postData, name: e.target.value})}
                        />
                        {errors.name?.type==='required' &&<p role="alert" className="errormsg">Please add the product name</p>}
                        {errors.name?.type==='maxLength' &&<p role="alert" className="errormsg">Max length shoulb be below 20 characters</p>}
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Description</label>
                        <textarea
                            {...register("description", {required:true, maxLength:100})}
                            className= "form-control"
                            placeholder= "Body"
                            onChange={(e)=>setPostData({...postData, description: e.target.value})}>
                        </textarea>
                        {errors.description?.type==='required' &&<p role="alert" className="errormsg">Please add the product description</p>}
                        {errors.description?.type==='maxLength' &&<p role="alert" className="errormsg">Max length shoulb be below 100 characters</p>}
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Main-image</label>
                        <input type="file" onChange={saveFile} />
                        
                        {/* <FileBase
                            
                            type= "file" 
                            multiple={false} 
                            onDone={({base64}) => setPostData ({...postData, mainImage: base64})}
                        /> */}
                        {/* {...register("MainImage", {required:true})} */}
                    {/* {errors.MainImage?.type==='required' &&<p ro="alert" className="errormsg">Please add the product Main image</p>} */}

                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Images</label>
                        <input type="file" multiple onChange={saveFiles} />
                    </div>
                    <div className= "mb-3">
                        <label className="form=label">Category</label>
                        <input
                            {...register("category", {required:true})}
                            className="form-control"
                            list="datalistOptions"
                            id="categoryDataList"
                            placeholder="Type to search a category..." 
                            onChange={(e)=>setPostData({...postData, category: e.target.value})}
                        />
                        {errors.category?.type==='required' &&<p role="alert" className="errormsg">Please add the product category</p>}

                        <datalist id= "datalistOptions">
                            <option value= "Gaming"/>
                            <option value= "Furnitures"/>
                            <option value="Shoes"/>
                            <option value= "Sports"/>
                            <option value= "Electronics"/>
                            <option value="Clothes"/>
                            <option value="Sports"/>
                            <option value="Foods"/>
                        </datalist>
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Price</label>
                        <input
                            {...register("price", {required:true, pattern:/^[0-9]+$/i})}
                            placeholder= "Add product price"
                            className="form-control"
                            onChange={(e)=>setPostData({...postData, price: e.target.value})}
                        />
                        {errors.price?.type==='required' &&<p role="alert" className="errormsg">Please add the product price</p>}
                        {errors.price?.type==='pattern' &&<p role="alert" className="errormsg">Should be a number</p>}

                    </div>
                     <button 
                     // onClick={()=>{navigate(`/producthome`)}} 
                     
                    className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Create;
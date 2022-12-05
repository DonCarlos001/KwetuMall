import React,{useState, useEffect} from 'react';
import FileBase from 'react-file-base64';
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
import ExerciseHome from './exerciseHome';


const Exercisecreate =({formData, addPostData, callHandleSubmit, addName}) =>{
    const navigate = useNavigate();
    // const [currentId, setCurrentId] = useState('')
    const {register, handleSubmit, formState:{errors}}=useForm();
    // const [postData, setPostData]= useState({name:'',description:'',category:'',mainImage:'',price:''});
    let getData= ()=>{
        // console.log(postData)
    }
    
    console.log(formData)
       

    return(
        <div>
            <div className= "productform">
                <h3> Add product</h3>
                    <form onSubmit={callHandleSubmit}>
                    <div className= "mb-3">
                        <label className= "form-label">Name</label>
                        <input 
                            {...register("name", {required:true, maxLength:20})}
                            placeholder= "add product name" 
                            className= "form-control"
                            value={formData.name}
                            onChange={(e)=>addPostData(e.target.value, 'name')}
                            // {...postData, name: e.target.value}
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
                            value={formData.description}
                            onChange={(e)=>addPostData(e.target.value, 'description')}
                            // onChange={(e)=>setPostData({...postData, description: e.target.value})}
                            >
                        </textarea>
                        {errors.description?.type==='required' &&<p role="alert" className="errormsg">Please add the product description</p>}
                        {errors.description?.type==='maxLength' &&<p role="alert" className="errormsg">Max length shoulb be below 100 characters</p>}
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Main-image</label>
                        <FileBase
                            
                            type= "file" 
                            multiple={false} 
                            onDone={({base64}) =>addPostData(base64, 'mainImage')}
                            // onDone={({base64}) => setPostData ({...postData, mainImage: base64})}
                        />
                        {/* {...register("MainImage", {required:true})} */}
                    {/* {errors.MainImage?.type==='required' &&<p ro="alert" className="errormsg">Please add the product Main image</p>} */}

                    </div>
                    <div className= "mb-3">
                        <label className="form=label">Category</label>
                        <input
                            {...register("category", {required:true})}
                            className="form-control"
                            list="datalistOptions"
                            id="categoryDataList"
                            placeholder="Type to search a category..."
                            value={formData.category}
                            onChange={(e)=>addPostData(e.target.value, 'category')} 
                            // onChange={(e)=>setPostData({...postData, category: e.target.value})}
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
                            value={formData.price}
                            onChange={(e)=>addPostData(e.target.value, 'price')}
                            // onChange={(e)=>setPostData({...postData, price: e.target.value})}
                        />
                        {errors.price?.type==='required' &&<p role="alert" className="errormsg">Please add the product price</p>}
                        {errors.price?.type==='pattern' &&<p role="alert" className="errormsg">Should be a number</p>}

                    </div>
                     {/* {
                        allProduct.map((postData)=>{
                            return(
                                <ExerciseHome
                                    // prop={postData}
                                    // onCallUpdate={(id)=>{setCurrentId(id)}}
                                    />
                            )
                        })
                    }  */}
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Exercisecreate;
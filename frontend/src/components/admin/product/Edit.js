import React,{useEffect, useState} from 'react'
import Dashboard from '../Dashboard'
import {useForm} from 'react-hook-form'
import FileBase from 'react-file-base64';
import {useParams} from 'react-router-dom'
import Axios from'axios';

const Edit=()=>{
    const {id}=useParams();
    console.log('we got this id:'+ id)

    
    const [product , setProduct] = useState({
        name:'loading...',
        description:'loading...',
        mainImage:'loading...',
        category:'loading...',
        price:'loading...',
    })
    const {register, handleSubmit, formState:{errors}}=useForm({
        defaultValues: product,
    });
    useEffect(()=>{
        Axios.get(`http://localhost:4001/getproduct/${id}`)
        .then((data)=>{
            console.log('our route gave us this data:')
            console.log(data.data[0].price)
            setProduct({
                name:data.data[0].name,
                description:data.data[0].description,
                // mainImage:data.data[0].main_image,
                mainImage: '',
                category:data.data[0].category,
                price:data.data[0].price,
            })
        })
    },[id])
    let getData= ()=>{
        console.log(product)
    }
    const onSubmitData= ()=>{
        // e.preventDefault();
        // console.log('form submitted')
        Axios.post(`http://localhost:4001/editproduct/${id}`, product)
        .then((data)=>{
            console.log(data)
        })
        // .catch(errors=>{console.log(errors.response.data)})
    }
    return(
        <div>
            <Dashboard />
            <div className="cont">
                <h2>Edit Product</h2>
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className= "mb-3">
                        <label className= "form-label">Name</label>
                        <input 
                            {...register("name", {required:true, maxLength:20})}
                            value = {product.name}
                            placeholder= "add product name" 
                            className= "form-control"
                            onChange={(e)=>setProduct({...product, name: e.target.value})}
                        />
                        {errors.name?.type==='required' &&<p role="alert" className="errormsg">Please add the product name</p>}
                        {errors.name?.type==='maxLength' &&<p role="alert" className="errormsg">Max length shoulb be below 20 characters</p>}
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Description</label>
                        <textarea
                            {...register("description", {required:true, maxLength:100})}
                            value={product.description}
                            className= "form-control"
                            placeholder= "Body"
                            onChange={(e)=>setProduct({...product, description: e.target.value})}>
                        </textarea>
                        {errors.description?.type==='required' &&<p role="alert" className="errormsg">Please add the product description</p>}
                        {errors.description?.type==='maxLength' &&<p role="alert" className="errormsg">Max length shoulb be below 100 characters</p>}
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Main-image</label>
                        <FileBase
                            
                            type= "file" 
                            multiple={false} 
                            onDone={({base64}) => setProduct ({...product, mainImage: base64})}
                        />
                        {/* {...register("MainImage", {required:true})} */}
                    {/* {errors.MainImage?.type==='required' &&<p ro="alert" className="errormsg">Please add the product Main image</p>} */}

                    </div>
                    <div className= "mb-3">
                        <label className="form=label">Category</label>
                        <input
                            {...register("category", {required:true})}
                            value={product.cregory}
                            className="form-control"
                            list="datalistOptions"
                            id="categoryDataList"
                            placeholder="Type to search a category..." 
                            onChange={(e)=>setProduct({...product, category: e.target.value})}
                        />
                        {errors.category?.type==='required' &&<p role="alert" className="errormsg">Please add the product category</p>}

                        <datalist id= "datalistOptions">
                            <option value= "Gaming"/>
                            <option value= "Furnitures"/>
                            <option value="Shoes"/>
                            <option value= "Sports"/>
                        <option value= "Electronics"/>
                        </datalist>
                    </div>
                    <div className="mb-3">
                        <label className= "form-label">Price</label>
                        <input
                            {...register("price", {required:true, pattern:/^[0-9]+$/i})}
                            value={product.price}
                            placeholder= "Add product price"
                            className="form-control"
                            onChange={(e)=>setProduct({...product, price: e.target.value})}
                        />
                        {errors.price?.type==='required' &&<p role="alert" className="errormsg">Please add the product price</p>}
                        {errors.price?.type==='pattern' &&<p role="alert" className="errormsg">Should be a number</p>}

                    </div>
                    <button onClick={getData} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Edit;
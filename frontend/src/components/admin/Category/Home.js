import React, {useEffect, useState}from 'react'
import CategoryComponent from './CategoryComponent'
import Dashboard from '../Dashboard'
import Axios from "axios"

const Home=()=>{
    const [currentId, setCurrentId] = useState('')
    const [category, setCategory]= useState('')
    const [allCategories, setAllCategories]= useState([])
    // get caregories
    useEffect(()=>{
        Axios.get('http://localhost:4001/category')
        // .then((data)=> console.log(data))
        .then((data)=>{setAllCategories(data.data)})
        .then(()=>console.log(allCategories))
    },[])

    useEffect(()=>{
        console.log('Fetching 1 doc')
        if(currentId){
            Axios.get(`http://localhost:4001/category/${currentId}`)
            .then((data)=>{setCategory(data.data[0].name)}) 
        }
    },[currentId]);
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(category)

        if (currentId){
            Axios.post(`http://localhost:4001/category/update/${currentId}`, {name:category})
            // .then((data)=>{console.log(data)})
            //map over data
            //check for id
            // if same we return what we are getting from backend
            .then(({data})=>{
                setAllCategories(allCategories.map(category=>{
                    // if(category._id===data._id){
                    //     return data;
                    // }else{
                    //     return category;
                    // }
                    return category._id===data._id?data:category;
                }))
            })
            .then (()=>{
                setCurrentId('');
                setCategory('');
            })
        }
        else{
            Axios.post('http://localhost:4001/category/create', {name:category})
            .then(({data})=>{setAllCategories([...allCategories,data])})
            .then(()=>setCategory(''))
        }
        // setAllCategories([...allCategories])
    }
    const deleteCategory=(id)=>{
        Axios.post('http://localhost:4001/category/delete', {_id: id})
        .then((res)=>{console.log(res)})
        .then(()=>{setAllCategories(allCategories.filter((item)=>item._id !== id))});
    }
    return(
        <div>
            <Dashboard />
            <div className="cont categories">
                <div className="row">
                    <div className="col-8">
                        <div className="row row-cols-1 row row-cols-md-3 g-4">
                            {
                                allCategories.map((category)=>{
                                    return(
                                        <CategoryComponent
                                         prop={category}
                                         onCallUpdate={(id)=>{setCurrentId(id)}}
                                         onCallDelete={(id)=>{deleteCategory(id)}}
                                         />
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="categoryForm">
                            <h3>Category</h3>
                            {/* Add category functionality */}
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        placeholder='Name'
                                        className='form-control'
                                        value={category}
                                        onChange={(e)=>setCategory(e.target.value)}
                                    />
                                    <p>{category}</p>
                                    <button>submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Home;
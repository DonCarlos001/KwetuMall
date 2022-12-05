import React,{useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import Axios from 'axios'


const ExerciseHome=({products,onCallUpdate})=>{
    const navigate = useNavigate();
    
    const deleteProduct=(productid)=>{
        Axios.post(`http://localhost:4001/deleteproduct`,{id:productid})
        .then((data)=>{console.log(data)})
    }
    
    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map(product=>{
                        return(
                            <tr>
                                <td ><img className="img" alt={product.name} src={product.main_image}/></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>
                                    <EditIcon
                                    onClick={()=> onCallUpdate(product._id)}
                                    />
                                    <DeleteIcon
                                     onClick={()=>{deleteProduct(product._id)}}
                                     />
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
    </div>
    )
}
export default ExerciseHome;
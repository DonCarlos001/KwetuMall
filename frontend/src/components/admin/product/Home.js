import { useEffect, useState } from 'react'
import Dashboard from '../Dashboard'
import Axios from 'axios'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate = useNavigate();
    const [products, setProducts]=useState([]);
    const [quantity, setQuantity]= useState(0);
    console.log(quantity)

    useEffect( ()=>{
        const allProducts= async()=>{
            const response= await Axios ("http://localhost:4001/getproducts")
            setProducts(response.data)
            console.log(response.data)
        }
        allProducts();
    },[])
    console.log(products)

    const deleteProduct=(productid)=>{
        Axios.post(`http://localhost:4001/deleteproduct`,{id:productid})
        .then((data)=>{console.log(data)})
    }
    const addStock=(id)=>{
        Axios.post(`http://localhost:4001/addstock/${id}`, {quantity:quantity})
        // .then((data)=>{console.log(data)})
        .then(({data})=>{
            
            return setProducts(products.map(product=>{
                return product._id===data._id ? data : product;
            }))
        })
    }
    let path='http://localhost:4001/'

    return(
    <div>
        <Dashboard />
        <div className="cont">
            <div className="blue">
                <button className="adp"
                onClick={()=>{navigate('/addproduct')}}
                >Add Products</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Add Stock</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map(product=>{
                        return(
                            <tr>
                                <td ><img className="img" alt={product.name} src={path+product.main_image}/></td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>
                                    <input type="number"
                                     onChange={(e)=>{setQuantity(e.target.value)}}
                                    />
                                    <button className="btn" onClick={()=>{addStock(product._id)}}>Add</button>
                                </td>
                                <td>
                                    <EditIcon
                                    onClick={()=>{navigate(`/editproduct/${product._id}`)}}
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
    </div>
    )
}
export default Home;

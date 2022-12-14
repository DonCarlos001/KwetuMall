import React,{useState, useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "../styles/home.css";
import Product from "./Product"
import Axios from 'axios'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [products, setProducts]=useState([]);
    const navigate= useNavigate();

    useEffect( ()=>{
        const allProducts= async()=>{
            const response= await Axios ("http://localhost:4001/getproducts")
            setProducts(response.data)
        }
        allProducts();
    },[])
    console.log(products)

    return (
        <div className= "player">
            <div className= "nav">
                {/* <li className="co"><a href="/"><button className="log">Settings</button></a></li> */}
                <form className="fct">
                <input className= "formCnt"></input>
                <button className="srch"><SearchIcon/></button>
                </form>
                <div className="log">
                    <button className="atc">Add to cart</button>
                    <button className="reg" onClick={()=>{navigate(`/register`)}}>Register</button>
                    <button className="lo" onClick={()=>{navigate(`/login`)}}>Login</button>
                </div>
            </div>
            <div className="empty"></div>
            <div className= "row">
                <div className = "col-1">
                    <p className="tegory">CATEGORIES</p>
                   <button className="cat">Gaming</button><br/>
                   <button className="cat">Sports</button><br/>
                   <button className="cat">Shoes</button><br/>
                   <button className="cat">Cars</button><br/>
                   <button className="cat">Creamery</button><br/>
                   <button className="cat">Cars</button><br/>
                   <button className="cat">Electronics</button><br/>
                   <button className="cat">Foods</button><br/>
                   <button className="cat">Cosmetics</button><br/>
                   <button className="cat">Furnitures</button><br/>
                   <button className="cat">Health</button><br/>
                </div>
                <div className = "col-6">
                    <img alt = 'product' src = "images/CARS.LOGO.jpg" className="main_img"/>
                </div>
            </div>
            <div className = "product">
                <div className = "row row-cols-4">
                    {
                        products.map((val, key)=>{
                            console.log(products.map)
                            return(
                                <Product data={val}/>
                            )
                        })
                    } 
                </div>
            </div>
        </div>
    );
}
export default Home;
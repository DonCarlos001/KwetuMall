import React from "react"
import { useNavigate } from "react-router-dom";
import "../styles/product.css";

const Product= (props) =>{
    console.log('These are props')
    console.log(props.data.category)
    
    const navigate = useNavigate();
    const viewProductDetails= () =>{
        navigate( `/productdetails/${props.data._id}`)
    }
    let path='http://localhost:4001/'
    return (
        <div className = "cols product _card">
            <div className = "card">
                <img 
                src={path+props.data.main_image} 
                class = "card-img-top product_image"
                alt= "product" height= "150px"/>
                <div className= "card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.description}</p>
                    <div className = "text-center">
                        <button className= "btn" onClick={viewProductDetails} >View</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Product
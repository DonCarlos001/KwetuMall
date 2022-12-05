import React from 'react';
import"../styles/challenge1.css";
const Challenge1= () =>{
    return (
        <div className = "challenge1">
            <div className= "row">
                <div className = "col-6">
                <img alt = 'product' src = "images/image.jpg" className="productdetailimage"/>
                </div>
                <div className = "col-6">
                    <h5> PERFUME</h5>
                    <p>Gabrielle Essence Eau De Parfum</p>
                    <div className= "description">
                        <p> A floral, solar and voluptuous interpretation
                            composed by olive,polge,perfumer-creator 
                            for the house of CHANEL.
                        </p>
                            <p className="price">KSHS 14,999</p>
                            <p className= "oldPrice">KSHS 16,999</p>
                            <button className= "btn-2">ADD TO CHART</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
  
export default Challenge1;
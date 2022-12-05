import React from 'react';
import"../styles/challenge2.css";

const Challenge2=()=>{
    return(
        <div className="container">
            <ul className="List">
                 <li className="title"><a href="/">Snap</a></li>
                <li className="title" ><a href="/">Features</a></li>
                <li className="title"><a href="/">Company</a></li>
                <li className="title" ><a href="/">Carrer</a></li>
                <li className="title"><a href="/">About</a></li>
                 <li className="title"><a href="/">Login</a></li>
                <li className="title"><a href="/">Register</a></li>
            </ul>
        
            <div className= "challenge2">
                <div className= "row">
                    <div className= "col-6">
                         <h1 className= "h">Make Remote Work</h1>
                         <p className="p">Get your team in sync, nomatter your location.
                         Streamline process, create team rituals, and  watch productivity soar.</p>
                        <button className="btn">Learn more</button>
                    </div>
                        <div className= "col-6">
                             <img alt = 'product' src = "images/image-hero.png" className="productdetailimage"/>
                        </div>    
                </div>

            </div>
        
        </div>
        
    )
}   
export default Challenge2;
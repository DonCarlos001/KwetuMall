import React,{useState} from 'react'
import"../styles/Toggle.css";

const Toggle=()=>{
    const[display, setDisplay]=useState('tag');
    let toggle=()=>{
        // setDisplay("display")
        // console.log("toggle")
        if(display ==="tag"){
        setDisplay("display")
        }
        else{setDisplay("tag")
        } 
    }
   
    return(
    <div>
        <div className={display}></div>
        <button onClick={toggle}>Switch</button>
        </div>
    )
}
export default Toggle;
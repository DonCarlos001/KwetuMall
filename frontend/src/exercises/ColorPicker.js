import React, {useState}  from 'react'
import"../styles/ColorPicker.css";

const ColorPicker=()=>{
    const[color, setColor]=useState("black")
    let changeColor1=()=>{
        setColor("red")
    }
    let changeColor2=()=>{
        setColor("orange")
    }
    let changeColor3=()=>{
        setColor("yellow")
    }
    let changeColor4=()=>{
        setColor("green")
    }
    let changeColor5=()=>{
        setColor("blue")
    }
    let changeColor6=()=>{
        setColor("indigo")
    }
    let changeColor7=()=>{
        setColor("violet")
    }

    return(
        <div>
            <div style={{height: "200px", width:"400px", backgroundColor:color}}></div>
            <button onClick={changeColor1} className="button1"></button>
            <button onClick={changeColor2} className="button2"></button>
            <button onClick={changeColor3} className="button3"></button>
            <button onClick={changeColor4} className="button4"></button>
            <div>
                <button onClick={changeColor5} className="button5"></button>
                <button onClick={changeColor6} className="button6"></button>
                <button onClick={changeColor7} className="button7"></button>
            </div>
        </div>
    )
}
export default ColorPicker;
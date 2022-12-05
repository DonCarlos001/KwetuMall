import React,{useState} from "react";
const  Counter = () =>{
    const[counter, setCounter]= useState(0);
    let addCounter= ()=>{
        setCounter(counter + 1);
    };
    let minusCounter=()=>{
        setCounter(counter - 1);
    };
    return(
        <div>
            <p>{counter}</p>
            <button onClick={addCounter}>Add</button>;
            <button onClick= {minusCounter}>Minus</button>;
        </div>
    );
    };
    export default Counter;
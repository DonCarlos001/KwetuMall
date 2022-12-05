import React from 'react'
import Hello from "./Hello.js";

const Greetings= ()=>{
    const name= "Carlos";
    const age = 30;
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name= 'George' />
            <Hello name = 'Daisy' />
            <Hello name= {name}age={age}/>
        </div>
    );
}
export default Greetings
import React, {useState} from 'react'
import Button from './Button.js';

const CallbackCounter=()=>{
    const[counter, setCounter]= useState(0);
    let addCounter= ()=>{
        setCounter(counter + 1);
    };
    let minusCounter=()=>{
        setCounter(counter - 1);
    };
    return(
        <div>
            <Button 
             onCallAdd={addCounter}
             onCallMinus={minusCounter}

            />
            <div>
             <p>
                {counter}
                 
                </p>
            </div>
        </div>
    )
}
export default CallbackCounter;
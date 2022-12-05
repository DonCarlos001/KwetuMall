import React from 'react'
const  Button = ({onCallAdd,onCallMinus}) =>{
    return(
        <div>
            <button onClick={()=>onCallAdd()}>Add</button>;
            <button onClick={()=>onCallMinus()}>Minus</button>;
        </div>
    );
};
export default Button;
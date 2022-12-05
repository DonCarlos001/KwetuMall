import React from 'react'

const Data =(props)=>{
    console.log(props.Data[0])
    let obj= props.Data[0]
    return(
        <div>
            <h1>Hello {obj.name}</h1>
            <p> How are you this {obj.day}</p>
        </div>
    )
}
// const GreetingProp=(props)=>{
//     console.log(props)
//     return(
//         <div>
//             <h1>Hello, {props.name}</h1>
//             <p>How are you this {props.day}</p>
//         </div>
//     )
// }
export default Data;
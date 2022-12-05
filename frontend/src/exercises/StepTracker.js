import React,{useState} from "react";

const StepTracker=()=>{
    const [counter, setCounter]= useState(0);
    console.log(counter)
    let increase= ()=>{
      setCounter(count => count + 1);
    }
    return(
        <div>
            <button className="cnt_btn-1"onClick={increase}>+</button>
            <p> You have walked {counter} steps today</p>
        </div>
    )

}
export default StepTracker;
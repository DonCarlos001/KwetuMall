import React from 'react';
import { format } from 'date-fns';
import"../styles/passingprops.css";
import GreetingProp from './GreetingProp'


const PassingProps = () =>{
    // let exercise = {
    //     location: "Juja",
    //     Weather: "Sunny",
    //     Time: "10:00AM",
    //     date:format(new Date(), 'dd/MM/yyyy'),
    //     Humidity: "Medium",
        
    // }
    // console.log(new Date())
    const Data=[{name:"Carlos", day:"Monday"}]
    console.log(Data)
     return (
     <div className= 'row'>

        <GreetingProp Data={Data}/>
        {/* <GreetingProp name="Sarah" day="Monday"/>
        <GreetingProp name="Pelin" day="Tuesday"/> */}
          {/* <div className = "col-6">
              <p>Location</p>
                <p>Weather</p>
              <p>Time</p>
               <p>Date </p>
              <p>Humidity</p>
          </div> */}
            {/* <div className= "col-6"> 
                <p>{exercise.location}</p>
                <p>{exercise.Weather}</p> 
                 <p>Today's date is{exercise.Time}</p>
                <p>{exercise.date}</p>
                <p>{exercise.Humidity}</p>  */}

            {/* </div> */}


        </div>  

    );
    }
export default PassingProps;
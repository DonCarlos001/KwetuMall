import React, {useState,useEffect} from 'react';
import  Axios  from 'axios';

const APIComponents=()=>{
    const [imageUrl, setImageUrl]=useState(null);
    // have a useEffect that runs on component mount
    // so that when the page is loaded you immedietely see a dog
    // style your image using react inline style

    useEffect(()=>{
        const image=async()=>{
         const response= await Axios('https://dog.ceo/api/breeds/image/random')
         setImageUrl(response.data)
        }
        image()
    },[])
       
        // .then((data)=>console.log(data))
        // })

        // useEffect( ()=>{
        //     const allProducts= async()=>{
        //         const response= await Axios ("http://localhost:4001/getproducts")
        //         setProducts(response.data)
        //     }
        //     allProducts();
        // },[])
    const getImage=()=>{
        Axios.get('https://dog.ceo/api/breeds/image/random')
    .then (({data})=>setImageUrl(data.message))
    }
    return(
        <div style={styles.dog}>
            {imageUrl?<img src={imageUrl} alt="dog" /> : null}
            <button onClick={getImage}> Get Image</button>
        </div>
    )
}
const styles={
    dog:{
        width:'400px',
        height:'400px',

    }
}
export default APIComponents;
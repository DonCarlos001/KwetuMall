// import React,{useEffect, useState} from 'react';
// import Axios from'axios';
// import Dashboard from '../Dashboard'
// import {useParams} from 'react-router-dom'

// const Delete=()=>{
//     const {id}=useParams();
//     console.log('we got this id:'+ id)

//     const [product , setProduct] = useState({
//         id:'loading...',
//     })
//     useEffect(()=>{
//         Axios.get(`http://localhost:4000/getproduct/${id}`)
//         .then((data)=>{
//             console.log('our route gave us this data:')
//             console.log(data.data[0].id)
//             setProduct({
//                 id:data.data[0].id,
//             })
//         })
//         },[id])
//         let getData= ()=>{
//             console.log(product)
//         }
//         const onSubmitData= ()=>{
//             // e.preventDefault();
//             // console.log('form submitted')
//             Axios.post(`http://localhost:4000/deleteproduct/${id}`, product)
//             .then((data)=>{
//                 console.log(data)
//             })
//             // .catch(errors=>{console.log(errors.response.data)})
//         }
//     return(
//         <div>
//             <Dashboard />
//             <div className="cont">
//                 <h1>Delete Product</h1>
//                 <form onSubmit={onSubmitData}>
//                 <div className= "mb-3">
//                         <label className= "form-label">Id</label>
//                         <input 
//                             value = {product.id}
//                         />
//                     </div>
//                     <button onClick={getData} className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default Delete;
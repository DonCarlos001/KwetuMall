import { useEffect, useState } from 'react'
import Axios from 'axios'
import Dashboard from '../Dashboard';
import ExerciseHome from './exerciseHome';
import Exercisecreate from './exercisecreate';



const Productexercise=()=>{
    const [currentId, setCurrentId] = useState('')
    // const [products, setProducts]=useState([]);
    const [postData, setPostData]= useState({name:'',description:'',category:'',mainImage:'',price:''});
    const [products, setProducts]=useState([]);
    const [allProduct, setAllProduct]= useState([])

    useEffect( ()=>{
        const allProducts= async()=>{
            const response= await Axios ("http://localhost:4001/getproducts")
            setProducts(response.data)
            // console.log(response.data)
        }
        allProducts();
    })
    useEffect(()=>{
        console.log('Fetching 1 doc')
        if(currentId){
            Axios.get(`http://localhost:4001/${currentId}`)
            .then((data)=>{ 
                console.log(data.data[0].name)
                setPostData({
                    name:data.data[0].name,
                    description:data.data[0].description,
                    // mainImage:data.data[0].main_image,
                    mainImage: '',
                    category:data.data[0].category,
                    price:data.data[0].price,
                })
            }) 
        }
    },[currentId]);

    const onSubmitData= (e)=>{
        // e.preventDefault();
        console.log('form submitted')
        if (currentId){
            Axios.post(`http://localhost:4001/update/${currentId}`, postData)
            
            .then(({data})=>{
                setAllProduct(allProduct.map(postData=>{
                    return postData._id===data._id?data:postData;
                }))
            })
            .then (()=>{
                setCurrentId('');
                setPostData('');
            })
        }
        else{
            Axios.post(`http://localhost:4001/createaproduct`,postData)
            .then(res=> {
                console.log('response received')
                console.log(res.data)
            })
            .catch(errors=>{console.log(errors.response)})
            .then (()=>{
                setPostData({name:'',description:'',category:'',mainImage:'',price:''});
            })
        }
    }

    // useEffect( ()=>{
    //     const allProducts= async()=>{
    //         const response= await Axios ("http://localhost:4001/getproducts")
    //         setProducts(response.data)
    //         console.log(response.data)
    //     }
    //     allProducts();
    //     Axios.post(`http://localhost:4001/createaproduct`,postData)
    //     .then(res=> {
    //         console.log('response received')
    //         console.log(res.data)
    //     })
    //     .catch(errors=>{console.log(errors.response.data)})
    // },[])
    // console.log(products)

    


    return(
        <div>
            <Dashboard />
            <div className="cont">
                <div className="row">
                    <div className="col-8">
                        <ExerciseHome
                            products={products}
                            onCallUpdate={(id)=>{setCurrentId(id)}} 
                        />
                    </div>
                    <div className="col-4">
                        <Exercisecreate
                            formData= {postData}
                            addPostData={(value, stateKey)=>{
                                console.log(value)
                                
                                setPostData( {...postData, [stateKey]: value})
                                // console.log(stateKey)
                            }}
                            callHandleSubmit={onSubmitData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Productexercise;
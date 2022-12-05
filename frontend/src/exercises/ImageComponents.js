import Axios from 'axios'
import React, {useState} from 'react'

const ImageComponents=()=>{
    const [postImage, setPostImage]= useState('')
    const [text, setText]= useState('')
    let imgArr=[];
    const saveFile=(e)=>{
        setPostImage(e.target.files[0]);
        console.log(e.target.files[0])
    }
    const saveFiles=(e)=>{
        
        let images= e.target.files
        for (let i=0; i< images.length; i++){
            imgArr.push(images[i])
        }
        console.log(imgArr)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let formData=new FormData();
        formData.append('postImage', postImage)
        imgArr.map((img)=>{
            formData.append('postImages', img )
            return img;
        })
        formData.append('text', text)

        Axios.post('http://localhost:4001/exercise/addimage', formData)
        .then((data)=>console.log(data))
    }
    let path='http://localhost:4001/4beeb22f72bf996dcebc048f62fb12f4.jpeg'
    let image='http://localhost:4001/4beeb22f72bf996dcebc048f62fb12f4.jpeg'
    let shoe="http://localhost:4001/c6d0bb11be373f1f3c3838176d8facd2.jpeg"
    return(
        <div>
            <h1>ImageComponents</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e)=> setText(e.target.value)} />
                <input type="file" onChange={saveFile} />
                <input type="file" multiple onChange={saveFiles}/>
                <button type="submit"> Submit</button>
            </form>
            <img alt='static'src={path}  width="100vw"/>
            <img alt='static'src={image} width="100vw"/>
            <img alt='static'src={shoe} width="100vw"/>
        </div>
    )
}
export default ImageComponents;
import React, {useState} from "react"
import"../styles/Challenge3.css";

const Challenge3=()=>{
  const [counter, setCounter]= useState(0);
  console.log(counter)
  let increase= ()=>{
    setCounter(count => count + 1);
  }
  let decrease= ()=>{
      setCounter(count => count - 1);
  }
  const[image, setImage]=useState("images/image-product-1.jpg");
  let mainImage1=()=>{
    setImage("images/image-product-1-thumbnail.jpg");
  }
  let mainImage2=()=>{
    setImage("images/image-product-2-thumbnail.jpg")
  }
  let mainImage3=()=>{
    setImage("images/image-product-3-thumbnail.jpg")
  }
  let mainImage4=()=>{
    setImage("images/image-product-4-thumbnail.jpg")
  }
  return (
    <div className="row">
      <ul className= "navigation" >
        <li className="coll"><a href="/"><img alt= "title" src="images/logo.svg"/></a></li>
        <li className="coll" ><a href="/">Collection</a></li>
        <li className="coll"><a href="/">Men</a></li>
        <li className="coll"><a href="">Women</a></li>
        <li className="coll"><a href="/">About</a></li>
        <li className="coll"><a href="/">Contacts</a></li>
        <li className="profile"><a href="/"><img alt= "title" src="images/icon-cart.svg"/></a></li>
        <li><a href="/"><img className="avatar" alt= "title" src="images/image-avatar.png"/></a></li>
      </ul>
      <div className= "col-6">
        <img alt = 'product' src ={image} className="product_image"/>
          <button className="man"><img onClick={mainImage1} className="small_images" alt="title" src = "images/image-product-1-thumbnail.jpg"></img></button>
          <button className="man"><img onClick={mainImage2} className="small_images" alt="title" src = "images/image-product-2-thumbnail.jpg"></img></button>
          <button className="man"><img onClick={mainImage3}className="small_images" alt="title" src = "images/image-product-3-thumbnail.jpg"></img></button>
          <button className="man"><img onClick={mainImage4} className="small_images" alt="title" src = "images/image-product-4-thumbnail.jpg"></img></button>
      </div>
      <div className= "col-6">
        <p className="product_name">SNEAKER COMPANY</p>
        <p className="product_text">Fall Limited Edition Sneakers</p>
        <p className="product_desc">These low-profile sneakers are your erfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="price">
          <p>$125.00</p>
          <button className="discount">50%</button>
        </div>
        <p className="original_price">$250.00</p>
        <div className ="counter">
          <button className="cnt_btn-1"onClick={increase}>+</button>
          <p className="zero">{counter}</p>
          <button className="cnt_btn-2"onClick={decrease}>-</button>
          <button className= "cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Challenge3;
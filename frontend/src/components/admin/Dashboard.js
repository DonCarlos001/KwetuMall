import React from 'react'
import "../../styles/Dashboard.css"
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const navigate= useNavigate();
    return(
        <div className="dashboard">
            <div className="logo">
                <img src="images/image-avatar.png" alt="product" className="ava"></img>
            </div>
            <div className="goat">
                {/* <img className="rounded" alt ="profile"/> */}
                <button className="rounded">profile</button>
                <button className="lgt"><LogoutIcon/></button>
            </div>
            <div>
                <div className="pos">
                    <div className="space"></div>
                    <div className="win"></div>
                    <button className="b-1" onClick={()=>{navigate(`/producthome`)}}>PRODUCTS</button>
                    <div className="win"></div>
                    <button className="b-2" onClick={()=>{navigate(`/categories`)}}>CATEGORIES</button>
                    <div className="win"></div>
                    <button className="b-3" onClick={()=>{navigate(`/productexercise`)}}>PRODUCT EXERCISE</button>
                    <div className="win"></div>
                </div>
                {/* <div className="db">
                    <p className="dash">DASHBOARD</p> */}
                {/* </div> */}
            </div>
        </div>
    )
}
export default Dashboard;
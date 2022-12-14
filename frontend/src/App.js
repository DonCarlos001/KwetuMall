import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
// import MyComponent from "./exercises/MyComponent";
import ProductDetails from "./components/ProductDetails";
import Greetings from "./exercises/Greetings";
import PassingProps from "./exercises/PassingProps";
import Counter from "./exercises/Counter";
import KagCard from "./exercises/KagCard";
import CallbackCounter from "./exercises/callbackCounter";
import CreateProduct from "./components/admin/product/Create";
import Challenge from "./components/Challenge1";
import Challenge2 from "./components/Challenge2";
import Challenge3 from "./components/Challenge3";
import ColorPicker from "./exercises/ColorPicker";
import StepTracker from "./exercises/StepTracker";
import Toggle from "./exercises/Toggle";
import GetDetails from "./exercises/GetDetails";
import Dashboard from "./components/admin/Home";
import ProductHome from "./components/admin/product/Home"
import EditProduct from "./components/admin/product/Edit"
import Category from './components/admin/Category/Home'
import Productexercise from './components/admin/Productexercise/productexercise'
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AdminRegister from "./components/admin/auth/Register";
import AdminLogin from "./components/admin/auth/Login";
import Image from "./exercises/ImageComponents";
import CartDetails from './components/cartDetails'
import StyleComponent from './exercises/styleComponent'
import APIComponents from './exercises/APIComponents'
// import DeleteProduct from "./components/admin/product/Delete"

function App() {
   return (
    <Router>
       <div>
         <Routes>
          {/* User routes */}
          <Route exact path= "/"element= {<Home />}/>
          <Route exact path = "/productdetails/:id"element= {<ProductDetails/>}/>
          <Route exact path= "/register"element= {<Register />}/>
          <Route exact path= "/login"element= {<Login />}/>
          <Route exact path= "/cart"element= {<CartDetails />}/>

          {/* Admin routes */}
          <Route exact path = "/producthome" element= {<ProductHome/>}/>
          <Route exact path = "/dashboard" element= {<Dashboard/>}/>
          <Route exact path = "/addproduct" element= {<CreateProduct/>}/>
          <Route exact path = "editproduct/:id" element= {<EditProduct/>}/>
          <Route exact path="/categories" element={<Category/>}/>
          <Route exact path= "/admin/register"element= {<AdminRegister />}/>
          <Route exact path= "/admin/login"element= {<AdminLogin />}/>
          {/* <Route exact path = "deleteproduct/:id" element= {<DeleteProduct/>}/> */}

          {/* Exercise routes */}
          <Route exact path = "/getdetails" element= {<GetDetails/>}/>
          <Route exact path = "/colorpicker" element= {<ColorPicker/>}/>
          <Route exact path = "/greetings" element= {<Greetings/>}/>
          <Route exact path = "/passingprops" element= {<PassingProps/>}/>
          <Route exact path = "/counter" element = {<Counter/>}/>
          <Route exact path = "/kagcard" element = {<KagCard/>}/>
          <Route exact path= "/challenge1" element= {<Challenge/>}/>
          <Route exact path= "/challenge2" element= {<Challenge2/>}/>
          <Route exact path = "/challenge3" element= {<Challenge3/>}/>
          <Route exact path = "/steptracker" element= {<StepTracker/>}/>
          <Route exact path = "/toggle" element= {<Toggle/>}/>
          <Route exact path = "/callbackcounter" element= {<CallbackCounter/>}/>
          <Route exact path = "/productexercise" element= {<Productexercise/>}/>
          <Route exact path = "/image" element= {<Image/>}/>
          <Route exact path = "/stylecomponent" element= {<StyleComponent/>}/>
          <Route exact path = "/apicomponents" element= {<APIComponents/>}/>
        </Routes>
      </div>
     
    </Router>
 
 );
}

export default App;

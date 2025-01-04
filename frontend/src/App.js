import React, { useState } from "react";
import './FixNavAndFoot.css';
import './nav_style.css';
import {BrowserRouter ,Routes ,Route,Navigate} from "react-router-dom";

import Dashboard from "./dashboard";
import CoffeeDrinks from "./coffeeDrinks";
import SignupForm from "./Signup";
import { CartProvider } from './CartContext';
import Login from "./login_user";
import Users from "./users";
import RefreshHandler from "./RefreshHandler";
import Cart from "./cart";
import Confirm_order from "./Confirm_order";
import FinalPage from "./FinalPage";
import Payment from "./Payment";
import AutoTimer from "./Timing";
import Food from "./food/Food";
import Contact from "./Contact";
import About from "./About";




export default function App() {
const[IsAuthenticated,setIsAuthenticated] = useState(false);
const PrivateRoute =({element})=>{
  return IsAuthenticated?element:<Navigate to="/login"/>


} 




  return (

<>
  
<CartProvider>
     <BrowserRouter>
        <div className="app-container">
   
        
        <div className="content">
          <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
  <Routes>
      <Route path="/" element={<Navigate to="/signup"/>}/> 
      <Route path="/login" element={<Login/>}/>   
      <Route path="/signup" element={ <SignupForm/>}/>
      <Route path="/home" element={ <PrivateRoute element={<Dashboard title="Here2Order/Dashboard-Page" />} />}/>
      <Route path="/coffeeDrinks" element={<div className="coffee">
        <PrivateRoute element={<CoffeeDrinks title2="Here2Order/CoffeeAndDrinks" />} /> 
              
         </div>}/>
         <Route path="/user" element={<div className="user"><PrivateRoute element={ <Users/>} /></div>}/>
         <Route path="/cart" element={ <PrivateRoute element={ <Cart />} />} />
         <Route path="/confirm" element={ <PrivateRoute element={ <Confirm_order/>} />} />
         <Route path="/final" element={ <PrivateRoute element={ <FinalPage/>} />} />
         <Route path="/payment" element={ <PrivateRoute element={ <Payment/>} />} />
         <Route path="/timing" element={  <PrivateRoute element={<AutoTimer/>} />}/>
         <Route path="/food" element={<PrivateRoute element={<div className="burger"><Food/></div>}/>}/>
         <Route path="/contact" element={<div className="call"><Contact/></div>}/>
          <Route path="/about" element={<About/>}/>
            </Routes> 
     </div>    
        
       </div>  
       </BrowserRouter>
     </CartProvider>
    </>
    
  );
}
